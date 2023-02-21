
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Header from "./sections/header/Header";
import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from 'pages/aboutus/About';
import Teacher from 'pages/teacher/Teacher';
import Event from 'pages/event/Event';
import Gallary from 'pages/gallary/Gallary';
import Testimonials from 'pages/testimonials/Testimonials';
import Contentupload from 'pages/contantupload/Contentupload';
import Timetable from 'pages/timetable/Timetable';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
    <Route index element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/teacher' element={<Teacher />} />
    <Route path='/event' element={<Event />} />
    <Route path='/gallary' element={<Gallary />} />
    <Route path='/testimonials' element={<Testimonials />} />
    <Route path='/contantupload' element={<Contentupload />} />
    <Route path='/timetable' element={<Timetable />} />
      
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
