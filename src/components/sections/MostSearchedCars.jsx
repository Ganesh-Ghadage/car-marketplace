import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { CarCard } from '..'
import { useState, useEffect } from 'react'
import { getAllListing } from '@/db/services/sevices'

function MostSearchedCars() {

    const [carList, setCarList] = useState()

    useEffect(() => {
      getAllListing()
      .then((res) => setCarList(res))
    }, [])

  return (
    <div className='mx-12 sm:mx-24'>
        <h2 className='font-bold text-3xl text-center mt-12 mb-6'>Most Searched Cars</h2>
        <div>
        <Carousel plugins={[
            Autoplay({
            delay: 2000,
            }),
        ]}>
            <CarouselContent >
                {carList?.map((car) => (
                    <CarouselItem key={car.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <CarCard car={car} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
    </div>
  )
}

export default MostSearchedCars