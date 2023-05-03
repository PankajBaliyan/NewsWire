import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsItem } from '../store/actions'
import Masonry from "react-masonry-css";
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

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
                            <MDBCard>
                                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardText>{item.body}</MDBCardText>
                                    <LinkContainer to={`/news/${item._id}`}>
                                        <MDBBtn href='#'>Read More</MDBBtn>
                                    </LinkContainer>
                                </MDBCardBody>
                            </MDBCard>

                        )
                    })
                    : null}
            </Masonry>
        </>
    )
}

export default Home