import React from "react";
import Banner from "../../components/Banner";
import SuccessCounter from "../../components/SuccessCounter";
import MatrimonyCarousel from "../../components/MatrimonyCarousel";
import SuccessStory from "../../components/SuccessStory";
import ContactUs from "../ContactUS/ContactUs";
import App from "../../components/App";
import { Helmet } from "react-helmet-async";
import PremiumBioData from "../../components/PremiumBioData";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Bangladeshi Matrimony</title>
      </Helmet>
      <Banner />
      <PremiumBioData />
      <SuccessCounter />
      <App />
      <MatrimonyCarousel />
      <SuccessStory />
      <ContactUs />
    </div>
  );
};

export default Home;
