import React from 'react'
import { GiCheckMark } from "react-icons/gi";


function Features({features}) {
  return (
    <div className='p-10 border shadow-md rounded-xl my-7'>
        <h2 className='font-medium text-2xl'>Features</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8'>
            {features && Object.entries(features).map(([features, value], idx) => (
                <div className='flex gap-2 items-center' key={idx}>
                    <GiCheckMark className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                    <h2>{features}</h2>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Features