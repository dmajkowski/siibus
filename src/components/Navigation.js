import React from "react";
import routes from "./routers";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/news">Aktualności</a>
        </li>
        <li>
          <a href="/my-orders">Moje zamówienia</a>
        </li>
        <li>
          <a href="/our-menu">Nasze Menu</a>
        </li>
        <li>
          <a href="/my-profile">Mój profil</a>
        </li>
      </ul>
    </nav>
  );
}
