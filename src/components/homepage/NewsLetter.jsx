import React, { useContext } from "react";
import News from "../../assets/news.jpg";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../../ContextProviders/AuthContextProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

function NewsLetter() {
    const axiosPublic=useAxiosPublic();
    const{user}=useContext(AuthContext)

const handleNewsletter=async(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const name=user?.displayName;
    const image=user?.photoURL;
    const newsLetterData={email,name,image}
    
    try{
        const res=await axiosPublic.post('/newsletter',newsLetterData);
    }catch(err){
        console.log(err)
    }
   

    
}
  return (
    <>
     
     <section
        style={{
          background: `url(${News})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Fixed to ensure the image covers the section
        }}
        className="h-[50vh] relative"
      >
        {/* Content */}
        <div className="flex items-center justify-center h-full relative z-10 px-4">
          <div className="text-white text-center space-y-4 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold">Be the First to Know!</h2>
            <p className="text-lg lg:text-xl">
              Join our fitness community and stay updated with the latest trends and tips for a healthier lifestyle.
            </p>
            {/* Newsletter Subscription Form */}
            <form onSubmit={handleNewsletter} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                name='email'
                placeholder="Enter your email"
                className="w-full md:w-2/3 p-3 rounded-md outline-none"
              />
              <button
              
                className="px-6 py-3 bg-deepOrange text-white font-semibold rounded-md hover:bg-opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute bg-black/70 top-0 left-0 right-0 bottom-0"></div>
      </section>
    
    </>
  );
}

export default NewsLetter;
