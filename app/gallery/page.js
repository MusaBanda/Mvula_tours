'use client'
import RollingGallery from '../hooks/RollingGallery'
  
function Gallery(){
    return(
        <div style={{backgroundImage:"url('/bgs/ship.png')",  backgroundSize: "cover", backgroundPosition: "center", }}>
            <div className='items-center justify-center flex'>
                <img src='/logo/logo1.png'/>
            </div>
            <div>
                <RollingGallery autoplay={true} pauseOnHover={false} />
            </div>
            <div className='flex items-center justify-center'>
                <video loop autoPlay muted className='p-6 '
                style={{  width: '80vw', height: '60vh',objectFit: 'cover', zIndex: 1, }}>
                    <source src="/gallery/aaa.mp4" type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            
        </div>
        
    )
}

export default Gallery;