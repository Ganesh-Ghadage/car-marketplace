import { conf } from '@/conf/conf';
import { useUser } from '@clerk/clerk-react';
import { SendBirdProvider } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';

import React, { useEffect, useState } from 'react'

function Inbox() {

    const {user} = useUser()
    const [userID, setUserID] = useState()
    const [channelUrl, setChannelUrl] = useState()

    useEffect(()=> {
        if(user){
            const userID = (user?.primaryEmailAddress.emailAddress).split('@')[0]
            setUserID(userID)
        }
    }, [user])

  return (
    <div>
    <div className='p-10 h-[100vh]'>
        <SendBirdProvider appId={conf.SENDBIRD_APP_ID}
        userId={userID}
        nickname={user?.fullName}
        profileUrl={user?.imageUrl}
        allowProfileEdit={true}
        >
            <div className='grid grid-cols-1 md:grid-cols-3 h-full gap-5'>
                <div className='p-5 border shadow-lg w-fit'>
                    <GroupChannelList onChannelSelect={(channel) => (setChannelUrl(channel?.url))} channelListQueryParams={{includeEmpty: true}}/>
                </div>
                <div className='md:col-span-2 shadow-lg'>
                    <GroupChannel channelUrl={channelUrl} />
                </div>
            </div>
        </SendBirdProvider>
    </div>
    </div>
  )
}

export default Inbox