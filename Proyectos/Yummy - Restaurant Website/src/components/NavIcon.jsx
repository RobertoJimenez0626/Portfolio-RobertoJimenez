import React, { useState } from "react";
import { mainMenu } from "../Data";
import { RxDashboard } from "react-icons/rx";

const NavIcon = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={`${
          toggle ? "scale-1" : "scale-0"
        } fixed w-full flex justify-center z-20 bottom-8 transition-all duration-300`}
      >
        <div className="flex sm:gap-8 gap-6 bg-gradient-to-r from-purple-400 to-pink-400 opacity-80 rounded-xl p-4">
          {mainMenu.map((main) => {
            return (
              <div
                className="p-2 rounded-full bg-glass"
                key={main.id}
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href={`#${main.href}`} className="text-xl text-white">
                  {main.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="fixed right-0 top-[20%] z-20 cursor-pointer bg-gradient-to-br from-purple-400 to-pink-400"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <RxDashboard className="text-3xl text-white" />
      </div>
    </>
  );
};

export default NavIcon;
