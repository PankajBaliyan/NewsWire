import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getNewsItemById } from '../store/actions'

const ShowNews = () => {
    const newsStore = useSelector((state) => state.news)
    const dispatch = useDispatch()
    const { id } = useParams();
    useEffect(() => {
        dispatch(getNewsItemById(id))
    }, [dispatch, id])
    return <>
        {newsStore.newsItem ?
            <div className='article_container'>
                <h1>{newsStore.newsItem.title}</h1>
                <div className='image' style={{ backgroundImage: `url(https://picsum.photos/1920/1080)` }}></div>
                <div className='author'>
                    <p>Created by : John Jeo</p>
                </div>
                <div className='mt-3 content'>
                    {newsStore.newsItem.body}
                </div>
            </div>
            : null}
    </>

}

export default ShowNews