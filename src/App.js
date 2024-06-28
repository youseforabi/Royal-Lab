  import './App.css';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Home from './Component/Home/Home';
  import Services from './Component/Services/Services';
  import About from './Component/About/About';
  import Layoutt from './Component/Layoutt/Layoutt';
  import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
  import i18n from './i18n'; 
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
  import { AppProvider } from './Context/userContext'; // Import AppProvider
  import { useContext, useEffect } from 'react';

  // Define your routes
  const App = () => {



    return (

      <AppProvider>

      <Router>
        
        <Routes>
          <Route path="/" element={<Layoutt />}>
            <Route index element={<Home />} />
            <Route path="service" element={<Services />} />
            <Route path="results" element={<Results />} />
            <Route path="reserve" element={<Reserve />} />
            <Route path="recipeMedical" element={<Recipe />} />
            <Route path="homeVisit" element={<HomeVisit />} />
            <Route path="about" element={<About />} />
            <Route path="royal" element={<Royal />} />
            <Route path="doctor" element={<Doctor />} />
            <Route path="profile" element={<Profile/>} />
            <Route path="foodAnalysis" element={<Food />} />
            <Route path="waterAnalysis" element={<Water />} />
            <Route path="pharmaAnalysis" element={<Pharmacy />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      </AppProvider>
    );
  };

  export default App;
