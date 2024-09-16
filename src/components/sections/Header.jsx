import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Header() {
    
    const {user, isSignedIn} = useUser()

    //console.log(isSignedIn, "header")

  return (
    <div className='flex items-center justify-between shadow-sm px-5 py-2'>
        <Link to='/'>
            <img src='/logo.svg' width={120} height={100} className='cursor-pointer hover:scale-105'/>
        </Link>

        <ul className='hidden sm:flex gap-16 '>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:opacity-100 opacity-80'>
                <Link to='/'>
                    Home
                </Link>
            </li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:opacity-100 opacity-80'>
                <Link to='/search' reloadDocument={true}>
                    Search
                </Link>
            </li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:opacity-100 opacity-80'>
                <Link to={'/search?condition=New&brand=null&sellingPrice=null'} reloadDocument={true}>
                    New
                </Link>
            </li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:opacity-100 opacity-80'>
                <Link to={'/search?condition=Old&brand=null&sellingPrice=null'} reloadDocument={true}>
                    Previous Owned
                </Link>
            </li>
        </ul>

        <div>
            {isSignedIn ? 
            <div className='flex items-center gap-5'>
                <UserButton/> 
                <Link to='/profile'>
                    <Button>Listings</Button>
                </Link>
            </div>
            :
            <Link to='/profile'>
                <Button>Listings</Button>
            </Link>}
        </div>
    </div>
  )
}

export default Header