import React, { useEffect } from 'react'
import { useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
       fetch('https://api.github.com/users/FarhanAadil196')
       .then(response => response.json())
       .then(data =>{
        console.log(data);
        setData(data)
    }) 
    }, [])
  return (
    <div className='text-center m-4 bg-orange-700 text-white p-4 text-3xl '>Github Followers: {data.follower}</div>
  )
}

export default Github