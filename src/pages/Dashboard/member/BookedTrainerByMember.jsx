import React, { useContext, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../ContextProviders/AuthContextProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading";
import DynamicTitle from "../../../components/DynamicTitle";
import SectionHeading from "../../../components/SectionHeading";
import { Button, Modal, Label, Textarea } from "flowbite-react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

function BookedTrainerByMember() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null); 
  
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // Fetch booked trainers
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["bookedtrainer", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/memberbookedtrainer/${user?.email}`);
      return data;
    },
  });

  // Handle review submission
  const handleReviewSubmit = async () => {
    if (!feedback || !rating) {
      alert("Please provide feedback and a star rating!");
      return;
    }

    const reviewData = {
      trainerId: selectedTrainer,
      feedback,
      rating,
      userName:user?.displayName,
      userImage:user?.photoURL
    };

    try {
      await axiosSecure.post("/submit-review", reviewData);
      toast.success("Review submitted successfully!");
      setOpenModal(false); 
      setFeedback(""); 
      setRating(0); 
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review.");
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

  // Render stars for the rating system
  const StarRating = () => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`cursor-pointer ${
              star <= rating ? "text-yellow-400" : "text-gray-400"
            }`}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <DynamicTitle title="Fitlogix | booked trainer" />
      <SectionHeading
        heading="Booked Trainer"
        subHeading="Connect with your booked trainer for personalized fitness guidance, progress tracking, and tailored workouts to achieve your health goals effectively. Your journey to a healthier you starts here!"
      />

      <div className="container mx-auto mt-10">
        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((trainerItem) => {
            const { _id, trainerImage, trainerName, slot, slotTime } =
              trainerItem;
            return (
              <div
                key={_id}
                className="flex flex-col md:flex-row border border-deepOrange bg-[#3c3c3c] rounded-lg overflow-hidden shadow-lg"
              >
                {/* Trainer Image */}
                <img
                  src={trainerImage}
                  alt={trainerName}
                  className="w-full md:w-40 h-[200px] md:object-cover"
                />

                {/* Trainer Details */}
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h5 className="text-lg font-bold text-white mb-2">
                      {trainerName}
                    </h5>
                    <p className="text-sm text-gray-300 mb-1">
                      Class: {trainerItem.class}
                    </p>
                    <p className="text-sm text-gray-300 mb-1">Slot: {slot}</p>
                    <p className="text-sm text-gray-300 mb-4">
                      Duration: {slotTime} hour{slotTime > 1 ? "s" : ""}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setOpenModal(true);
                      setSelectedTrainer(_id);
                    }}
                    className="text-deepOrange font-medium hover:underline p-0"
                  >
                    Review trainer
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-[#3c3c3c]">
          <h2>Review Trainer</h2>
        </Modal.Header>
        <Modal.Body className="bg-[#3c3c3c]">
          <div className="space-y-6">
            {/* Star Rating */}
            <div>
              <Label
                htmlFor="rating"
                value="Star Rating"
                className="mb-2 block text-white"
              />
              <StarRating />
            </div>

            {/* Feedback Textarea */}
            <div>
              <Label
                htmlFor="feedback"
                value="Feedback"
                className="mb-2 block text-white"
              />
              <Textarea
                id="feedback"
                name="feedback"
                placeholder="Enter your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-[#3c3c3c]">
          <Button onClick={handleReviewSubmit} className="bg-deepOrange">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookedTrainerByMember;
