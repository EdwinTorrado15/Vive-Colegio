import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ManejoEmociones from "./ManejoEmociones";
import CuidadoDeSi from "./CuidadoDeSi";
import GenerandoVinculos from "./GenerandoVinculos";

const Pagina = () => {
  return (
    <div className="w-full h-screen" id="inicio">
      <Navbar />
      <div className=" relative bg-login bg-cover h-[150px] 2xl:h-[700px] xl:h-[600px] lg:h-[500px] md:h-[400px]">
        <div className="flex justify-center items-center h-full">
          <h1 className="font-bold text-[12px] 2xl:text-[60px] xl:text-[50px] lg:text-[40px] md:text-[30px] text-white p-3 rounded-lg bg-light-orange">Bienvenido, ven y apendre junto a nosotros</h1>
        </div>
      </div>

      <CuidadoDeSi/>

      <ManejoEmociones />

      <GenerandoVinculos/>

      <Footer />
    </div>
  );
};

export default Pagina;
