import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import About from './Component/About/About';
import Layoutt from './Component/Layoutt/Layoutt';
import Results from './Component/Results/Results';
import Reserve from './Component/Reserve/Reserve';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Recipe from './Component/RecipeMedical/Recipe';
import HomeVisit from './Component/HomeVisit/HomeVisit';
import Doctor from './Component/DoctorAppointment/Doctor';
import Food from './Component/foodAnalysis/Food';
import Water from './Component/waterAnalysis/Water';
import Pharmacy from './Component/pharmacyAnalysis/Pharmacy';
import Royal from './Component/Royal/Royal';
import Profile from './Component/Profile/Profile';
import Cart from './Component/Cart/Cart';
import useAuth from './hooks/useAuth';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Checkout from './Component/Checkout/Checkout';
import Order from './Component/OrderDetails/Order';
import Orders from './Component/Orders/Orders';
import Appointment from './Component/AppointmentDetails/Appointment';
import Appointments from './Component/Appointment/Appointments';
import AboutUs from './Component/AboutUs/About';

const App = () => {
  const { isAuthentication } = useAuth();

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Layoutt />}>
            <Route index element={<Home />} />
            <Route path="service" element={<Services />} />
            <Route path="results" element={isAuthentication ? <Results /> : <Navigate to="/login" />} />
            <Route path="reserve" element={isAuthentication ? <Reserve /> : <Navigate to="/login" />} />
            <Route path="order/:id" element={isAuthentication ? <Order /> : <Navigate to="/login" />} />
            <Route path="my-orders" element={isAuthentication ? <Orders /> : <Navigate to="/login" />} />
            <Route path="appointment/:id" element={isAuthentication ? <Appointment /> : <Navigate to="/login" />} />
            <Route path="my-appointments" element={isAuthentication ? <Appointments /> : <Navigate to="/login" />} />
            <Route path="recipeMedical" element={isAuthentication ? <Recipe /> : <Navigate to="/login" />} />
            <Route path="homeVisit" element={isAuthentication ? <HomeVisit /> : <Navigate to="/login" />} />
            <Route path="about" element={<About />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="royal" element={isAuthentication ? <Royal /> : <Navigate to="/login" />} />
            <Route path="doctor" element={isAuthentication ? <Doctor /> : <Navigate to="/login" />} />
            <Route path="profile" element={isAuthentication ? <Profile /> : <Navigate to="/login" />} />
            <Route path="cart" element={isAuthentication ? <Cart /> : <Navigate to="/login" />} />
            <Route path="checkout" element={isAuthentication ? <Checkout /> : <Navigate to="/login" />} />
            <Route path="foodAnalysis" element={isAuthentication ? <Food /> : <Navigate to="/login" />} />
            <Route path="waterAnalysis" element={isAuthentication ? <Water /> : <Navigate to="/login" />} />
            <Route path="pharmaAnalysis" element={isAuthentication ? <Pharmacy /> : <Navigate to="/login" />} />
          </Route>
          <Route path="/login" element={isAuthentication ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={isAuthentication ? <Navigate to="/" /> : <Register />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
