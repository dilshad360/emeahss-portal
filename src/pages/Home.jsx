import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=''>
      <div className='flex justify-center items-center flex-col'>
      <h1 className='text-3xl'>EMEA HSS</h1>
      <Button variant='contained'>
        <Link to="/register">Register</Link>
      </Button>
      </div>
    </div>
  )
}

export default Home