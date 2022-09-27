import React from "react";
import { Link } from "react-router-dom";
import Vivecolegio from "../assets/img/ViveColegio.png";
import Footer from "./Footer";
import Slider from "./Slider";


const Inicio = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-white w-full md:max-w-md lg:max-w-full  md:mx-auto md:w-1/2 xl:w-1/3 h-screen flex flex-col justify-between">
        <div className="pt-10 pl-10">
          <img
            src={Vivecolegio}
            alt="Logo vive colegio"
            className="w-12 h-12 md:w-24 md:h-24 object-container"
          />
        </div>

        <div className="px-12 md:px-0 lg:px-5 md:h-[450px]">
          <h1 className="text-[30px] md:text-[55px] lg:text-[55px] 2xl:text-[70px] font-bold text-light-orange">
            Mejoramos tus procesos educativos
          </h1>
          <div className="pb-5 text-base md:text-[25px] md:leading-7 md:mb-5 lg:text-[35] lg:mb-5 lg:leading-7 2xl:text-3xl text-black/60">
            <p>La educación genera confianza.</p>
            <p>La confianza genera esperanza.</p>
            <p>La esperanza genera paz.</p>
          </div>
          <Link to={'/Vive-Colegio/login'} className="border-2 border-light-orange text-light-orange text-sm 2xl:text-2xl md:text-[25px] px-3 py-2 font-medium rounded-md hover:bg-light-orange hover:text-white transition duration-200">Iniciar sesión</Link>
        </div>
        <Footer />
      </div>
      <div className="bg-slate-100 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen border-r-2">
        <Slider />
      </div>
    </div>
  );
};

export default Inicio;
