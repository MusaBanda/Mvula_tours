import {roboto} from "../layout";


function Body(){
    return(

<div style={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden', }}>
    <video  src="/bgs/vid/G (1).mp4" autoPlay muted loop
        style={{ position: 'absolute', top: 0,left: 0, width: '100%', height: '100%',objectFit: 'cover',
                zIndex: 1,  }}/>
        <div className={`text-white font-bold sm:text-[2vw] lg:text-[2vw] md:text-[2vw] pt-[20vh] pr-[30%] pl-[1vw] h-full ${roboto.className}`}
            style={{ position: 'relative',zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)'  }}>
            <p 
            >Plan your perfect trip with our all-in-one tour planning platform. From finding the best destinations to booking tours and accommodations, we make travel simple, fun, and unforgettable. Start your journey today!</p>
        </div>
</div>

    )
}

export default Body