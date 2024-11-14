import React from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import ThemeButton from "./Components/ThemeButton";
import { WeatherProvider } from "./Provider/Weather/WeatherContext";
import { NewsProvider } from "./Provider/News/NewsContext";


const App = () => {
  return (

       <>
       <NewsProvider>
       <WeatherProvider>
        <Navbar />
        <Home />
        <ThemeButton />
        <ToastContainer/>
        </WeatherProvider>
       </NewsProvider>

       </>
  );
};

export default App;
