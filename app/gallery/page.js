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
            
        </div>
        
    )
}

export default Gallery;