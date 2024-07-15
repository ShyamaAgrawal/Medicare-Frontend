import axios from 'axios'
import  { useEffect, useState } from 'react'
import { token } from '../../config'


const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetchData(url);
    },[url])

    const fetchData = async(url)=>{
        setLoading(true)
        try {
            // console.log(url)
            // console.log(token,'mai token hu')
            const res = await axios.get(url,{
                headers:{Authorization:`Bearer ${token}`}
            })
            // console.log(res.data.data,'res from get data')
            setData(res.data.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.response.data.message,'error from fetch user profile')
            setError(error.response.data.message)
        }
    }
    return {
        data,loading,error
    }
}

export default useFetchData