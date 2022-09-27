import React from "react";
import ViveColegio from "../assets/img/ViveColegio.png";
import niño from "../assets/img/niño.jpg";
import profesora from "../assets/img/profesora.jpg";
import padres from "../assets/img/padres.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Categoria = () => {
  return (
    <div className="flex flex-col justify-between w-full bg-light-orange h-screen">
      <div className="flex justify-end pr-14 pt-8">
        <img
          src={ViveColegio}
          alt="Logo Vive Colegio"
          className="object-cover w-16 2xl:w-28 xl:w-28 lg:w-28 md:w-20 sm:w-20"
        />
      </div>
      <div>
        <h1 className="text-white font-bold text-[20px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-2xl sm:text-2xl text-center drop-shadow-3xl">¡¡Hola, Edwin!! Elige a que categoría perteneces</h1>
        <div className="flex flex-wrap justify-center gap-5 pb-60 pt-20">
            <div className="w-20 h-20 2xl:w-52 2xl:h-52 xl:w-52 xl:h-52 lg:w-52 lg:h-52 md:w-44 md:h-44 sm:w-44 sm:h-44 drop-shadow-3xl">
                <Link to={'/Vive-Colegio/estudiante'}>
                <img src={niño} alt="Categoria estudiante" className="object-cover w-full h-full rounded-full "/>
                </Link>
                <p className="text-center font-bold text-white pt-5 text-[16px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-2xl">Estudiantes</p>
            </div>
            <div className="w-20 h-20  2xl:w-52 2xl:h-52 xl:w-52 xl:h-52 lg:w-52 lg:h-52 md:w-44 md:h-44 sm:w-44 sm:h-44 drop-shadow-3xl">
                <Link>
                    <img src={padres} alt="Categoria padres" className="object-cover w-full h-full rounded-full"/>
                </Link>
                <p className="text-center font-bold text-white pt-5 text-[16px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-2xl">Padres</p>
            </div>
            <div className="w-20 h-20  2xl:w-52 2xl:h-52 xl:w-52 xl:h-52 lg:w-52 lg:h-52 md:w-44 md:h-44 sm:w-44 sm:h-44 drop-shadow-3xl">
                <Link>
                    <img src={profesora} alt="Categoria profesora" className="object-cover w-full h-full rounded-full"/>
                </Link>
                <p className="text-center font-bold text-white pt-5 text-[16px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-2xl">Docentes</p>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Categoria;