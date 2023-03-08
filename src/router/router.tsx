import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Register from '../pages/register/Register';
import Countries from '../pages/countries/Countries';
import Home from '../pages/home/Home';
import International from '../pages/international/International';
import Leagues from '../pages/leagues/Leagues';
import Login from '../pages/login/Login';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/countries' element={<Countries />} />
      <Route path='/countries/:code' element={<Leagues />} />
      <Route path='/international' element={<International />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Route>
  ));

export default router;