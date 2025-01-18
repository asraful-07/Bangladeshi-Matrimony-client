import React from "react";
import Banner from "../../components/Banner";
import SuccessCounter from "../../components/SuccessCounter";
import MatrimonyCarousel from "../../components/MatrimonyCarousel";

const Home = () => {
  return (
    <div>
      <Banner />
      <SuccessCounter />
      <MatrimonyCarousel />
    </div>
  );
};

export default Home;
