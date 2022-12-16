import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, showModal } from "../../redux/slices/modalSlice";
import { Modals } from "../modal/modal.js";

const Nav = () => {
  const modal = useSelector((state) => state.mod.modal);
  const dispatch = useDispatch();
  console.log(modal);

  const show = () => {
    if (modal === false) {
      dispatch(showModal(modal));
    } else {
      dispatch(hideModal(modal));
    }
    console.log(modal);
  };

  return (
    <nav
      className="absolute bottom-0 bg-primary w-full
     left-0 flex justify-center items-center px-6 py-4"
    >
      <div className="w-full max-w-[1440px] flex justify-center">
        <div className="flex w-full max-w-[61.6rem] text-black">
          <div className="grid lg:grid-cols-5 w-full">
            <div className="col-span-4 hidden lg:flex flex-col">
              <h2 className="font-bold text-xl text-white">
                Don’t miss what’s happening
              </h2>
              <p className="font-medium text-white">
                People on Twitter are the first to know.
              </p>
            </div>
            <div className="col-span-1 w-full flex items-center">
              <div className="flex gap-4 items-center w-full">
                <button
                  onClick={() => show()}
                  className="font-bold border-[1px] rounded-2xl px-4 py-1.5 text-white"
                >
                  Log in
                </button>
                <button className="font-bold rounded-2xl bg-white text-black px-4 py-1.5">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>{modal && <Modals title="Log in" show={modal} />}</>
    </nav>
  );
};

export { Nav };
