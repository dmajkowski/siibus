import React from "react";
import Pages from "./pages";

const { MyOrders, MyProfile, News, OurMenu } = Pages;

const routes = {
  "/": () => <News />,
  "/my-orders": () => <MyOrders />,
  "/news": () => <News />,
  "/our-menu": () => <OurMenu />,
  "/my-profile": () => <MyProfile />
};

export default routes;
