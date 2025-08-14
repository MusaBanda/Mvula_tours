"use client";
import { useRouter } from "next/navigation";

function Body(){


  const router = useRouter();

  const goToForm = (formNumber) => {
    router.push(`/booking?form=${formNumber}`);
  };


    return(
        <div>

            <div className="min-h-[50vh]">
                <div className="flex flex-col items-center justify-center h-full pb-[2vh]">
                    <h1 className="text-2xl font-bold pt-[2vh]">Welcome to Mvula Tours</h1>
                    <p className="text-lg">Explore the beauty of South Africa with us.</p>
                </div>
                <div className="h-full text-center">
                    <h1 className="text-xl border-t font-bold pt-[2vh]">Discover Your Perfect Adventure</h1>
                    <p className="text-lg pt-[2vh]">Plan your own trip? Whether it’s for seniors, couples, or families — 
                        <a  onClick={() => goToForm(1)} className="text-blue-500 underline cursor-pointer text-2xl"> Click here </a>to start booking.</p>
                    <p className="text-lg pt-[2vh] w-[90%] mx-auto">We offer personalized tours designed around you. From the moment you start planning, we take time to understand your preferences, interests, and travel style. Every detail — from destinations and accommodations to activities and pace — is tailored to your needs. Whether you’re traveling solo, as a couple, with family, or in a group, we make sure your journey feels unique and truly your own.</p>
                </div>
                <div className="pt-[2vh] text-center">
                    <h1 className="text-xl font-bold border-t pt-[2vh]">Join us for an unforgettable journey.</h1>
                    <p className="text-lg pt-[2vh] ">Want to join one of our hosted adventures? 
                        <a  onClick={() => goToForm(2)} className="text-blue-500 underline cursor-pointer text-2xl"> Click here</a> to travel with us.</p>
                    <p className="text-lg pt-[2vh] w-[90%] mx-auto">You can also join one of our exciting hosted trips, where everything is planned for you from start to finish. Each itinerary includes the best destinations, comfortable stays, and unforgettable activities. All you need to do is pack your bags and enjoy. Whether it’s a scenic getaway, cultural exploration, or fun group holiday, our trips let you meet new people, share experiences, and make memories without the stress of planning.</p>
                </div>
            </div>

            <div className="bg-gray-300 min-h-[50vh]"> 
               

            </div>

             <div className="min-h-[50vh]"> 

            </div>

        </div>
    )

}

export default Body