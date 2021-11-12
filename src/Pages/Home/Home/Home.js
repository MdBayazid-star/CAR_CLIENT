import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeReview from "../HomeReview/HomeReview";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HomeBanner></HomeBanner>

      <HomeServices></HomeServices>
      <HomeAbout></HomeAbout>
      <HomeReview></HomeReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
