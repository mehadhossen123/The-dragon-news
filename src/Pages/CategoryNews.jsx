
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard';

const CategoryNews = () => {
    const [categoryNews,setCategoryNews]=useState([])
    const {id}=useParams()
    const data=useLoaderData()
    console.log(data);



      useEffect(() => {
     if(id=="0"){
        setCategoryNews(data)
     }
     else if(id=="1"){
         const filterData = data.filter((news) => news.others.is_today_pick==true);
         setCategoryNews(filterData)

     }
     else{
        const filterData = data.filter((news) => news.category_id == id);
        setCategoryNews(filterData);

     }
        
        
      }, [id, data]);
    
    return (
        <div>
            <h1>Total <span className='text-secondary'>{categoryNews.length}</span> news found</h1>
           <div className='grid grid-cols-1'>
            {
                categoryNews.map((news)=><NewsCard key={news.id} news={news}></NewsCard>)
            }

           </div>
            
        </div>
    );
};

export default CategoryNews;