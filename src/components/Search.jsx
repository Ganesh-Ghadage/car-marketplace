import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { IoSearch } from "react-icons/io5";
import data from '@/shared/data';
import { Link } from 'react-router-dom';


function Search() {

    const [condition, setCondition] = useState(null)
    const [sellingPrice, setsellingPrice] = useState(null)
    const [brand, setbrand] = useState(null)

  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center md:w-[60%] w-full'>
        <Select onValueChange={(value) => setCondition(value)}>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg my-2 md:my-0">
                <SelectValue placeholder="Car" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Old">Old</SelectItem>
            </SelectContent>
        </Select>

        <Separator orientation="vertical" className="hidden md:block"/>

        <Select onValueChange={(value) => setbrand(value)}>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg my-2 md:my-0">
                <SelectValue placeholder="Model" />
            </SelectTrigger>
            <SelectContent>
                {data.carMakers.map((car) => (
                    <SelectItem key={car.id} value={car.name}>{car.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>

        <Separator orientation="vertical" className="hidden md:block"/>

        <Select onValueChange={(value) => setsellingPrice(value)}>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg my-2 md:my-0">
                <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent>
                {data.pricing.map((price) => (
                    <SelectItem key={price.id} value={price.amount}>{price.amount}</SelectItem>
                ))}
            </SelectContent>
        </Select>

        <Link to={`/search?condition=${condition}&brand=${brand}&sellingPrice=${sellingPrice}`} reloadDocument={true} >
            <div className='ml-[40%] md:ml-0'>
                <IoSearch className='text-4xl bg-primary rounded-full text-white p-2 md:w-12 sm:w-[20%] hover:scale-105 transition-all cursor-pointer' />
            </div>
        </Link>
    </div>
  )
}

export default Search