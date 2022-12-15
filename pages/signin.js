import Link from "next/link";
import React from "react";
import Layout from "../components/layout/layout";
import { Logo } from "../components/logo/logo";
import Searchbar from "../components/searchbar/searchbar";
import { authLinks, Links } from "../data/data";

const SignIn = () => {
  return (
    <>
      <Layout isAuth={true}>
        <div className="w-full h-full min-h-screen">
          <div className="grid grid-cols-8 lg:grid-cols-10">
            {/* navigation */}
            <div className="col-span-1 lg:col-span-3 h-full border-r-2
             dark:border-gray-700 min-h-screen flex justify-center items-start">
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
            {/* navigation */}

            {/* content */}
            <div className="col-span-7 lg:col-span-4 flex justify-center items-start">
              <div className="w-full flex flex-col">
                <Searchbar />
              </div>
            </div>
            {/* content */}

            {/* auth */}
            <div className="col-span-3 border-l-2 dark:border-gray-700  h-full hidden lg:flex gap-4 items-start">
              <div className="w-11/12 px-6 py-3">
                <div className="border-2 dark:border-gray-700 rounded-xl p-4 flex gap-y-2 flex-col">
                  <h2 className="font-bold text-lg">New to Twitter?</h2>
                  <p className="text-[13px] text-gray-500">
                    Sign up now to get your own personalized timeline!
                  </p>
                  <div className="flex flex-col gap-3 mt-2">
                    {authLinks.map((i, index) => (
                      <button
                        key={index}
                        className="rounded-3xl bg-white text-black font-medium 
                        flex justify-center items-center gap-4 py-2 px-4 border-2"
                      >
                        {i.icon}
                        {i.label}
                      </button>
                    ))}
                  </div>
                  <p className="text-[13px] text-gray-500">
                    By signing up, you agree to the{" "}
                    <Link href="#" className="text-primary">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-primary">
                      Privacy Policy
                    </Link>
                    , including{" "}
                    <Link href="#" className="text-primary">
                      Cookie Use
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            {/* auth */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignIn;
