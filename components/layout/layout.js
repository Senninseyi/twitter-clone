import React from "react";
import { Nav } from "../navigation/nav";

const Layout = ({ children, isAuth }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="max-w-[1440px] flex flex-col justify-center items-center w-full">
        {isAuth ? <Nav /> : isAuth}
        <main className="w-full h-full bg-white dark:bg-black">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
