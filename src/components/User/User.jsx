import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='text-2xl font-bold text-white bg-orange-700 p-5 rounded-2xl'>User:{id}</div>
  )
}

export default User