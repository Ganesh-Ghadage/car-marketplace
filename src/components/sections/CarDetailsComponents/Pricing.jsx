import { Button } from '@/components/ui/button'
import React from 'react'
import { VscTag } from "react-icons/vsc";


function Pricing({carDetails}) {
  return (
    <div className='p-10 rounded-xl shadow-md border'>
        <h2>Our Price</h2>
        <h2 className='font-bold text-4xl'>$ {carDetails?.sellingPrice}</h2>

        <Button className='w-full mt-7' size='lg'>
            <VscTag className='text-2xl mr-2'/>
            Make an Offer
        </Button>
    </div>
  )
}

export default Pricing