import { Icon } from "@iconify/react";
import React from "react";

const Searchbar = () => {
  return (
    <>
      <div
        className="w-full py-3 px-6 sticky dark:bg-white dark:bg-opacity-10
       dark:backdrop-blur-lg top-0 flex justify-center"
      >
        <div className="flex relative w-full gap-4">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            placeholder="Search Twitter"
            className="w-full pl-12 py-2 rounded-2xl outline-none bg-primary
             text-black dark:bg-white bg-opacity-10 placeholder:text-black text-sm font-medium"
          />
          <button>
            <Icon icon="ph:gear-fill" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
