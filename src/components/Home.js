import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsItem } from '../store/actions'
import Masonry from "react-masonry-css";
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const Home = () => {
    const newsItem = useSelector((state) => state.news)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewsItem())
    }, [dispatch])

    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {newsItem.news ?
                    newsItem.news.map((item) => {
                        return (
                            <div key={item._id}>
                                <img style={{ width: '100%', height: '200px' }} src="https://picsum.photos/500" alt="article images" />
                                <div className="author">
                                    {item.author}
                                </div>
                                <div className="content">
                                    <div className="title">{item.title}</div>
                                    <div className="excerpt">{item.body}</div>
                                    <LinkContainer to={`/news/${item._id}`}>
                                        <Button variant="dark" className="mt-3">Read More</Button>
                                    </LinkContainer>
                                </div>
                            </div>
                        )
                    })
                    : null}
            </Masonry>
        </>
    )
}

export default Home