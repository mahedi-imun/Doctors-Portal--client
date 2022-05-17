
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import Reviews from './pages/Reviews/Reviews';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Signup from './pages/Signup/Signup';
import { ToastContainer, } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReviews from './pages/Dashboard/MyReviews';
import MyHistory from './pages/Dashboard/MyHistory';
import User from './pages/Dashboard/User';
import RequireAdmin from './pages/Login/RequireAdmin';
import AddDoctors from './pages/Dashboard/AddDoctors';
import ManageDoctors from './pages/Dashboard/ManageDoctors';
import Payment from './pages/Dashboard/Payment';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>}>

        </Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
          } >
          <Route index element={ <MyAppointment/>}></Route>
          <Route path='review' element={<MyReviews />}></Route>
          <Route path='history' element={<MyHistory />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='users' element={<RequireAdmin>
            <User></User>
          </RequireAdmin>}></Route>
          <Route path='add-doctors' element={<RequireAdmin>
            <AddDoctors></AddDoctors>
          </RequireAdmin>}></Route>
          <Route path='manage-doctors' element={<RequireAdmin>
            <ManageDoctors></ManageDoctors>
          </RequireAdmin>}></Route>
        </Route>
        <Route path='/contactUs' element={<ContactUs />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        {/* <Route path='*' element={<NotFoundPage/>}></Route> */}
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>

  );
}

export default App;
