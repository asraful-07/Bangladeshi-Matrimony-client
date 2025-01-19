import React from "react";
import Banner from "../../components/Banner";
import SuccessCounter from "../../components/SuccessCounter";
import MatrimonyCarousel from "../../components/MatrimonyCarousel";
import SuccessStory from "../../components/SuccessStory";
import ContactUs from "../ContactUS/ContactUs";
import App from "../../components/App";

const Home = () => {
  return (
    <div>
      <Banner />
      <SuccessCounter />
      {/* <App /> */}
      <MatrimonyCarousel />
      <SuccessStory />
      <ContactUs />
    </div>
  );
};

export default Home;
