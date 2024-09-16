import {getDownloadURL, ref, uploadBytes, getStorage, deleteObject} from 'firebase/storage'
import { storage } from '../../../dbconfigs/firebaseConfig';
import { db } from '../../../dbconfigs/index';
import { carImages } from '@/db/schema';

export const uploadImagestoFirebase = (fileList, triggerUploadImages, setLoader) => {
    console.log('firebase upload fn');
    
    try {
        setLoader(true)
        fileList.forEach(async (file) => {
            const fileName=Date.now()+'.jpeg';
            const storgaeRef = ref(storage, 'car-marketplace/'+fileName);
            const metaData={
                contentType: 'image/jpeg'
            }
            try {
                await uploadBytes(storgaeRef, file, metaData)
                    .then((snapShot) => {
                        console.log("file uploaded");
                        console.log(snapShot);
                    }).then((res) => {
                        getDownloadURL(storgaeRef)
                            .then(async (downloadUrl) => {
                                console.log(downloadUrl);

                                await db.insert(carImages).values({
                                    imageUrl: downloadUrl,
                                    carListingId: triggerUploadImages
                                })
                            })
                    }).then(() => setLoader(false))
            } catch (error) {
                console.log('Upload Error :', error); 
            }
        })
    } catch (error) {
        console.log(error);   
    }
}

export const deleteImageFromFirebase = async(imageUrl) => {
    const fileRef = ref(storage, imageUrl); 

    await deleteObject(fileRef);
}