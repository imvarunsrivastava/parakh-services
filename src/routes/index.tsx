import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import Locations from '../pages/Locations';
import LocationService from '../pages/LocationService';
import Brands from '../pages/Brands';
import BrandService from '../pages/BrandService';
import BookService from '../pages/BookService';
import Blog from '../pages/Blog';
import Disclaimer from '../pages/Disclaimer';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:service" element={<ServiceDetail />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/locations/:state/:city/:service?" element={<LocationService />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/brands/:brand/:service?" element={<BrandService />} />
      <Route path="/book" element={<BookService />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}