import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = async() => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params : {
          page : pageNo
        }
      });
      // console.log(respone.data.results)
      setData((preve) => {
        return [
          ...preve,
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages);

    } catch (error) {
      console.log("fetchDataOfExplorePage", error);
    }
  }

  const handleScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNo(preve => preve + 1);
    }
  }

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='py-16'>
      <div className='container mx-auto'>
        <h3 className='capitalize text-2xl lg:text-3xl font-semibold my-4 flex justify-center lg:justify-start'>Popular {params.explore} shows</h3>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {
            data.map((exploreData, index) => {
              return (
                <Card data={exploreData} key={exploreData.id + "exploreData"} media_type={params.explore}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ExplorePage;