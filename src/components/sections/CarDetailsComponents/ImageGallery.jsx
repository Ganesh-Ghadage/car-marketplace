import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

function ImageGallery({carDetails}) {
  return (
    <div>
        <div>
           <Carousel plugins={[
            Autoplay({
            delay: 2000,
            }),
          ]}>
            <CarouselContent>
              {carDetails?.images.map((image) => (
                <CarouselItem key={image.id}>
                  <div>
                    <img src={image.imageUrl} className='w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover rounded-xl' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-3' />
            <CarouselNext className='right-3'/>
          </Carousel>
        </div>
    </div>
  )
}

export default ImageGallery