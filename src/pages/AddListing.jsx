import React, { useEffect, useState } from 'react'
import {carDetails} from '../shared/carDetails.json'
import {features} from '../shared/features.json'
import { CheckBoxField, DropdownField, InputField, TextAreaField, UploadImages } from '@/components';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import { BiLoaderAlt } from "react-icons/bi";
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getListingById, updateListing, uploadListing } from '@/db/services/sevices';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"



function AddListing() {

    const [formData, setFormData] = useState([])
    const [featuresList, setFeaturesList] = useState([])
    const [triggerUploadImages, setTriggerUploadImages] = useState()
    const [loader, setLoader] = useState(false)
    const [carData, setCarData] = useState([])

    const navigate = useNavigate()

    const {user, isSignedIn} = useUser()

    const [searchParams] = useSearchParams()
    const mode = searchParams.get('mode')
    const id = searchParams.get('id')
    //console.log(mode, id)

    useEffect(() => {
        setLoader(true)
        setCarData()
        getListingById(id)
            .then((result) => {
                setCarData(result[0]);
                setFeaturesList(result[0]?.features)
                setFormData(result[0])
                setLoader(false)
            })
        
    }, [])

    //console.log(carData);
    
    
    const handleInputChnage = (name, value) =>{
        setFormData((prev) => {
           return { ...prev,
            [name]: value}
        })

        //console.log(formData)
    }

    const handleFeaturChange = (name, value) => {
        setFeaturesList((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoader(true)
        //console.log(formData)

        if(mode==='edit'){
            try {
                const values = {
                    ...formData,
                    features: featuresList,
                    createdBy: user?.primaryEmailAddress.emailAddress,
                    userName: user?.fullName,
                    userIconUrl: user?.imageUrl,
                    createdAt: Date.now()
                }
                //console.log(values);
                const result = await updateListing(carData.id, values)
                //console.log(result);
                if(result){
                    //console.log(result)
                    setTriggerUploadImages(result[0]?.carListing.id)
                }
                //navigate('/profile')
            } catch (error) {
                console.log("Error :", error);
            }
        }else{
            try {
                const values = {
                    ...formData,
                    features: featuresList,
                    createdBy: user?.primaryEmailAddress.emailAddress,
                    userName: user?.fullName,
                    userIconUrl: user?.imageUrl,
                    createdAt: Date.now()
                }
                const result = await uploadListing(values)
                //console.log(result);
                if(result){
                    //console.log(result)
                    setTriggerUploadImages(result[0]?.carListing.id)
                }
            } catch (error) {
                console.log("Error :", error);
            }
        }
        setLoader(false)
    }

     
  if(isSignedIn){  
  return (
    <div className='px-10 md:px-20 my-10'>
        <h2 className='font-bold text-4xl'>Add your car listing</h2>

        <div className='p-10 border rounded-xl mt-10'>
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* Car Details */}
                <div>
                    <h2 className='font-medium text-xl mb-6'>Car Details</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {carDetails?.map((item) => (
                            <div key={item?.name}>
                                {item?.type === 'text' || item?.type === 'number' ? 
                                <InputField item={item} handleInputChnage={handleInputChnage} carData={carData}/> : 
                                item?.type === 'select' ?
                                <DropdownField item={item} handleInputChnage={handleInputChnage} carData={carData}/> :
                                item?.type === 'textarea' ?
                                <TextAreaField item={item} handleInputChnage={handleInputChnage} carData={carData}/>
                                : null}
                            </div>
                        ))}
                    </div>
                </div>
                <Separator className="my-6" />
                {/* Features List */}
                <div>
                    <h2 className='font-medium text-xl mb-6'>Features</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                        {features?.map((item) => (
                            <div key={item.name}>
                                <CheckBoxField item={item} handleInputChnage={handleFeaturChange} featuresList={featuresList}/>
                            </div>
                        ))}
                    </div> 
                </div>
                <Separator className="my-6" />
                {/* Car Images */}
                <UploadImages triggerUploadImages={triggerUploadImages} 
                setLoader={(v) => {setLoader(v)}} carData={carData} mode={mode}/>

                <div className='mt-10 bg-primary flex w-fit rounded-xl '>
                    <Button type="submit" disabled={loader}>
                        {loader? <BiLoaderAlt className='animate-spin' />
                         : "Submit"}</Button>
                </div>
            </form>
        </div>
    </div>
  )}else{
    return (
        <div className='flex items-center justify-center my-10'>
            <div className='shadow-md'>
                <Alert className='bg-blue-200  hover:scale-105'>
                    <AlertTitle className='mb-2 text-md'>You are Logged Out!</AlertTitle>
                    <AlertDescription className='text-md'>
                        You need to login to see all your listing!
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    )
  }
}

export default AddListing