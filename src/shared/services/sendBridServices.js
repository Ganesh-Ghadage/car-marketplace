import { conf } from "@/conf/conf"
import axios from "axios"

const createSendBirdUser = (userId, nickName, imageUrl) => {
    return axios.post(`https://api-${conf.SENDBIRD_APP_ID}.sendbird.com/v3/users`,{
        user_id: userId,
        nickname: nickName,
        profile_url: imageUrl,
        issue_access_token:false
    },{
        headers:{
            'Content-Type':'application/json',
            'Api-Token':conf.SENDBIRD_API_TOKEN
        }
    })
}

const createSendBirdChannel = (users, title) => {
    return axios.post(`https://api-${conf.SENDBIRD_APP_ID}.sendbird.com/v3/group_channels`,{
        user_ids: users,
        name: title,
        is_distinct: true
    },{
        headers:{
            'Content-Type':'application/json',
            'Api-Token':conf.SENDBIRD_API_TOKEN
        }
    })
}

export default {
    createSendBirdUser,
    createSendBirdChannel
}