import React from 'react'
import { useSelector } from 'react-redux';
// import moment from 'moment';
import { Link } from 'react-router-dom';

const Card = ({data, trending, index, media_type}) => {
  // console.log(data);
  const imageURL = useSelector(state => state.movieoData.imageURL);
  const mediaType = data.media_type ?? media_type;
  // console.log(imageURL + data.poster_path);
  return (
    <Link to={'/' + mediaType + '/' + data.id} className='w-full max-w-[250px] min-w-[230px] rounded-xl h-80 overflow-hidden block relative hover:scale-95 transition-all'>
      {
        data?.poster_path ? (
          <img
            src={imageURL + data?.poster_path}
            alt='imageUrl'
          />
        ) : (
          <div className='bg-neutral-600 h-full w-full flex justify-center items-center lg:text-lg'>
            No Image Found
          </div>
        )
      }
      
      <div className='absolute top-3'>
        {
          trending && (
            <div className='py-1 px-4 backdrop:blur-3xl rounded-r-full bg-black/50 text-white overflow-hidden'>
              # {index+1} Trending
            </div>
          )
        }
      </div>
      
      <div className='absolute bottom-0 h-14 backdrop:blur-3xl w-full bg-black/60 p-2'>
        <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data.title || data.name }</h2>
        <div className='text-sm text-neutral-400 flex justify-between items-center'>
          <p>{data?.release_date || data?.first_air_date}</p>
          <p className='text-xs px-1 text-white'>Rating : {data.vote_average}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card