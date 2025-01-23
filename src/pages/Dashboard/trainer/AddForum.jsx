import React, { useState } from "react";
import { TextInput, Textarea, Button, Label, FileInput } from "flowbite-react";
import axios from "axios"; // Import Axios
import SectionHeading from "../../../components/SectionHeading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useRole from "../../../hooks/useRole";

function AddForum() {
  const[role]=useRole()
  const axiosSecure = useAxiosSecure();
  const [title,setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [details, setDetails] = useState("");
  const [uploading, setUploading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    let imageUrl = ""; 

    // Convert the image to FormData for upload
    const formData = new FormData();
    formData.append("image", image);

    try {
      setUploading(true);

      // Upload image to ImgBB
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`,
        formData
      );

      imageUrl = response.data.data.display_url; 
      setUploading(false);
    } catch (error) {
      setUploading(false);
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
      return; 
    }

    try {
      // Form data to submit
      const formDataToSubmit = {
        title,
        image: imageUrl, 
        details,
        role,
        vote:""
      };

      // Add class to the database
      const { data } = await axiosSecure.post("/forum", formDataToSubmit);

      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Forum Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      // Reset form 
      setTitle("");
      setImage(null);
      setDetails("");
      document.getElementById("image").value = "";
    } catch (err) {
      console.error("Error adding class to the database:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add the Forum. Please try again.",
      });
    }
  };
  return (
    <>
    <SectionHeading heading="Add Forum" />
    <div className="max-w-xlg mx-auto p-6 bg-[#3c3c3c] border border-deepOrange rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Class Name Input */}
        <div>
          <Label
            htmlFor="Title"
            value="title"
            className="mb-2 block text-white"
          />
          <TextInput
            id="className"
            name="className"
            type="text"
            placeholder="Enter class name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <Label
            htmlFor="image"
            value="Image"
            className="mb-2 block text-white"
          />
          <FileInput
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        {/* Class Details */}
        <div>
          <Label
            htmlFor="details"
            value="Details"
            className="mb-2 block text-white"
          />
          <Textarea
            id="details"
            name="details"
            placeholder="Enter class details"
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-deepOrange hover:bg-lightOrange"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Add Forum"}
        </Button>
      </form>
    </div>
  </>
  )
}

export default AddForum