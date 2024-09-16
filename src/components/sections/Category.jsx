import React from 'react'
import data from '../../shared/data'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='mt-60 sm:mt-32'>
        <h2 className='font-bold text-center text-3xl mb-6'>Browse By Type</h2>
        
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
            {data?.carCategories.map((car) => (
                <div key={car.id} className='border rounded-xl p-3 items-center justify-center flex flex-col hover:shadow-md cursor-pointer'>
                    <Link to={`/search?category=${car.categoryName}`}>
                      {<car.icon className='text-3xl'/>}
                      <h2 className='mt-2'>{car.categoryName}</h2>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category