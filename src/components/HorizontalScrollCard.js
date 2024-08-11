import React, { useRef } from 'react'
import Card from './Card'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

const HorizontalScrollCard = ({data = [], heading, trending, media_type}) => {
  const containRef = useRef();

  const handleNext = () => {
    containRef.current.scrollLeft += 300;
  }

  const handlePrev = () => {
    containRef.current.scrollLeft -= 300;
  }
  return (
    <div>
      <div className='mx-auto px-3 my-11 container'>
        <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white capitalize '>{heading}</h2>
        <div className='relative'>
          <div ref={containRef} className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 grid-flow-col overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar'>
            {
              data.map((data, index) => {
                return (
                  <Card key={data.id+"heading"+index} data={data} trending={trending} index={index} media_type={media_type}/>
                )
              })
            }
          </div>

          <div className='absolute top-0 w-full h-full hidden lg:flex items-center justify-between'>
            <button onClick={handlePrev} className='bg-white p-1 text-black rounded-full z-10 -ml-2'>
              <FaAnglesLeft />
            </button>

            <button onClick={handleNext} className='bg-white p-1 text-black rounded-full z-10 -mr-2'>
              <FaAnglesRight />
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalScrollCard