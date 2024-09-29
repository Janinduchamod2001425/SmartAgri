import { useState} from 'react';
import {RouterProvider, createBrowserRouter}from "react-router-dom";
import Pest from './components/getpest/Pest';
import Addpest from './components/addpest/Addpest';
import Editpest from './components/updatepest/Editpest';
import Home from './pages/HomePage';
import Layout from './components/Layout';


import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Home /></Layout>
    },
    {
      path: "/pest",
      element: <Layout><Pest /></Layout>
    },
    {
      path: "/addpest",
      element: <Layout><Addpest/></Layout>,
    },
    {
      path: "/updatepest/:id",
      element: <Layout><Editpest/></Layout>,
    },
  ])

  return (
    
      <div className="App">
        <RouterProvider router = {route}></RouterProvider>
       
      </div>
      
  );
}

export default App
