import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ViveColegio from "../assets/img/ViveColegio.png";
import styled from 'styled-components'
import { linksNavbar } from "../data/datos";

const Navbar = () => {

  let [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between bg-light-orange">
      <span
        className="fixed md:hidden right-5 text-white cursor-pointer z-20 "
        onClick={() => setOpen(!open)}
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </span>
      <div className="py-5">
        <img src={ViveColegio} alt="Logo Vive Colegio" className="w-10 ml-7 object-cover" />
      </div>
      <ul
        className={` bg-light-orange md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${
          !open ? "right-[-100%]" : "right-0"
        }`}
      >
        {linksNavbar.map((menu, index) => (
          <li
            key={index}
            className="md:inline-block md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300"
          >
            <p className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3" />
            <span className="font-bold text-white mr-1.5">{menu.nombre}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
