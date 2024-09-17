import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { CarCard } from '.'



function Listing({carList}) {
  return (
    <div>
        <div className='flex justify-between items-center mx-10 my-6'>
            <h2 className='font-bold text-3xl'>Your Listings</h2>
            <Link to='/add-listing'>
                <Button>+ Sell your Car</Button>
            </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4'>
            {carList?.map((car) => (
              <div key={car.id}>
                <CarCard car={car} />
              </div>
            ))}
        </div>
    </div>
  )
}

export default Listing