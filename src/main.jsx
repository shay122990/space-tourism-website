import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home/Home.jsx'
import Crew from './routes/crew/Crew.jsx'
import Destination from './routes/destination/Destination.jsx';
import Technology from './routes/technology/Technology.jsx';


const router = createBrowserRouter([
  {path:'/', element: <App/>},
  {path:'/home', element: <Home/>},
  {path:'/crew', element: <Crew/>},
  {path:'/destination', element: <Destination/>},
  {path:'/technology', element: <Technology/>},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
