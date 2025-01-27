import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Textarea } from 'flowbite-react';
import Select from 'react-select';
import Loading from '../../../components/Loading';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../ContextProviders/AuthContextProvider';
import { Fade } from 'react-awesome-reveal';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import DynamicTitle from '../../../components/DynamicTitle';

function AddNewSlot() {
  const { user } = useContext(AuthContext);
  const [selectedClassName, setSelectedClassName] = useState('');
const axiosPublic=useAxiosPublic();
  const axiosSecure = useAxiosSecure();
//loading class

const { data:classData, isLoading: isClassLoading, error: classError } = useQuery({
  queryKey: ['classes'],
  queryFn: async () => {
    const { data } = await axiosSecure.get('/class');
    return data;
  },
  
});


  //loading trainer data
  const { data, isLoading } = useQuery({
    queryKey: ['trainerr', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainerr/${user?.email}`);
      return data;
    },
    enabled: !!user?.email,
    onError: (error) => console.error(error),
  });

  const daysOptions = [
    { value: 'Sat', label: 'Saturday' },
    { value: 'Sun', label: 'Sunday' },
    { value: 'Mon', label: 'Monday' },
    { value: 'Tue', label: 'Tuesday' },
    { value: 'Wed', label: 'Wednesday' },
    { value: 'Thu', label: 'Thursday' },
    { value: 'Fri', label: 'Friday' },
  ];

  // State for available days, initialized empty
  const [availableDays, setAvailableDays] = useState([]);

  // Set the default selected days when `data.days` is available
  useEffect(() => {
    if (data?.days) {
      const defaultDays = data.days.map((day) => {
        const match = daysOptions.find((option) => option.value === day);
        return match || { value: day, label: day }; // Fallback in case no match
      });
      setAvailableDays(defaultDays);
    }
  }, [data?.days]);

  const [slotName, setSlotName] = useState('');
  const [slotTime, setSlotTime] = useState('');

  const handleDaysChange = (selectedOptions) => {
    setAvailableDays(selectedOptions || []);
  };

  //add slot function
  const handleSlotSubmit = async(e) => {
    e.preventDefault();
    const payload = {
      fullName: name, 
      email: data?.email, 
      age: age, 
      experience: experience, 
      image: image,
      skill: skill, 
      availableDays: availableDays,
      availableTime, 
      
      slotName, 
      slotTime, 
      className: selectedClassName,
      description, 
      trainerId:data?._id
    };

    console.log('Payload for API:', payload);
    try {
      
      const response = await axiosPublic.post('/slots', payload);
      console.log('Response from API:', response.data);
      if (response.data.insertedId) {
        Swal.fire({
          title: "Slot Added!",
          text: "You have added a sloy successfully",
          icon: "success",
        });
      }
      
    } catch (error) {
      toast.error('Error saving slot:', error);
      
    }
  };

  if (isLoading) return <Loading />;

  if (!data || data.length === 0) {
    return <p>No data found</p>;
  }
  const {
    age,
    availableTime,
    _id,
    description,
    experience,
    image,
    name,
    skill,
  } = data;
  console.log('trainers',data)
console.log("class",classData)
  return (
    <Fade>
    <DynamicTitle title='FitLogix | Add slot' />
      <div className="max-w-[900px] mx-auto mt-10 bg-[#3c3c3c] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add new slot</h2>
        <form onSubmit={handleSlotSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-white">Full Name</label>
            <input
              type="text"
              name="fullName"
              defaultValue={name}
              required
              readOnly
              className="block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-white">Email (read-only)</label>
            <input
              type="email"
              name="email"
              defaultValue={data?.email}
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
              defaultValue={age}
              required
              readOnly
              className="block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Experience */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-white">Experience</label>
            <input
              type="number"
              name="experience"
              defaultValue={experience}
              required
              readOnly
              className="block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Profile Image */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-white">Profile Image (URL)</label>
            <input
              type="text"
              name="image"
              readOnly
              defaultValue={image}
              required
              className="block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Skills */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-white">Skills</label>
            <div className="grid grid-cols-2 gap-2">
              {skill?.map((skillItem, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    value={skillItem}
                    name="skill"
                    checked
                    disabled
                    className="mr-2"
                  />
                  <label className="text-white">{skillItem}</label>
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
              value={availableDays}
              disabled
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
              defaultValue={availableTime}
              required
              readOnly
              className="block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Slot Name */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-white">Slot Name</label>
            <select
              name="slotName"
              value={slotName}
              onChange={(e) => setSlotName(e.target.value)}
              required
              className="block w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                Select Slot Name
              </option>
              <option value="Morning">Morning</option>
              <option value="Noon">Noon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          {/* Slot Time */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-white">Slot Time (hour)</label>
            <input
              type="number"
              name="slotTime"
              value={slotTime}
              onChange={(e) => setSlotTime(e.target.value)}
              required
              className="block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
           {/* Class Name */}
<div className="mb-4">
  <label className="block mb-2 font-medium text-white">Class Name</label>
  <select
    name="className"
    required
    className="block w-full p-2 border border-gray-300 rounded-lg"
    value={selectedClassName} 
    onChange={(e) => setSelectedClassName(e.target.value)}
  >
    <option value="">
      Select Slot Name
    </option>
    {classData?.map((classItem) => (
      <option key={classItem._id} value={classItem.className}>
        {classItem.className}
      </option>
    ))}
  </select>
</div>


          {/* Description */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-white">Description</label>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={5}
              value={description}
              name="description"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full p-2 bg-deepOrange text-white hover:bg-customBg"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </Fade>
  );
}

export default AddNewSlot;
