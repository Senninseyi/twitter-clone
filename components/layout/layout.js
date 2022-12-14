import React from "react";
import { Nav } from "../navigation/nav";

const Layout = ({ children, isAuth }) => {
  return (
    <div className="w-full h-full">
      {isAuth ? <Nav /> : isAuth}
      <main className="w-full h-full bg-white">{children}</main>
    </div>
  );
};

export default Layout;
