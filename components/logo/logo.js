import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <>
      <Link className="" href="/">
        <div
          className="rounded-full bg-white w-fit p-2 hover:bg-blue-100
         transition-all ease-out duration-1000"
        >
          <Image src="/Logoblue.svg" width={32} height={32} alt="logo" />
        </div>
      </Link>
    </>
  );
};
