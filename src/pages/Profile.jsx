import { Inbox, Listing } from '@/components'
import { getUserListing } from '@/db/services/sevices'
import { SignIn, UserProfile, useUser } from '@clerk/clerk-react'
import React ,{useEffect, useState} from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function Profile() {

  const {user, isSignedIn} = useUser()
  const [carList, setCarList] = useState()

  useEffect(() => {
    const userId = user?.primaryEmailAddress.emailAddress
    getUserListing(userId)
    .then((res) => setCarList(res))
  }, [user])


  if(isSignedIn){
  return (
    <div className='flex justify-center w-full mt-7'>
      <div>
        <Tabs defaultValue="listing" >
          <TabsList className='gap-10 m-2 text-3xl w-full'>
            <TabsTrigger value="listing">Listing</TabsTrigger>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="listing">
            <Listing carList={carList} />
          </TabsContent>
          <TabsContent value="inbox"><Inbox /></TabsContent>
          <TabsContent value="profile"><UserProfile /></TabsContent>
        </Tabs>
      </div>
    </div>
  )} else{
    return (
      <div className='flex justify-center items-center m-10'>
        <SignIn />
      </div>
  )}
}

export default Profile