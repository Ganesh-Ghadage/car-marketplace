import { getListingByCategory, getListingByOptions } from '@/db/services/sevices'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@/customQuery'
import { CarCard, Error, Loader, Search } from '@/components'

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


function SearchPage() {

    const [carList, setCarList] = useState()

    const [searchParams] = useSearchParams()

    const category = searchParams.get('category')

    const condition = searchParams.get('condition')
    const brand = searchParams.get('brand')
    const sellingPrice = searchParams.get('sellingPrice')

    const getListing = () => {
        if(category){
            return getListingByCategory(category);
        }else{
            return getListingByOptions(condition, brand, sellingPrice)
        }
   
    }

    const {data, loader, error} = useQuery(getListing)

    useEffect(() => {
        setCarList(data)
    }, [data])
    
    
    if(loader){
    return (
        <Loader />
    )
    }

    if(error){
    return (
        <Error />
    )
    }
    
    return (
        <div>
            <div className='flex justify-center bg-black p-10 lg:p-20'>
                <Search />
            </div>
            <h2 className='text-xl m-6'>Search Result</h2>
            <div className='mx-6'>
                {category ? <h2 className='text-3xl font-bold'>Category : {category}</h2> : null}
                <div className='mt-6'>
                    {searchParams.size == 0 ? 
                    <div className='flex justify-center m-10'>
                        <Alert className='w-fit px-4 bg-blue-100'>
                            <AlertDescription>
                                Search something to display listing
                            </AlertDescription>
                        </Alert>
                    </div> :
                    carList?.length > 0 ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4'>
                        {carList?.map((car) => (
                            <div key={car.id}>
                                <CarCard car={car} />
                            </div>
                        ))}
                    </div> : 
                    <div className='flex justify-center m-10'>
                        <Alert className='w-fit px-4 bg-blue-100'>
                            <AlertTitle>Sorry...!</AlertTitle>
                            <AlertDescription>
                                currently We don't have a car avaliable for your category
                            </AlertDescription>
                        </Alert>
                    </div> }
                </div>
            </div>
        </div>
    )
}

export default SearchPage