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
          className="object-cover w-28"
        />
      </div>
      <div>
        <h1 className="text-white font-bold text-[40px] text-center drop-shadow-3xl">Hola, Edwin!! Elige a que catgoria perteneces</h1>
        <div className="flex justify-center gap-5 pb-60 pt-20">
            <div className="w-52 h-48 drop-shadow-3xl">
                <Link to={'/Vive-Colegio/estudiante'}>
                <img src={niño} alt="Categoria estudiante" className="object-cover w-full h-full rounded-full "/>
                </Link>
                <p className="text-center font-bold text-white text-[40px]">Estudiante</p>
            </div>
            <div className="w-52 h-48 drop-shadow-3xl">
                <Link>
                    <img src={padres} alt="Categoria padres" className="object-cover w-full h-full rounded-full"/>
                </Link>
                <p className="text-center font-bold text-white text-[40px]">Padres</p>
            </div>
            <div className="w-52 h-48 drop-shadow-3xl">
                <Link>
                    <img src={profesora} alt="Categoria profesora" className="object-cover w-full h-full rounded-full"/>
                </Link>
                <p className="text-center font-bold text-white text-[40px]">Docentes</p>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Categoria;