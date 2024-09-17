import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { CircleUser, Menu, Package2, Search } from "lucide-react"  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

function Header() {
    
    const {user, isSignedIn} = useUser()

    //console.log(isSignedIn, "header")

//   return (
//     <div className='flex items-center justify-between shadow-sm px-5 py-2'>
//         <Link to='/'>
//             <img src='/logo.svg' width={120} height={100} className='cursor-pointer hover:scale-105'/>
//         </Link>

//         <ul className='hidden sm:flex gap-16 '>
//             <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:opacity-100 opacity-80'>
//                 <Link to='/'>
//                     Home
//                 </Link>
//             </li>
//             <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:opacity-100 opacity-80'>
//                 <Link to='/search' reloadDocument={true}>
//                     Search
//                 </Link>
//             </li>
//             <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:opacity-100 opacity-80'>
//                 <Link to={'/search?condition=New&brand=null&sellingPrice=null'} reloadDocument={true}>
//                     New
//                 </Link>
//             </li>
//             <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:opacity-100 opacity-80'>
//                 <Link to={'/search?condition=Old&brand=null&sellingPrice=null'} reloadDocument={true}>
//                     Previous Owned
//                 </Link>
//             </li>
//         </ul>

//         <div>
//             {isSignedIn ? 
//             <div className='flex items-center gap-5'>
//                 <UserButton/> 
//                 <Link to='/profile'>
//                     <Button>Listings</Button>
//                 </Link>
//             </div>
//             :
//             <Link to='/profile'>
//                 <Button>Listings</Button>
//             </Link>}
//         </div>
//     </div>
//   )

return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6 z-10">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:w-full">
            <div>
                <Link
                    to="/" 
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <img src='/logo.svg' width={120} height={100} className='cursor-pointer hover:scale-105 '/>
                </Link>
            </div>
            <div className='flex gap-10'>
                <Link
                    to="/" 
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Home
                </Link>
                <Link
                    to='/search' reloadDocument={true}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Search
                </Link>
                <Link
                    to={'/search?condition=New&brand=null&sellingPrice=null'} reloadDocument={true}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    New
                </Link>
                <Link
                    to={'/search?condition=Old&brand=null&sellingPrice=null'} reloadDocument={true}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Previous Owned
                </Link>
            </div>
            <div></div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to='/'
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <img src='/logo.svg' width={120} height={100} className='cursor-pointer hover:scale-105 '/>
              </Link>
              <Link
                to='/'
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                to='/search' reloadDocument={true}
                className="text-muted-foreground hover:text-foreground"
              >
                Search
              </Link>
              <Link
                to={'/search?condition=New&brand=null&sellingPrice=null'} reloadDocument={true}
                className="text-muted-foreground hover:text-foreground"
              >
                New
              </Link>
              <Link
                to={'/search?condition=Old&brand=null&sellingPrice=null'} reloadDocument={true}
                className="text-muted-foreground hover:text-foreground"
              >
                 Previous Owned
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div>
                {isSignedIn ? 
                <div className='flex items-center gap-5'>
                    <UserButton/> 
                    <Link to='/profile'>
                        <Button>Profile</Button>
                    </Link>
                </div>
                :
                <Link to='/profile'>
                    <Button>Profile</Button>
                </Link>}
            </div>
      </header>

)
}

export default Header