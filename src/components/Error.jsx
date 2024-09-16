import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function Error() {
  return (
    <Alert className='w-fit px-4 bg-red-100'>
        <AlertTitle className='text-red-800'>Error...!</AlertTitle>
        <AlertDescription>
            Something Went Wrong
        </AlertDescription>
    </Alert>
  )
}

export default Error