import React from "react";
import Banner from "../../components/Banner";
import SuccessCounter from "../../components/SuccessCounter";
import MatrimonyCarousel from "../../components/MatrimonyCarousel";
import SuccessStory from "../../components/SuccessStory";

const Home = () => {
  return (
    <div>
      <Banner />
      <SuccessCounter />
      <MatrimonyCarousel />
      <SuccessStory />
    </div>
  );
};

export default Home;
