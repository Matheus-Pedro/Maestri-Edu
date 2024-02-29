import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import CheckoutForm from "./components/checkout";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
          <CheckoutForm />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
