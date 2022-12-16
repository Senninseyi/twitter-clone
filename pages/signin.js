import Link from "next/link";
import React from "react";
import Layout from "../components/layout/layout";
import { SideNav } from "../components/navigation/sideNav";
import Searchbar from "../components/searchbar/searchbar";
import { authLinks } from "../data/data";

const SignIn = () => {
  return (
    <>
      <Layout isAuth={true}>
        <div className="w-full h-full min-h-screen bg-white dark:bg-black">
          <div className="grid grid-cols-8 lg:grid-cols-10">
            <SideNav />

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
                        onClick={i.onclick}
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
