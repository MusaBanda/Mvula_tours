'use client'
import RollingGallery from '../hooks/RollingGallery'
  
function Gallery(){
    return(
        <div style={{backgroundImage:"url('/bgs/ship.png')",  backgroundSize: "cover", backgroundPosition: "center", }}>
            
            <RollingGallery autoplay={true} pauseOnHover={true} />
        </div>
        
    )
}

export default Gallery;