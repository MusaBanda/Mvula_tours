'use client'
import { hooks } from '@/app/hooks/Hooks';
import Image from 'next/image';


function Contact(){

  const { smallscreen, LScreen, SScreen, onSubmit, result } = hooks();

return(
   <div style={{backgroundImage: "url('/bgs/waterfall.webp')",  backgroundSize: "cover", backgroundPosition: "center", color:'white'}}>
     {LScreen && <div className={`flex items-center justify-center min-h-screen`}>
        <div className={` h-[50vh] w-[40vw] flex items-center justify-center`}
        style={{backgroundImage: "url('/bgs/ship.png')", backgroundSize: "cover", backgroundPosition: "center"}}> 
            <div className='text-center font-extrabold text-[#020100]'>
                <h1>Mvula_tours</h1>
                <p>mvulatours@gmail.com</p>
                <p>+27 34567890</p>
            </div>
        </div>
        <div className="border border-black h-[50vh] w-[40vw] flex items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", backdropFilter: "blur(2px)"}}>
            <form onSubmit={onSubmit} className="w-[80%] flex flex-col p-[4px]">
                <div className=''>
                    <input  type="text" placeholder='NAME' 
                     className="border border-gray-400 p-2 h-[5vh] w-[30vw] rounded" required />
                    <input type="email" placeholder='Email'
                     className="border border-gray-400 p-2 h-[5vh] w-[30vw] rounded" required />
                    <textarea placeholder="Your message" 
                      className="border border-gray-400 p-2 rounded resize-none h-[10vh] w-[30vw]" required /> 
                    <div className="flex items-center justify-center gap-2 pt-5 ml-[-9]">
                    <button className="bg-blue-500 text-white py-1 w-[40vw] rounded" type="submit">Submit</button>
                    <button className="bg-gray-300 text-black py-1 w-[40vw] rounded" type="button">Cancel</button>
                  </div>
                  <p className='pt-2 pb-3'>{result}</p>
                </div> 
            </form>
        </div>
     </div>}
     {SScreen && <div className='min-h-screen'>
         <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='border h-[20vh] w-[80vw] flex flex-col items-center justify-center rounded-2xl mb-[5vh]'
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", backdropFilter: "blur(2px)"}}>
                <h1>Mvula-tours</h1>
                <p>mvulatours@gmail.com</p>
                <p>+27 34567890</p>
            </div>
            <div className='border h-[40vh] w-[80vw] flex items-center justify-center rounded-2xl'
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", backdropFilter: "blur(2px)"}}>
              <form onSubmit={onSubmit} className="w-[80%] flex flex-col ">
                  <input  type="text" placeholder='NAME' 
                     className="border border-gray-400 p-2 h-[5vh] w-[60vw] rounded required:" />
                  <input type="email" placeholder='Email'
                     className="border border-gray-400 p-2 h-[5vh] w-[60vw] rounded" required/>
                   <textarea placeholder="Your message" required
                      className="border border-gray-400 p-2 rounded resize-none h-[15vh] w-[60vw]"/> 

                  <div className="flex items-center justify-center gap-2 pt-5 ml-[-9]">
                    <button className="bg-blue-500 text-white py-1 w-[40vw] rounded" type="submit">Submit</button>
                    <button className="bg-gray-300 text-black py-1 w-[40vw] rounded" type="button">Cancel</button>
                  </div>
                  <p className='pt-2 pb-3'>{result}</p>
              </form>
            </div>
         </div>
      </div>}
   </div>
)

}


export default Contact;