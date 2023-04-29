import React, { useEffect } from 'react'
import { showToast } from './utils/showToast'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/')
        showToast('error', 'Page Not Found')
    })
    return (
        <></>
    )
}

export default PageNotFound