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
                    <img src={image.imageUrl} className='w-full h-[500px] object-cover rounded-xl' />
                  </div>
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

export default ImageGallery