"use client";
import { useRouter } from "next/navigation";
import {hooks, smallscreen} from '../hooks/Hooks';
import {ovo} from '../layout'

function Body(){

    const {smallscreen} = hooks();

  const router = useRouter();

  const goToForm = (formNumber) => {
    router.push(`/booking?form=${formNumber}`);
  };


    return(
        <div>

            <div className="p-5 min-h-[50vh]">
                <div className="flex flex-col items-center justify-center h-full pb-[2vh]">
                    <h1 className={`text-2xl font-bold pt-[2vh] ${ovo.className}`}>Welcome to Mvula Tours</h1>
                    <p className={`text-lg ${ovo.className}`}>Explore the beauty of South Africa with us.</p>
                </div>
                <div className="h-full text-center">
                    <h1 className={`text-xl border-t font-bold pt-[2vh] ${ovo.className}`}>Discover Your Perfect Adventure</h1>
                    <p className={`text-lg pt-[2vh] ${ovo.className}`}>Plan your own trip? Whether it’s for seniors, couples, or families — 
                        <a  onClick={() => goToForm(1)} className="text-blue-500 underline cursor-pointer text-2xl"> Click here </a>to start booking.</p>
                    <p className={`text-lg pt-[2vh] w-[90%] mx-auto ${ovo.className}`}>We offer personalized tours designed around you. From the moment you start planning, we take time to understand your preferences, interests, and travel style. Every detail — from destinations and accommodations to activities and pace — is tailored to your needs. Whether you’re traveling solo, as a couple, with family, or in a group, we make sure your journey feels unique and truly your own.</p>
                </div>
                <div className="pt-[2vh] text-center">
                    <h1 className={`text-xl font-bold border-t pt-[2vh] ${ovo.className}`}>Join us for an unforgettable journey.</h1>
                    <p className={`text-lg pt-[2vh] p-2 ${ovo.className}`}>Want to join one of our hosted adventures? 
                        <a  onClick={() => goToForm(2)} className="text-blue-500 underline cursor-pointer text-2xl"> Click here</a> to travel with us.</p>
                    <p className={`text-lg pt-[2vh] w-[90%] mx-auto ${ovo.className}`}>You can also join one of our exciting hosted trips, where everything is planned for you from start to finish. Each itinerary includes the best destinations, comfortable stays, and unforgettable activities. All you need to do is pack your bags and enjoy. Whether it’s a scenic getaway, cultural exploration, or fun group holiday, our trips let you meet new people, share experiences, and make memories without the stress of planning.</p>
                </div>
            </div>

            <div className="bg-gray-300 min-h-[70vh]"> 
               <div className={`flex flex-col-2 items-center justify-center h-full relative  `}>
                    <img src="/bgs/plane.png" alt="Hero Image" className={`top-0  ${smallscreen ? 'w-[50vw] mt-[9vh]':''}`} />
                    <img src="/bgs/fam.png" alt="Hero Image" className={`mt-4 ${smallscreen ? 'w-[40vw] h-[25vh] mt-[9vh]':''}`} />
               </div>
                <div className={`absolute right-0  ${smallscreen ? 'mt-[-4vh] mr-2 ml-[40%]':'mt-[-20vh] mr-10 ml-[50%]'}`} >
                    <p>Experience the beauty of the world with Mvula Tours, where every journey is crafted to showcase the world’s breathtaking landscapes, vibrant culture, and unforgettable adventures❤️.</p>
                </div>
                <div className={`${smallscreen ? 'absolute left-[-20%] ':'hidden'}`} >
                    <img src="/logo/logo1.png" width={300} />
                </div>

            </div>

             <div className="min-h-[50vh]"> 

            </div>

        </div>
    )

}

export default Body