import React from "react";
import { useRoutes } from "hookrouter";
import routes from "./routers";
import "./style.css";
import Components from "./components";

const { Header, Footer, Navigation } = Components;

export default function App() {
  const routeResult = useRoutes(routes);

  return (
    <section>
      <Header />
      <Navigation />
      {routeResult}
      <Footer />
    </section>
  );
}
