import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const query = location?.search?.slice(3);

  const fetchData = async() => {
    try {
      const response = await axios.get(`search/multi`, {
        params : {
          query : location?.search?.slice(3),
          page : page
        }
      });
      // console.log(respone.data.results)
      setData((preve) => {
        return [
          ...preve,
          ...response.data.results
        ]
      })
      // setTotalPageNo(response.data.total_pages);

    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    if(query) {
      setPage(1);
      setData([]);
      fetchData();
    }
  }, [location?.search])

  const handleScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPage(preve => preve + 1);
    }
  }
  useEffect(() => {
    if(query) {
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='py-16'>
      <div className='lg:hidden mx-1 my-2 sticky top-[80px] z-30'>
        <input
          type='text'
          placeholder='Search here...'
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query.split('%20').join(' ')}
          className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-800'
        />
      </div>
      <div className='container mx-auto'>
        <h3 className='capitalize text-lg lg:text-3xl font-semibold my-4'>Search Results</h3>

        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {
            data.map((searchData, index) => {
              return (
                <Card data={searchData} key={searchData.id + "searchData"} media_type={searchData.media_type}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPage