import React from "react";
import { Outlet } from "react-router-dom";
import LeftsideNav from "../DashboardPage/LeftsideNav/LeftsideNav";

const Dashboard = () => {
  return (
    <div className=" flex   mx-auto ">
      <div className="  h-[100vh] w-[20%] fixed ">
        <LeftsideNav></LeftsideNav>
      </div>
      <div className="w-[80%] ml-[20%] py-10 bg-[#eff1f2] mt-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
