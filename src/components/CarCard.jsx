import React from 'react'
import { Separator } from './ui/separator'
import { BsFuelPump } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { TbManualGearboxFilled } from "react-icons/tb";
import { IoMdOpen } from "react-icons/io";
import { Link } from 'react-router-dom';



function CarCard({car}) {
  return (
    <Link to={`/car-details/${car?.id}`}>
        <div className='rounded-xl border bg-white hover:shadow-lg cursor-pointer mb-4 text-sm'>

            <h2 className='absolute m-2 bg-primary text-white rounded-full px-2'>New</h2>

            <img
            src={car?.images[0]?.imageUrl} 
            alt='Car Image' width={'100%'} height={350}
            className='rounded-t-xl h-[180px] object-cover'/>

            <div>
                <h2 className='font-bold text-black text-lg my-2 mx-4'>{car?.title}</h2>

                <Separator />
                <div className='grid grid-cols-3 mt-5'>
                    <div className='flex flex-col items-center'>
                        <BsFuelPump className='text-lg mb-2' />
                        <h2>{car?.fuelType}</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <SlSpeedometer className='text-lg mb-2' />
                        <h2>{car?.mileage} kmpl</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <TbManualGearboxFilled className='text-lg mb-2' />
                        <h2>{car?.transmission}</h2>
                    </div>
                </div>
            </div>

            <Separator className="mt-2" />

            <div className='flex items-center justify-between mx-4 py-2'> 
                <h1 className='font-bold text-xl'>{"$" + car?.sellingPrice}</h1>
                <div className='flex text-primary text-sm gap-2 items-center'>
                    <p>View Details</p> 
                    <IoMdOpen />
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CarCard