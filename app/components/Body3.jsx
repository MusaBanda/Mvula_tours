import { hooks } from "../hooks/Hooks";


function Body() {

  const { smallscreen } = hooks();

  return (
   
    <div className='min-h-80%'  style={{backgroundImage:"url('/bgs/hike.jpeg')",backgroundSize: "cover", backgroundPosition: "center"}}>
    
        <div className={`items-center justify-center flex min-h-40`}>
          <div className={`text-white rounded-2xl p-2 w-[90%]  flex mt-5  ${smallscreen ? ' items-center justify-center flex-col' : ''}`} style={{ backdropFilter: "blur(3px)" ,backgroundColor: "rgba(0, 0, 0, 0.5)"  }}>
            <div className=" ml-[2vw] text-2xl">
              <h1 className="text-center p-1">Upgrade Your Experience</h1>
              <h1 className="text-center p-1">Get exclusive member-only deals, early access and so much more!</h1>
            </div>
            <div className={` ${smallscreen ? '' : 'items-center justify-center flex ml-[8vw] mr-[8vw] '}`}>
              <h1 className="border text-center bg-pink-600 rounded-3xl w-[200px] p-2">learn more!</h1>
            </div>
          </div>
          
        </div>
      
      <div className="flex flex-wrap justify-center gap-6 w-full px-4 py-6">
        <div
          className=" text-white text-bold  w-full md:w-[45%] sm:h-[30vh] lg:h-[27vh] p-4 rounded-xl"
          style={{ backdropFilter: "blur(3px)", backgroundColor: "rgba(0, 0, 0, 0.5)"   }} >
            <h2 className="text-xl font-bold mb-2">About Mvula Tours</h2>
            <p>
              Mvula Tours is a dynamic travel service offering curated experiences across South Africa.
              We specialize in making travel seamless, exciting, and unforgettable — whether you're exploring cities, coasts, or the wild.
            </p>
        </div>

        <div
          className=" text-white text-bold w-full md:w-[45%] sm:h-[30vh] lg:h-[27vh] p-4 rounded-xl"
          style={{ backdropFilter: "blur(3px)" ,backgroundColor: "rgba(0, 0, 0, 0.5)"  }}>
            <h2 className="text-xl font-bold mb-2">Why We're the Best in SA</h2>
            <p>
              Our team blends local knowledge with world-class service. Mvula_Tours offers unbeatable pricing, custom packages,
              and 24/7 support making us the top choice for travelers seeking unforgettable South African adventures.
            </p>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
}

export default Body;