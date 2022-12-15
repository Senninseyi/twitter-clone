import { Icon } from "@iconify/react";
import React from "react";

const Searchbar = () => {
  return (
    <>
      <div
        className="w-full py-3 px-6 sticky dark:bg-white dark:bg-opacity-10
       dark:backdrop-blur-lg top-0 flex justify-center"
      >
        <div className="flex w-full gap-4">
          <input
            type="search"
            placeholder="Search Twitter"
            className="w-full px-4 py-2 rounded-2xl outline-none bg-primary
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
