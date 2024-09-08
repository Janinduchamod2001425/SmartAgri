// src/App.jsx
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/HomePage';
import Layout from './components/Layout';

import User from './User Management/Read Users/User'

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Home /></Layout>
    },
    {
      path: "/users",
      element: <Layout><User /></Layout>
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
