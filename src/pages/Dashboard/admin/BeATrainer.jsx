import React, { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Textarea } from "flowbite-react";
import Select from "react-select";
import { AuthContext } from "../../../ContextProviders/AuthContextProvider";
import useRole from "../../../hooks/useRole";
import Swal from 'sweetalert2'
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const BeATrainer = () => {

  const axiosPublic=useAxiosPublic();
  const{user}=useContext(AuthContext);
  const[role,isLoading]=useRole()
  const skills = [
    "Yoga", "Pilates", "Strength Training", "Cardio Workouts", "CrossFit",
    "HIIT", "Bodybuilding", "Weight Loss Coaching", "Functional Training",
    "Flexibility and Mobility", "Boxing", "Kickboxing", "Jiu-Jitsu",
    "Endurance Training", "Powerlifting", "Nutrition Counseling",
    "Posture Correction", "Rehabilitation and Recovery", "Dance Fitness",
    "Prenatal and Postnatal Fitness"
  ];

  const daysOptions = [
    { value: "Sat", label: "Saturday" },
    { value: "Sun", label: "Sunday" },
    { value: "Mon", label: "Monday" },
    { value: "Tue", label: "Tuesday" },
    { value: "Wed", label: "Wednesday" },
    { value: "Thu", label: "Thursday" },
    { value: "Fri", label: "Friday" }
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    profileImage: "",
    skills: [],
    availableDays: [],
    availableTime: "",
    description:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedSkills = checked
      ? [...formData.skills, value]
      : formData.skills.filter((skill) => skill !== value);

    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleDaysChange = (selected) => {
    setFormData({ ...formData, availableDays: selected });
  };

  const handleSubmit = async(e) => {
    const selectedDays = formData.availableDays.map((day) => day.value);
    e.preventDefault();
    const form=e.target;
    const name=form.fullName.value;
    const email=form.email.value;
    const age=form.age.value;
    const image=form.image.value;
    const skill=formData.skills;
    const days=selectedDays;
    const availableTime=parseInt(form.availableTime.value);
    const description=form.description.value;
    const formDatas={name,email,age,image,skill,days,availableTime,description,status:"pending",role};
    console.log(formDatas);
  try{
    const res=await axiosPublic.post('/appliedtrainer',formDatas);
    if(res.data.insertedId){
      
      Swal.fire({
        title: "Application Sent!",
        text: "You applied successfully",
        icon: "success"
      });
      e.target.reset()
    
    }
    
  }catch(err){
    console.log(err)
  }
    
  }

  return (
    <Fade>
      <div className="max-w-[900px] mx-auto mt-10 bg-[#3c3c3c] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Become a Trainer</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-white">Full Name</label>
          <input
            type="text"
            name="fullName"
            defaultValue={user?.displayName}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-white">Email (read-only)</label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            onChange={handleChange}
            required
            readOnly
            className="block w-full p-2 bg-gray-200 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-white">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Profile Image */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-white">Profile Image (URL)</label>
          <input
            type="text"
            name="image"
            defaultValue={user?.photoURL}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Skills (Checkboxes) */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-white">Skills</label>
          <div className="grid grid-cols-2 gap-2">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  value={skill}
                  name="skill"
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label className="text-white">{skill}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Available Days */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-white">Available Days</label>
          <Select
            options={daysOptions}
            isMulti
            value={formData.availableDays}
            name="days"
            onChange={handleDaysChange}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        {/* Available Time */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-white">Available Time (Hours per Day)</label>
          <input
            type="number"
            name="availableTime"
            value={formData.availableTime}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-white">Description</label>
          <Textarea id="comment" placeholder="Leave a comment..." required rows={5}
          value={formData.description}
          name="description"
          onChange={handleChange}
          
           />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full p-2 bg-deepOrange text-white  hover:bg-customBg"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
    </Fade>
  );
};

export default BeATrainer;
