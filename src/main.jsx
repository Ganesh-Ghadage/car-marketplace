import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AddListing, Home, Profile, SearchPage} from './pages/index.js'
import {conf} from './conf/conf'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App'
import { CarDetails } from './pages'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/add-listing',
        element: <AddListing />
      },
      {
        path: '/car-details/:id',
        element: <CarDetails />
      },
      {
        path: '/search',
        element: <SearchPage />
      }
    ]
  }
])

const PUBLISHABLE_KEY = conf.PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider> 
  </StrictMode>,
)
