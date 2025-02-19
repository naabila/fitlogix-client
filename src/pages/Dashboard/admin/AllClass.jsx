import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DynamicTitle from "../../../components/DynamicTitle";
import SectionHeading from "../../../components/SectionHeading";
import OurValues from "../../../components/OurValues";

const AllClass = () => {
  const axiosPublic = useAxiosPublic();

  // State for search and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;

  // Fetch classes with search and pagination
  const {
    isLoading: isClassLoading,
    isError: isClassError,
    error: classError,
    data: classResponse,
  } = useQuery({
    queryKey: ["bookedClasses", searchQuery, currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/class?search=${encodeURIComponent(searchQuery)}&page=${currentPage}&limit=${itemsPerPage}`
      );
      setTotalPages(Math.ceil(data.totalClasses / itemsPerPage));
      return data.classes || [];
    },
  });

  // Fetch trainers for all classes
  const {
    isLoading: isTrainerLoading,
    isError: isTrainerError,
    error: trainerError,
    data: allTrainerData = [],
  } = useQuery({
    queryKey: ["bookedTrainersForAllClasses"],
    queryFn: async () => {
      if (!classResponse?.length) return [];
      const trainerRequests = classResponse.map(async (classItem) => {
        try {
          const { data } = await axiosPublic.get(
            `/classtrainer/${encodeURIComponent(classItem.className)}`
          );
          return { className: classItem.className, trainers: data || [] };
        } catch (err) {
          console.error(`Error fetching trainers for ${classItem.className}:`, err);
          return { className: classItem.className, trainers: [] };
        }
      });
      return Promise.all(trainerRequests);
    },
    enabled: !!classResponse?.length,
  });

  // Show loading state
  if (isClassLoading || isTrainerLoading) {
    return <Loading />;
  }

  // Handle errors
  if (isClassError || isTrainerError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">
          Error: {classError?.message || trainerError?.message || "Something went wrong"}
        </p>
      </div>
    );
  }

  // Handle empty state
  if (!classResponse?.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white">No classes to show at this moment</p>
      </div>
    );
  }

  return (
    <>
      <DynamicTitle title="Fitlogix | All Classes" />
      <SectionHeading heading="All Classes" />

      <div className="container mx-auto">
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search classes..."
            className="p-2 border border-gray-300 rounded-md w-full max-w-sm"
          />
          <button
            onClick={() => setCurrentPage(1)}
            className="p-2 bg-deepOrange text-white rounded-md ml-2"
          >
            Search
          </button>
        </div>

       

        {/* Class Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4">
          {classResponse.map((classItem) => {
            const classTrainers = allTrainerData.find(
              (trainerData) => trainerData.className === classItem.className
            );

            return (
              <div
                key={classItem._id}
                className="rounded-2xl border border-deepOrange shadow-md bg-[#3c3c3c] p-4 w-full mb-8 max-w-sm mx-auto md:max-w-md"
              >
                <img
                  src={classItem.image || "https://via.placeholder.com/400x300"}
                  alt={`${classItem.className} Image`}
                  className="rounded-t-2xl w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-white mb-2">
                    {classItem.className}
                  </h2>
                  <p className="text-white mb-4">{classItem.details}</p>
                  <div className="flex items-center space-x-2">
                    {classTrainers?.trainers?.length ? (
                      classTrainers.trainers.map((trainer) => (
                        <Link to={`/trainerdetails/${trainer._id}`} key={trainer._id}>
                          <img
                            src={trainer.image}
                            alt={trainer.name}
                            className="w-10 h-10 rounded-full border border-gray-200"
                          />
                        </Link>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No trainers available</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
         {/* Pagination Controls */}
         <div className="flex justify-center space-x-2 mb-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 bg-gray-500 text-white rounded-md"
          >
            Previous
          </button>
          <p className="p-2">{`Page ${currentPage} of ${totalPages}`}</p>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 bg-deepOrange text-white rounded-md"
          >
            Next
          </button>
        </div>
      </div>
      <OurValues />
    </>
  );
};

export default AllClass;
