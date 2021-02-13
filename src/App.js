import React from "react";
import { useRoutes } from "hookrouter";
import routes from "./routers";
import "./style.css";

export default function App() {
  const routeResult = useRoutes(routes);

  return <section>{routeResult}</section>;
}
