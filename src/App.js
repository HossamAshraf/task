import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Products from './Components/Products/Products'
import Notfound from './Components/Notfound/Notfound'

export default function App() {

  const router =  createBrowserRouter ([
{path : '' , element : <Layout/> , children : [
{path : '' , element : <Products/>},
{path : 'products' , element : <Products/>},
{path : '*', element : <Notfound/>}
]} 
])

  return <>
  <RouterProvider router = {router} />
  </>
}
