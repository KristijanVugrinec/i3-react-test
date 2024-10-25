import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutUs from './components/Text.jsx'


  const router = createBrowserRouter([
    {
      path:"/",
      element: <App/>
    },
    {
      path:"/highlight",
      element: <AboutUs />
    },
    {
      path:"/letter"
    }
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
