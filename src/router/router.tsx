import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Countries from '../pages/Countries';
import Home from '../pages/Home';
import International from '../pages/International';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/countries' element={<Countries />} />
      <Route path='/international' element={<International />} />
    </Route>
  ));

export default router;