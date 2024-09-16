import { uploadImagestoFirebase } from '@/db/services/firebaseServices';
import { deleteImage } from '@/db/services/sevices';
import React, { useEffect, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
 
function UploadImages({triggerUploadImages, setLoader, carData, mode}) {

    const [fileList, setFileList] = useState([])
    const [imageList, setImageList] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        setImageList([])
        if(mode === 'edit'){
            setImageList(carData?.images)
        }
    }, [carData])

    // console.log(imageList);
    // console.log(fileList);

    useEffect(() => { 
        if(triggerUploadImages){
            setLoader(true)
            uploadImagestoFirebase(fileList, triggerUploadImages, setLoader)
            setLoader(false)
            navigate('/profile')
        }
        
    }, [triggerUploadImages])

    const onFileUpload = (e) => {
        const files = e.target.files

        for(let i=0; i<files?.length; i++){
            const file = files[i]
            setFileList((prev) => ([...prev, file]))
        }
    }

    const removeImage = (file) => {
        const result = fileList.filter((item) => item != file);
        setFileList(result)
    }

    const removeImagefromBD = (image) => {
        //console.log(image);
        deleteImage(image)

        const newImageList= imageList.filter((item) => item!=image)
        setImageList(newImageList)
    }

  return (
    <div>
        <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>

            {mode==='edit' && 
                imageList?.map((image, index) => (
                    <div key={index} className='broder border-dotted border-primary'>
                        <IoMdCloseCircle className='absolute m-2 text-white text-xl cursor-pointer' onClick={() => removeImagefromBD(image)}/>
                        <img src={image.imageUrl} className='w-full rounded-xl ' />
                    </div>
                ))
            }

            {fileList?.map((file, index) => (
                <div key={index} className='broder border-dotted border-primary'>
                    <IoMdCloseCircle className='absolute m-2 text-white text-xl cursor-pointer' onClick={() => removeImage(file)}/>
                    <img src={URL.createObjectURL(file)} className='w-full rounded-xl ' />
                </div>
            ))}

            <label htmlFor='image-upload'>
                <div className='broder rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md '>
                    <h2 className='text-lg text-center text-primary'>+</h2>
                </div>
            </label>
            <input type='file' multiple={true} id='image-upload' className='hidden' onChange={(e) => onFileUpload(e)} />
        </div>
    </div>
  )
}

export default UploadImages