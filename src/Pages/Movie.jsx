import React, { useEffect, useState } from 'react'
import axios from "axios"

const Movie = () => {
    const [data,setdata] = useState([])
console.log(data)
    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"

    const getApiFunc = async () =>{
        try {
            const res = await axios.get(API)
            // console.log(res.data.Search)
            setdata(res.data.Search)
            
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() =>{
        getApiFunc()
    }, [])
  return (
    <>

    </>
  )
}

export default Movie