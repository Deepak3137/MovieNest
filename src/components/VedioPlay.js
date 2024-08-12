import React from 'react'
import { IoClose } from 'react-icons/io5'
import useFetchDetail from '../hooks/useFetchDetail'

const VedioPlay = ({data, close, media_type }) => {
  const {data : vedioData} = useFetchDetail(`/${media_type}/${data?.id}/videos`)
  return (
    <div className='fixed bg-neutral-700 top-0 right-0 left-0 bottom-0 z-40 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-black w-full max-w-screen-lg max-h-[80vh] aspect-video rounded relative'>
        <button onClick={close} className='absolute -right-1 -top-6 text-3xl z-50'>
          <IoClose />
        </button>
        <iframe
        src={`https://www.youtube.com/embed/${vedioData?.results[0]?.key}`}
        className='w-full h-full'
        />
      </div>
    </div>
  )
}

export default VedioPlay