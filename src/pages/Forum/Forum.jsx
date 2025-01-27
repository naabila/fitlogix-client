import React, { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../../components/Loading";
import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../components/SectionHeading";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import DynamicTitle from "../../components/DynamicTitle";

function Forum() {
  const axiosPublic = useAxiosPublic();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;

  // Fetch forum data
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["forum", currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/forum?page=${currentPage}&limit=${itemsPerPage}`
      );
      setTotalPages(Math.ceil(data.totalForums / itemsPerPage));
      return data.forums;
    },
    keepPreviousData: true,
  });

  // Handle upvote
  const handleUpvoat = async (id) => {
    try {
      await axiosPublic.patch(`/upvoat/${id}`);
      refetch();
    } catch (err) {
      console.error("Failed to upvote:", err);
    }
  };

  // Handle downvote
  const handleDownvoat = async (id) => {
    try {
      await axiosPublic.patch(`/downvoat/${id}`);
      refetch();
    } catch (err) {
      console.error("Failed to downvote:", err);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No Activity to show at this moment</p>
      </div>
    );
  }

  return (
    <>
    <DynamicTitle title='FitLogix | forum' />
      <SectionHeading
        heading="Explore the Fitness Forum"
        subHeading="Dive into Discussions, Share Your Insights, and Stay Motivated on Your Fitness Journey"
      />
      <div className="container mx-auto px-8">
        {/* Forum Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
          {data.map((d) => {
            const { title, image, details, role, _id, vote } = d;

            return (
              <div
                key={_id}
                className="flex relative flex-col gap-3 bg-[#3c3c3c] shadow-lg p-5 rounded-md border border-deepOrange"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-sm">{details}</p>
                </div>
                <div className="flex items-center gap-5 justify-start mt-5">
                  <div className="relative">
                    <FaArrowUp
                      onClick={() => handleUpvoat(_id)}
                      className="text-deepOrange cursor-pointer"
                    />
                    <p className="absolute -top-5 right-0">{vote}</p>
                  </div>
                  <div className="relative">
                    {vote === 0 ? (
                      ""
                    ) : (
                      <FaArrowDown
                        onClick={() => handleDownvoat(_id)}
                        className="text-deepOrange cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                <div className="absolute bg-deepOrange text-white top-8 right-8 px-3 rounded-full">
                  {role}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-5">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Previous
          </button>
          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-deepOrange text-white rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Forum;
