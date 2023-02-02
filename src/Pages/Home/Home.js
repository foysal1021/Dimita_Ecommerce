import React from "react";
import Banner from "../Banner/Banner";
import ElectronicsCumputers from "../Electronics&Cumputers/ElectronicsCumputers";
import FashionColth from "../Fashion&Colth/FashionColth";
import HomeGarden from "../HOME&GARDEN/HomeGarden";

const Home = () => {
  return (
    <div className=" ">
      <Banner></Banner>
      <FashionColth></FashionColth>
      <ElectronicsCumputers></ElectronicsCumputers>
      <HomeGarden></HomeGarden>
    </div>
  );
};

export default Home;
