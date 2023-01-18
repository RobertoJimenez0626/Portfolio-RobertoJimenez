import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={`${
        scroll ? "bg-back shadow-sm" : ""
      } fixed top-0 left-0 w-full z-20`}
    >
      <nav className="relative container mx-auto flex items-center justify-between py-4 px-2">
        <div>
          <a href="#home">
            <h4 className="text-4xl font-semibold font-pacifico pb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Yummy!</h4>
          </a>
          <span className="text-[1rem] font-bold opacity-70 -z-1">
            Restaurante de Comida Saludable
          </span>
        </div>
        <div className="cursor-pointer flex items-center justify-center w-12 h-14 bg-pink-300 opacity-75 rounded-t-xl rounded-br-3xl relative hover:opacity-100">
          <AiOutlineShoppingCart className="text-black opacity-70 text-3xl" />
          <div className="absolute bg-pink-500 text-[1rem] text-white font-bold w-5 h-5 right-1 top-2 flex items-center justify-center rounded-full">
            2
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
