import { getListingById } from '@/db/services/sevices'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@/customQuery'
import { useUser } from '@clerk/clerk-react'
import { Description, Features, FinanceCalculator, HeaderDetails, ImageGallery, MostSearchedCars, OwnerInfo, Pricing, Specification } from '@/components'


function CarDetails() {

  const {id} = useParams()
  const {user} = useUser()
  
  const navigate = useNavigate()

  const getListing = () => {
    return getListingById(id);
  }

  const {data:carDetails, loader, error} = useQuery(getListing)  
  
  if(loader){
    return (
      <div> Loading... </div>
    )
  }

  if(error){
    return (
      <div> Something Went Wrong... </div>
    )
  }

  // return (
  //   <div className='mx-14'>
  //     <div className='flex flex-col sm:flex-row justify-between items-center my-4'>
  //       <h1 className='text-xl font-bold my-2'>{carDetails[0]?.title}</h1>
  //       {carDetails[0]?.createdBy === user?.primaryEmailAddress.emailAddress && 
  //       <div className='flex justify-between gap-4'>
  //         <Link to={`/add-listing?mode=edit&id=${carDetails[0]?.id}`}>
  //           <Button variant="outline" className="flex gap-2 text-lg bg-blue-100 hover:text-primary">Edit <LuClipboardEdit className='text-lg' /></Button>
  //         </Link>
  //         <AlertDialog>
  //           <AlertDialogTrigger  className="border bg-red-700 text-white w-fit flex items-center justify-center gap-2 px-2 rounded-lg hover:bg-white hover:text-red-700 hover:border hover:border-red-700" >Delete <RiDeleteBin6Line className='text-lg' /></AlertDialogTrigger>
  //           <AlertDialogContent>
  //             <AlertDialogHeader>
  //               <AlertDialogTitle>Are you absolutely sure you want to delete listing?</AlertDialogTitle>
  //               <AlertDialogDescription>
  //                 This action cannot be undone. This will permanently delete your listing
  //                 and remove your data from our servers.
  //               </AlertDialogDescription>
  //             </AlertDialogHeader>
  //             <AlertDialogFooter>
  //               <AlertDialogCancel>Cancel</AlertDialogCancel>
  //               <AlertDialogAction onClick={() => {deleteListing(carDetails[0]); navigate('/profile')}} className="border bg-red-700 hover:bg-white hover:text-red-700 hover:border hover:border-red-700">Continue</AlertDialogAction>
  //             </AlertDialogFooter>
  //           </AlertDialogContent>
  //         </AlertDialog>

          
  //       </div>}
  //     </div>
  //     <div className='flex flex-col lg:flex-row gap-12'>
  //       <div  className='basis-2/3'>
  //         <Carousel plugins={[
  //           Autoplay({
  //           delay: 2000,
  //           }),
  //         ]}>
  //           <CarouselContent>
  //             {carDetails[0]?.images.map((image) => (
  //               <CarouselItem key={image.id}>
  //                 <div className="p-1">
  //                   <img src={image.imageUrl} className='w-full object-cover' />
  //                 </div>
  //               </CarouselItem>
  //             ))}
  //           </CarouselContent>
  //           <CarouselPrevious />
  //           <CarouselNext />
  //         </Carousel>
  //       </div>
  //       <div className='basis-1/3'>
  //         <div>
  //           <h1 className='text-lg font-bold mb-2'>{carDetails[0]?.modelName}</h1>
  //           <p className='text-sm'>{carDetails[0]?.description}</p>
  //           <div className='flex items-center justify-center gap-3 my-8'>
  //             <p className='font-bold'>Price:</p>
  //             <p className='text-gray-600 line-through'> ${carDetails[0]?.originalPrice} </p>
  //             <p className='text-lg font-semibold'>${carDetails[0]?.sellingPrice}</p>
  //           </div>
  //           <Separator className="my-6" />
  //           <div className='flex flex-wrap mt-8 gap-2 '>
  //           <div className='flex flex-col items-center border-2 border-gray-700 rounded-xl p-6 w-fit bg-blue-100 hover:shadow-lg'>
  //                 <IoCarSportOutline className='text-lg mb-2' />
  //                 <h2>{carDetails[0]?.brand}</h2>
  //             </div>
  //             <div className='flex flex-col items-center border-2 border-gray-700 rounded-xl p-6 w-fit bg-blue-100 hover:shadow-lg'>
  //                 <MdOutlineCategory className='text-lg mb-2' />
  //                 <h2>{carDetails[0]?.category}</h2>
  //             </div>
  //             <div className='flex flex-col items-center border-2 border-gray-700 rounded-xl p-6 w-fit bg-blue-100 hover:shadow-lg'>
  //                 <SlSpeedometer className='text-lg mb-2' />
  //                 <h2>{carDetails[0]?.mileage} kmpl</h2>
  //             </div>
  //             <div className='flex flex-col items-center border-2 border-gray-700 rounded-xl p-6 w-fit bg-blue-100 hover:shadow-lg'>
  //                 <TbManualGearboxFilled className='text-lg mb-2' />
  //                 <h2>{carDetails[0]?.transmission}</h2>
  //             </div>
  //             <div className='flex flex-col items-center border-2 border-gray-700 rounded-xl p-6 w-fit bg-blue-100 hover:shadow-lg'>
  //                 <MdInvertColors className='text-lg mb-2' />
  //                 <h2>{carDetails[0]?.color}</h2>
  //             </div>
  //             <div className='flex flex-col items-center border-2 border-gray-700 rounded-xl p-6 w-fit bg-blue-100 hover:shadow-lg'>
  //                 <TbCar4Wd className='text-lg mb-2' />
  //                 <h2>{carDetails[0]?.driveType}</h2>
  //             </div>
  //             <div className='flex flex-col items-center border-2 border-gray-700 rounded-xl p-6 w-fit bg-blue-100 hover:shadow-lg'>
  //                 <BsFuelPump className='text-lg mb-2' />
  //                 <h2>{carDetails[0]?.fuelType}</h2>
  //             </div>
  //             <div className='flex flex-col items-center border-2 border-gray-700 rounded-xl p-6 w-fit bg-blue-100 hover:shadow-lg'>
  //                 <CiMoneyCheck1 className='text-lg mb-2' />
  //                 <h2>{carDetails[0]?.condition}</h2>
  //             </div>
  //             <div className='flex flex-col items-center border-2 border-gray-700 rounded-xl p-6 w-fit bg-blue-100 hover:shadow-lg'>
  //                 <CiBarcode className='text-lg mb-2' />
  //                 <h2>{carDetails[0]?.vin}</h2>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <Separator className='text-black my-6' />

  //     <div>
  //         <h2>Features List</h2>
  //         <div>
  //           {}
  //         </div>              
  //     </div>
  //   </div>
  // )


  return (
    <div>
      <div className='p-10 md:px-20'>
        {/* Header Details componenet */}
        <HeaderDetails carDetails={carDetails[0]} user={user} />

        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-20'>
          {/* left */}
          <div className='md:col-span-2'>
            {/* Image gallary */}
            <ImageGallery carDetails={carDetails[0]} />
            {/* Desciption */}
            <Description carDetails={carDetails[0]} />
            {/* Fatures List  */}
            <Features features={carDetails[0]?.features} />
            {/* Finance Calculator */}
            <FinanceCalculator />
          </div>

          {/* right */}
          <div>
            {/* Pricing */}
            <Pricing carDetails={carDetails[0]}/>
            {/* Car Specificatio */}
            <Specification carDetails={carDetails[0]} />

            {/* Owner Details */}
            <OwnerInfo carDetails={carDetails[0]} />
          </div>
        </div>
      </div>
      <MostSearchedCars />
    </div>
  )
}

export default CarDetails