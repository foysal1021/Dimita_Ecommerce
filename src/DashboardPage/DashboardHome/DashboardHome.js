import React from "react";
import Chart from "../Chart/Chart";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import RecentOrder from "../RecentOrder/RecentOrder";

const DashboardHome = () => {
  return (
    <section className=" w-[90%] mx-auto">
      <DashboardHeader></DashboardHeader>
      <Chart></Chart>
      <RecentOrder></RecentOrder>
    </section>
  );
};

export default DashboardHome;
