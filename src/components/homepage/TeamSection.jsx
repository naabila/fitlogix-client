import React from 'react'
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionHeading from '../SectionHeading';

function TeamSection({trainerData}) {
  return (
    <>
            

       <section className='py-10'>
       <SectionHeading heading='Meet Our Team' subHeading='Our team is dedicated to promoting long-term health through evidence-based fitness strategies, emphasizing the importance of aerobic fitness for improved longevity and overall well-being' />
       <div className="container mx-auto px-5">
            {/* trainer card */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-10 gap-8">
                  {
                    trainerData.slice(0,6).map(trainer=>{
                      const{name,age,image,experience,days,description,_id}=trainer;
                      return(
                        <div key={_id} className="border border-deepOrange text-white rounded-lg shadow-lg overflow-hidden">
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    
                    <img
                      className="h-56 w-full object-cover"
                      src={image}
                      alt="Card"
                    />
                    
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <div className='flex items-center gap-2'><h3 className='font-semibold'>Age:</h3>{age}</div>
                    <div className='flex items-center gap-2'><h3 className='font-semibold'>Experience:</h3>{experience} years</div>
                    <div className='flex items-center gap-2 mt-2'><h3 className='font-semibold'>Slot:</h3>
                    {
                      days.map((s,indx)=>{
                        return <button className='text-deepOrange text-sm border border-deepOrange px-5 rounded-full' key={indx}>{s}</button>
                      })
                    }
                    </div>
                    <p className="text-gray-300 mt-2">
                    {description.substring(0,90)} ... <Link to={`/trainerdetails/${_id}`}
                      className='text-deepOrange text-sm'
                      >
                        Know more
                      </Link>
                    </p>
                    <div className="socials my-3 flex gap-3 text-deepOrange">
                    <CiFacebook />
                    <FiTwitter />
                    <FaInstagram />
                    </div>
                  </div>
                </div>
                      )
                    })
                  }
                </div>
        </div>
       </section>
    </>
  )
}

export default TeamSection