import { useState, useEffect } from "react"

export const useQuery = (qFn) => {
    const [data, setdata] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        try {
            setLoader(true)
            setError('')
    
            qFn().then((res) => setdata(res))
                .then(setLoader(false))
        } catch (error) {
            setError(error)
        }


    }, [])

    return{data, loader, error}
}