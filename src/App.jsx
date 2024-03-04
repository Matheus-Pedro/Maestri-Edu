import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import AppCheckout from "./components/appCheckout";
import Footer from "./components/footer"
import { QueryClient, QueryClientProvider } from 'react-query'
import "./App.css";
import AppNotificationCheck from './components/appNotificationCheck'

export const scroll = new SmoothScroll('a[href="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const client = new QueryClient()

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <QueryClientProvider client={client}>
      <Router>
        <div>
          <Routes>
          <Route path="/" element={
            <>
              <Navigation />
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Testimonials data={landingPageData.Testimonials} />
              <Contact data={landingPageData.Contact} />
            </>
          } />
          <Route path="/checkout" element={<AppCheckout />} />
          <Route path="/concluded" element={<AppNotificationCheck />} />
          <Route path="/boleto" element={<AppNotificationCheck />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
       </div>
     </Router>
    <Footer />
  </QueryClientProvider>
  );
};

export default App;
