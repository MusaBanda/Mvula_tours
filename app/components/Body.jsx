

function Body() {
  return (
    
    <div className='bg-gray-400 min-h-screen'>
        <div className={`items-center justify-center flex min-h-40`}>
          <div className={`border border-black-300 bg-gradient-to-r from-black via-purple-400 to-blue-900 
            flex items-center justify-center text-white pt-[2vh] h-[10vh] w-[90%] px-4 drop-shadow-[0_4px_10px_rgba(138,43,226,0.7)] rounded-xl`}>
            <h1>New members features coming soon!</h1>
          </div>
        </div>
      
      <div className="flex flex-wrap justify-center gap-6 w-full px-4 py-6">
        <div
          className="bg-gradient-to-r from-black via-purple-500 to-blue-900 text-white 
          w-full md:w-[45%] h-[27vh] p-4 rounded-xl"
          style={{ boxShadow: '0 4px 20px rgba(138, 43, 226, 0.6)' }} >
            <h2 className="text-xl font-bold mb-2">About Mvula Tours</h2>
            <p>
              Mvula Tours is a dynamic travel service offering curated experiences across South Africa.
              We specialize in making travel seamless, exciting, and unforgettable — whether you're exploring cities, coasts, or the wild.
            </p>
        </div>

        <div
          className="bg-gradient-to-r from-black via-purple-500 to-blue-900 text-white 
          w-full md:w-[45%] h-[27vh] p-4 rounded-xl"
          style={{ boxShadow: '0 4px 20px rgba(0, 0, 255, 0.5)' }}>
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