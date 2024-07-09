import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { token } from '../../config'


const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetchData();
    },[url])

    const fetchData = async()=>{
        setLoading(true)
        try {
            // console.log(url)
            console.log(token,'mai token hu')
            const res = await axios.get(url,{
                headers:{Authorization:`Bearer${token}`}
            })
            console.log(res,'res from get data')
            setData(res)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error,'error from fetch user profile')
            setError(error.message)
        }
    }

    return {
        data,loading,error
    }
}

export default useFetchData