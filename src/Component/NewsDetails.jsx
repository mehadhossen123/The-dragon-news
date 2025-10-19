import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import RightAside from '../homeLayout/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const [news,setNews]=useState({})
    console.log(news);
    const {id}=useParams();
    // console.log(id)
    const data=useLoaderData()
 useEffect(()=>{
    const findData=data.find(singleData=>singleData.id==id)
    setNews(findData)
 },[id,data])
 
 

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 py-10 gap-5 '>
                <section className='col-span-9'>
                    <h1 className='font-bold'>Dragon news</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>

                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>

                </aside>
            </main>
            
        </div>
    );
};

export default NewsDetails;