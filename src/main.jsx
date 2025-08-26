import React, {lazy, Suspense} from 'react'
import {  Lazy,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
// import BrowserBook from './components/BrowserBook.jsx'
import BookDetails from './components/BookDetails.jsx'
import Error from './components/Error.jsx'

import Home from './components/Home.jsx'
import CategoryBooks from './components/CategoryBooks.jsx'

const BrowserBook = lazy(()=> import("./components/BrowserBook"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",      
        element: <Home />,
      },
      {
        path: "/BrowseBooks",
        element:   <Suspense fallback={<div>Loding...Books</div>}><BrowserBook /></Suspense>,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      { path: "/books/:category",
         element: <CategoryBooks />
       },
    ],
    errorElement: <Error />

  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={appRouter} />
  </StrictMode>,
)
