import React from 'react'
import { Carousel } from "flowbite-react";
import 'flowbite';
import useRole from '../hooks/useRole';
import NewsLetter from '../components/homepage/NewsLetter';
import Hero from '../components/Hero';
function Home() {
  const[role,isLoading]=useRole();
  console.log(role)
  return (
    <>
    <Hero />



<NewsLetter />
   
</>
  )
}

export default Home