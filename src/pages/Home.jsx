import React from 'react'
import 'flowbite';
import NewsLetter from '../components/homepage/NewsLetter';
import Hero from "../components/Hero"
import About from '../components/homepage/About';
import DynamicTitle from '../components/DynamicTitle';
import FeaturesSection from '../components/homepage/FeatureSection';
import FeaturedClass from '../components/homepage/FeaturedClass';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loading from '../components/Loading';
import BlogPost from '../components/homepage/BlogPost';
import TeamSection from '../components/homepage/TeamSection';
import Teastimonial from '../components/homepage/Teastimonial';
import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import OurValues from '../components/OurValues';


function Home() {
  const axiosPublic=useAxiosPublic()
  // Fetch latest class data
  const { isLoading:latestClassLoading, isError:isLatestClassError, data:latestClassData, error, refetch } = useQuery({
    queryKey: ["latest"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        '/latestclass'
      );
     
      return data || [];
    },
    
  });

  
    // Fetch forum data
    const { isLoading:forumLoading, data:forumData } = useQuery({
      queryKey: ["latestforum"],
      queryFn: async () => {
        const { data } = await axiosPublic.get('/latestforum');
      return data || []
        
      },
      
    });
// trainer data
    const { isLoading:trainerDataLoading, data:trainerData } = useQuery({
        queryKey: ['trainers'],
        queryFn: async ()=>{
          try{
            const {data}=await axiosPublic.get('/trainers');
            return data ||[]
          }catch(err){
            console.log(err)
          }
        },
      })

//Review
const { isLoading:reviewLoading, data:reviewData } = useQuery({
  queryKey: ["review"],
  queryFn: async () => {
    const {data} = await axiosPublic.get('/review');
  return data || []
    
  },
  
});



  if (latestClassLoading || forumLoading || trainerDataLoading || reviewLoading) {
    return <Loading />;
  }

  if (isLatestClassError) {
    return <span>Error: {error.message}</span>;
  }

  if (!latestClassData || latestClassData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No class to show at this moment</p>
      </div>
    );
  }


  return (
    <>
    <DynamicTitle title='Fitloxix|home' />
    <Hero />
    <FeaturesSection />
    <About />
    <FeaturedClass latestClassData={latestClassData} />
    <Pricing />
    <Teastimonial reviewData={reviewData} />
    <WhyChooseUs />
    <BlogPost forumData={forumData} />
    <OurValues />
    <TeamSection trainerData={trainerData} />
    <NewsLetter />
   
</>
  )
}

export default Home