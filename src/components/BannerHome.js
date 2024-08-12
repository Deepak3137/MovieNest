import React, { useEffect, useState } from 'react'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const BannerHome = () => {
  const bannerData = useSelector(state => state.movieoData.bannerData);
  const imageURL = useSelector(state => state.movieoData.imageURL);

  const [currImage, setCurrImage] = useState(0);

  const handleNext = () => {
    if(currImage < bannerData.length - 1) {
      setCurrImage(currImage => currImage+1);
    }
    else{
      setCurrImage(0);
    }
  }

  const handlePrev = () => {
    if(currImage > 0) {
      setCurrImage(currImage => currImage-1);
    }
    else{
      setCurrImage(bannerData.length - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(currImage < bannerData.length - 1) {
        setCurrImage(currImage => currImage+1);
      }
      else{
        setCurrImage(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  })

  return (
    <div className='w-full h-full'>
      <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
        {
          bannerData.map((data, index) => {
            // console.log(data);
            return (
              <div key={data.id + "banner"+ index} className='min-h-[450px] min-w-full lg:min-h-full overflow-hidden relative group transition-all ' style={{transform : `translateX(-${currImage * 100}%)`}}> 
                <div>
                  <img
                    src= {imageURL + data.backdrop_path}
                    alt='moiveIMG'
                    className='h-full w-full object-cover'
                  />
                </div>

                {/* for swapping left and right the image */}
                <div className='absolute w-full h-full top-0 hidden items-center justify-between p-4 group-hover:lg:flex'>
                  <button onClick={handlePrev} className='bg-white rounded-full text-xl p-1 z-10 text-black'>
                    <FaAnglesLeft />
                  </button>
                  <button onClick={handleNext} className='bg-white rounded-full text-xl p-1 z-10 text-black'>
                    <FaAnglesRight />
                  </button>
                </div>


                {/* content of the image */}
                <div className='absolute top-0 h-full w-full bg-gradient-to-t from-neutral-900 to-transparent'> 
                </div>
                <div className='mx-auto container'>
                  <div className='absolute bottom-0 max-w-md px-3 py-5'>
                    <h2 className='font-bold test-2xl lg:text-4xl text-white drop-shadow-2xl'>{data?.title || data?.name}</h2>
                    <p className='text-ellipsis line-clamp-3 my-2'>{data?.overview}</p>
                    <div className='flex items-center gap-4 pb-4'> 
                      <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
                      <span> | </span>
                      <p>View : {Number(data?.popularity).toFixed(1)}k</p>
                    </div>
                    <Link to={'/' + data?.media_type + '/' + data?.id} className='text-black bg-white font-bold px-4 py-2 rounded mt-4 hover:bg-gradient-to-l from-red-300 to-orange-500 shadow-md transition-all hover:scale-105'>
                      Play Now
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BannerHome