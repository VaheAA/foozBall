import { createBrowserRouter, createRoutesFromElements, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path='/' element={<Home />} />
    </Route>
  ));

export default router;