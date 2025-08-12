

function Body() {
  return (
   
    <div className='min-h-screen'  style={{backgroundImage:"url('/bgs/hike.jpeg')",backgroundSize: "cover", backgroundPosition: "center"}}>
    
        <div className={`items-center justify-center flex min-h-40`}>
          <div className={`border border-black flex items-center justify-center text-black pt-[2vh] h-[10vh]
            w-[90%] px-4 rounded-xl`} style={{ backdropFilter: "blur(5px)"  }}>
            <h1>New members features coming soon!</h1>
          </div>
        </div>
      
      <div className="flex flex-wrap justify-center gap-6 w-full px-4 py-6">
        <div
          className=" text-black text-bold  w-full md:w-[45%] sm:h-[30vh] lg:h-[27vh] p-4 border border-black rounded-xl"
          style={{ backdropFilter: "blur(5px)"  }} >
            <h2 className="text-xl font-bold mb-2">About Mvula Tours</h2>
            <p>
              Mvula Tours is a dynamic travel service offering curated experiences across South Africa.
              We specialize in making travel seamless, exciting, and unforgettable — whether you're exploring cities, coasts, or the wild.
            </p>
        </div>

        <div
          className=" text-black text-bold w-full md:w-[45%] sm:h-[30vh] lg:h-[27vh] p-4 border border-black rounded-xl"
          style={{ backdropFilter: "blur(5px)"  }}>
            <h2 className="text-xl font-bold mb-2">Why We're the Best in SA</h2>
            <p>
              Our team blends local knowledge with world-class service. Mvula Tours offers unbeatable pricing, custom packages,
              and 24/7 support — making us the top choice for travelers seeking unforgettable South African adventures.
            </p>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
}

export default Body;