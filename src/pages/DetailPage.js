import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetail from '../hooks/useFetchDetail';
import { useSelector } from 'react-redux';
import { duration } from 'moment';
import Divider from '../components/Divider';
import useFetch from '../hooks/useFetch';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import { HiRadio } from 'react-icons/hi2';

const DetailPage = () => {
  const params = useParams();
  const {data} = useFetchDetail(`/${params?.explore}/${params?.id}`);
  const {data : castData} = useFetchDetail(`/${params?.explore}/${params?.id}/credits`)
  const imageURL = useSelector(state => state.movieoData.imageURL);
  const {data : similiarData} = useFetch(`/${params?.explore}/${params?.id}/similar`)
  const {data : recommendedData} = useFetch(`/${params?.explore}/${params?.id}/recommendations`)
  // console.log("data: ", castData);

  const duration = (Number(data?.runtime)/60).toFixed(1).split('.');
  // console.log(duration);

  const writer = castData?.crew?.filter(el => el?.department === "Writing")?.map(el => el?.name)?.join(', ');
  // console.log("writer", writer);
  return (
    <div>
      <div className='w-full h-[350px] relative hidden lg:block'>
        <div className='w-full h-full'>
          <img
            src={imageURL + data?.backdrop_path}
            alt='NoImage'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'>
        </div>
      </div>

      <div className='container mx-auto px-3 pt-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-11'>
        <div className='lg:-mt-28 relative mx-auto w-fit lg:mx-0 min-w-60'>
          <img
            src={imageURL + data?.poster_path}
            alt='NoImage'
            className='h-80 w-60 object-cover rounded-md'
          />
        </div>


        <div>
          <h2 className=' text-2xl lg:text-4xl font-bold text-white mt-3'>{data?.title || data?.name}</h2>
          <p className='text-neutral-400 '>{data?.tagline}</p>
          
          <Divider/>
          <div className='flex items-center my-3 gap-3'>
            <p>
              Rating : {Number(data?.vote_average).toFixed(1)}+
            </p>
            <span> |</span>
            <p>
              View : {data?.vote_count}k
            </p>
            <span> |</span>
            <p>
              Run Time : {duration[0]}h {duration[1]}min
            </p>
          </div>

          <Divider/>

          <div>
            <h3 className='text-2xl font-bold text-white mb-1 '>Overview</h3>
            <p>{data?.overview}</p>

            <Divider/>

            <div className='flex items-center gap-3 mt-3 text-center'>
              <p>
                Status : {data?.status}
              </p>
              <span> |</span>
              {
                data?.release_date ?? (
                <p>
                  Release Data : {data?.release_date}
                </p>
                )
              }
              <span> |</span>
              <p>
                Revenue : ${data?.revenue}
              </p>
            </div>
          </div>
          <Divider/>

          <div>
            <p>
              <span className='text-white'>Director</span> : {castData?.crew[0]?.name}
              <Divider/>
              <span className='text-white'>Writers</span> : {writer}
            </p>
          </div>
          <Divider/>

      
        </div>
      </div>

      <div className='container mx-auto'>
        <h2 className='font-bold text-lg lg:text-3xl my-4 pl-1' >CAST</h2>
          <div className='flex items-start gap-5 overflow-x-scroll'>
            {
              castData?.cast.filter(el => el?.profile_path).map((cast, index) => {
                // console.log(cast);
                return  (
                  <div className='min-w-[195px]'>
                    <img
                      src = {imageURL + cast?.profile_path}
                      alt='imagename'
                      className='h-72 w-full rounded-xl object-cover hover:scale-95 transition-all'
                    />
                    <p className='text-center text-xl text-bold'>{cast?.name}</p>
                    <p className='text-center text-sm text-neutral-400'>{cast?.character}</p>
                  </div>
                )
              })
            }
          </div>
      </div>

      <div>
        <HorizontalScrollCard data={similiarData} heading={'Similar ' + params?.explore} media_type={params?.explore}/>
      </div>
      <div>
        <HorizontalScrollCard data={recommendedData} heading={'Recommended ' + params?.explore} media_type={params?.explore}/>
      </div>
    </div>
  )
}

export default DetailPage