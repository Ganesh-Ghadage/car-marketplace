import { Button } from '@/components/ui/button'
import sendBridServices from '@/shared/services/sendBridServices'
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function OwnerInfo({carDetails}) {

  const {user} = useUser()

  const navigate = useNavigate()

  const onMsgSendClick = async () => {
    const customerId = (user?.primaryEmailAddress.emailAddress).split('@')[0]
    const ownerId = (carDetails?.createdBy).split('@')[0]

    //create customer user id
    try {
      await sendBridServices.createSendBirdUser(customerId, user?.fullName, user?.imageUrl)
      .then((resp) => console.log(resp))
    } catch (error) {
      console.log(error)
    }

    //create owner user id
    try {
      await sendBridServices.createSendBirdUser(ownerId, carDetails?.userName, carDetails?.userIconUrl)
      .then((resp) => console.log(resp))
    } catch (error) {
      console.log(error)
    }

    //create chanel
    try {
      await sendBridServices.createSendBirdChannel([customerId, ownerId], carDetails?.title)
      .then((resp) => {
        console.log(resp);
        console.log("Channel Created")
        navigate('/profile')
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='p-10 overflow-auto border rounded-xl shadow-md mt-7'>
      <h2 className='font-medium text-2xl mb-3'>Owner Details</h2>
      <div className='flex items-center gap-4'>
        <img src={carDetails?.userIconUrl} className='w-[30px] h-[30px] sm:w-[70px] sm:h-[70px] rounded-full' />
        <div>
          <h2 className='text-sm sm:text-lg font-bold'>{carDetails?.userName}</h2>
          <h2 className='text-sm  sm:mt-2 text-gray-600'>{carDetails?.createdBy}</h2>
        </div>
      </div>
      <Button className="w-full mt-6" onClick={onMsgSendClick}>Messege Owner</Button>
    </div>
  )
}

export default OwnerInfo