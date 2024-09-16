import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/HomePage';
import Warehouse from './Warehouse Management/Read Warehouses/Warehouse';
import AddWarehouse from './Warehouse Management/Add Warehouses/AddWarehouse';
import UpdateWarehouse from './Warehouse Management/Update Warehouses/UpdateWarehouse';





function App() {
  
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Home /></Layout>
    },


    // Warehouse Links
    {
      path: "/warehouses",
      element: <Layout><Warehouse /></Layout>
    },
    {
      path: "/create_Warehouse",
      element: <Layout><AddWarehouse /></Layout>
    },
    {
      path: "/edit_warehouse/:id",
      element: <Layout><UpdateWarehouse /></Layout>
    },
    // Warehouse Links  


  ]);

  return (
    <div className='App'>
    <RouterProvider router={route} />
  </div>
  )
}

export default App
