import Link from "next/link";
import React from "react";
import { Links } from "../../data/data";
import { Logo } from "../logo/logo";

export const SideNav = () => {
  return (
    <div
      className="col-span-1 lg:col-span-3 h-full border-r-2
    dark:border-gray-700 min-h-screen flex justify-center items-start"
    >
      <div className="w-fit lg:w-2/3 px-6 py-3">
        <Logo />
        <div className="flex flex-col mt-4 gap-4">
          {Links.map((l, index) => (
            <Link
              href={l.link}
              key={index}
              className="flex items-center font-medium text-lg text-black dark:text-white
              px-3 py-2 gap-2 rounded-3xl hover:bg-gray-300 w-fit dark:hover:bg-primary"
            >
              <span>{l.icon}</span>
              <p className="hidden lg:flex">{l.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
