import { IconFiled } from '@/components'
import carSpecification from '@/shared/carSpecification'
import React from 'react'

function Specification({carDetails}) {
  return (
    <div className='p-10 rounded-xl border shadow-md mt-7'>
        <h2 className='text-lg font-medium'>Specification</h2>

        {carDetails && carSpecification.map((item) => (
            <div className='mt-5 flex items-center justify-between' key={item.name}>
                <h2 className='flex gap-2'> <IconFiled icon={item.icon} /> {item.label} </h2>
                <h2>{carDetails[item.name]}</h2>
            </div>
        ))}

    </div>
  )
}

export default Specification