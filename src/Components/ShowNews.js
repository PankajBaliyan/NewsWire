import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getNewsItemById } from '../store/actions'
import Moment from 'react-moment';
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios';
import { showToast } from './utils/showToast';

const ShowNews = () => {
    const newsStore = useSelector((state) => state.news)
    const dispatch = useDispatch()
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getNewsItemById(id))
    }, [dispatch, id])

    const deleteNews = async () => {
        try {
            await axios.delete(`/api/news/${id}`)
            showToast('success', 'successfully deleted the data to news')
            navigate('/')
        } catch (error) {
            showToast('error', 'something went wrong, please try again later') // normal Error
        }
    }
    return <>
        {newsStore.newsItem ?
            <div className='article_container'>
                <h1>{newsStore.newsItem.title}</h1>
                <div className='image' style={{ backgroundImage: `url(https://picsum.photos/1920/1080)` }}></div>
                <div className='author'>
                    <p>Created By : {newsStore.newsItem.author}</p>
                    <p>Created At : <Moment format="DD/MM/YYYY">{newsStore.newsItem.createdAt}</Moment></p>
                </div>
                <LinkContainer to={`/news/${newsStore.newsItem._id}/edit`}>
                    <button className='btn btn-warning'>Edit News</button>
                </LinkContainer>
                <button className='btn btn-danger mx-2' onClick={deleteNews}>Delete News</button>
                <div className='mt-3 content'>
                    {newsStore.newsItem.body}
                </div>
            </div>
            : null}
    </>

}

export default ShowNews