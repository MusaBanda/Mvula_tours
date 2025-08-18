"use client";
import { useSearchParams,  useRouter  } from "next/navigation";
import {hooks} from '../hooks/Hooks';


export default function BooPage() {

  const searchParams = useSearchParams();
  const form = searchParams.get("form") || "1";
  const { onSubmit, result } = hooks();

  const router = useRouter();
  const goToForm = (formNumber) => {
    router.push(`/booking?form=${formNumber}`);
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-white-300 " style={{backgroundImage: "url('bgs/waterfall.webp')", backgroundSize: 'cover'}}> 
      {form === "1" && (
        <div style={{backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.4)'}}> 
          <div className="text-white">
            <h1 className="text-center text-2xl font-bold">Tell us about your perfect trip! Where you would like go, who would you travel with, and what experiences would make it unforgettable?</h1>
            <h1 className="text-center text-1xl font-bold">If you want to join us for our own hosted trip
              <a className="text-green-500 cursor-pointer active:text-amber-300" onClick={() => goToForm(2)}> click here</a>. Trust us for an unforgettable experience!</h1>
          </div>
          <div className="flex items-center justify-center min-h-screen ">
            <form onSubmit={onSubmit} className="flex flex-col gap-[2vh] w-[80%]  border border-white p-[5vh] rounded-2xl ">
                <input className="border-b-2 border-white placeholder:text-center placeholder:text-white" name="name" type="text" placeholder="Name" required/>
                <input className="border-b-2 border-white placeholder:text-center placeholder:text-white" name="surname" type="text" placeholder="Surname" />
                <input className="border-b-2 border-white placeholder:text-center placeholder:text-white" name="email" type="text" placeholder="Email" required />
                <input className="border-b-2 border-white placeholder:text-center placeholder:text-white" name="phone" type="text" placeholder="Phone" required/>
                <input className="border-b-2 border-white placeholder:text-center placeholder:text-white" name="location" type="text" placeholder="Location full address"  required/>
                <select name="tripType" className="border-b-2 border-white text-white">
                    <option value="">Select</option>
                    <option value="solo">Solo trip</option>
                    <option value="family">Family trip</option>
                    <option value="group">Group trip</option>
                    <option value="couples">Couples trip</option>
                </select>

                <textarea className="border-2 border-white h-[30vh] placeholder:text-center  placeholder:text-white rounded-xl" name="description" 
                placeholder="Full Description of what you have in mind " required></textarea>
                <div className="flex items-center justify-center gap-2">
                    <button className="bg-blue-500 active:bg-amber-300 text-white py-2 w-[40vw] rounded" type="submit">Submit</button>
                    <button className="bg-gray-300 active:bg-amber-300 text-black py-2 w-[40vw] rounded" type="button">Cancel</button>
                </div>
                <p>{result}</p>
            </form>  
          </div>
        </div>
      )}

      {form === "2" && (
        <div className="bg-gray-800 text-white min-h-screen"> 
          <div className="p-6 text-center justify-center">
            <p>Join us on our next trip to the Botanical Gardens, where nature’s beauty comes alive! Explore lush greenery, vibrant flowers, and peaceful walking paths that promise a refreshing escape. Whether you’re a nature lover or simply looking for a relaxing day outdoors, this trip offers an unforgettable experience full of discovery and inspiration.</p>
          </div>
          <div>
            
            <video className="w-full h-[50vh]" loop autoPlay muted>
              <source src="/tours/t.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="p-4">
            <p className="text-center" >For more information about our trips, feel free to contact us!</p>
             <details className="mb-4 border-b">
              <summary className="text-center text-2xl">Interested? book your space now</summary>
               <form className="bg-gray-400 flex flex-col items-center p-4 gap-5 rounded" onSubmit={onSubmit}>
                <input className="border-b border-black placeholder:text-black " type="text" placeholder="Name" required />
                <input className="border-b border-black placeholder:text-black " type="email" placeholder="Email" required />
                <input className="border-b border-black placeholder:text-black " type="text" placeholder="Phone" required />
                <input className="border-b border-black placeholder:text-black " type="text" placeholder="where do you stay" required />
                <input className="border-b border-black placeholder:text-black " type="text" placeholder="How many individuals" />
                <p>{result}</p>
                <button className="bg-blue-500 text-white p-2 mt-2 w-full rounded" type="submit">Book Now</button>
               </form>
              </details>
          </div>
        </div>
      )}
    </div>
  );
}

