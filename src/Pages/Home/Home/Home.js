import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HomeBanner></HomeBanner>
      <HomeServices></HomeServices>
      <Footer></Footer>
    </div>
  );
};

export default Home;
