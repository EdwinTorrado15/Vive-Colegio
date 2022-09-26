import React from "react";
import { Navbar } from "../../components";
import Slider from "../../components/Slider";
import ReactPlayer from "react-player/youtube";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen">
        <Slider />
      </div>
      <div className="pt-12">
        <h1 className="bg-lime-600 w-max px-8 py-3 rounded-r-lg font-semibold text-3xl text-white">
          Cuidado de si
        </h1>
        <p className="pt-7 px-8">
          Aprender a aceptar y valorar las diferencias, pues ellas te haran
          destacarse entre la multitud
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="bg-lime-600 w-max px-8 py-3 rounded-lg font-semibold text-3xl text-white">
          Autoreconocimiento
        </h1>
        <p className="font-medium pt-2">(1°-3°) - 3 videos</p>
        <div className="flex gap-5 py-5">
          <div>
            <ReactPlayer
              width={450}
              url="https://www.youtube.com/watch?v=T_lSIBgnaRs&ab_channel=PalomillaDocenteEducandoEmociones"
              controls
            />
          </div>
          <div>
            <ReactPlayer
              width={450}
              url="https://www.youtube.com/watch?v=LZ2O3cShf_w&ab_channel=SilviaMartos"
              controls
            />
          </div>
          <div>
            <ReactPlayer
              width={450}
              url="https://www.youtube.com/watch?v=baBVCMcpi_k&ab_channel=SmileandLearn-Espa%C3%B1ol"
              controls
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-12">
        <h1 className="bg-lime-600 w-max px-8 py-3 rounded-lg font-semibold text-3xl text-white">
          Amo y me quiero
        </h1>
        <p className="font-medium pt-2">(4°-5°) - 3 videos</p>
        <div className="flex gap-5 py-5">
          <div>
            <ReactPlayer
              width={450}
              url="https://www.youtube.com/watch?v=Qo1XMbQvuq0&ab_channel=Deli%E2%80%A2Cuentos"
              controls
            />
          </div>
          <div>
            <ReactPlayer
              width={450}
              url="https://www.youtube.com/watch?v=LZ2O3cShf_w&ab_channel=SilviaMartos"
              controls
            />
          </div>
          <div>
            <ReactPlayer
              width={450}
              url="https://www.youtube.com/watch?v=baBVCMcpi_k&ab_channel=SmileandLearn-Espa%C3%B1ol"
              controls
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-12">
        <h1 className="bg-lime-600 w-max px-8 py-3 rounded-lg font-semibold text-3xl text-white">
          Me identifico conmigo mismo
        </h1>
        <p className="font-medium pt-2">(6°-11°) - 3 videos</p>
        <div className="flex gap-5 py-5">
          <div>
            <ReactPlayer
              width={450}
              url="https://www.youtube.com/watch?v=T_lSIBgnaRs&ab_channel=PalomillaDocenteEducandoEmociones"
              controls
            />
          </div>
          <div>
            <ReactPlayer
              width={450}
              url="https://www.youtube.com/watch?v=LZ2O3cShf_w&ab_channel=SilviaMartos"
              controls
            />
          </div>
          <div>
            <ReactPlayer
              width={450}
              url="https://www.youtube.com/watch?v=baBVCMcpi_k&ab_channel=SmileandLearn-Espa%C3%B1ol"
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
