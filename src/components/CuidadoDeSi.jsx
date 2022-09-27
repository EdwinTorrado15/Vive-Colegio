import React, { Fragment } from "react";
import man from "../assets/img/man.png";
import like from "../assets/img/like.png";
import teamwork from "../assets/img/teamwork.png";

const CuidadoDeSi = () => {
  return (
    <Fragment>
      {/* Cuidado de si */}
      <div className="pt-12" id="cuidadoDeSi">
        <h1 className="bg-lime-600 w-max px-7 py-2 rounded-r-lg text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] font-semibold text-white">
          Cuidado de si
        </h1>
        <p className="px-7 pt-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
          Aprender a aceptar y valorar las diferencias, pues ellas te harán
          destacarse entre la multitud
        </p>
        <div className="flex flex-col items-center py-12">
          <h1 className="px-7 py-2 bg-lime-600 font-semibold text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] text-white rounded-lg">
          Autorreconocimiento
          </h1>
          <p className="py-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
            (1°-3°) - 3 videos
          </p>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* Card 1 */}
            <div className="bg-lime-500 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={man} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a
                    href="https://www.youtube.com/watch?v=T_lSIBgnaRs&ab_channel=PalomillaDocenteEducandoEmociones"
                    target="_blank"
                    className="btnLink"
                  >
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-lime-500 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={man} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a
                    href="https://www.youtube.com/watch?v=EfQbeNq4xa0&ab_channel=BorjaVilaseca"
                    target="_blank"
                    className="btnLink"
                  >
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card3 */}
            <div className="bg-lime-500 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={man} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a
                    href="https://www.youtube.com/watch?v=4HiluCeOgwo&ab_channel=HemisferioDerecho"
                    target="_blank"
                    className="btnLink"
                  >
                    Ver video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-12">
          <h1 className="px-7 py-2 bg-lime-600 font-semibold text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] text-white rounded-lg">
            Amo y me quiero
          </h1>
          <p className="py-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
            (4°-5°) - 3 videos
          </p>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* Card 1 */}
            <div className="bg-lime-500 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={like} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=4JGRyFDjaIo&ab_channel=PlanetaPreescolar" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-lime-500 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={like} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=Qo1XMbQvuq0&ab_channel=Deli%E2%80%A2Cuentos" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card3 */}
            <div className="bg-lime-500 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={like} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=k1TV59mQfao&ab_channel=Mariana" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-12">
          <h1 className="px-7 py-2 bg-lime-600 font-semibold text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] text-white rounded-lg">
            Me identifico conmigo mismo
          </h1>
          <p className="py-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
            (6°-11°) - 3 videos
          </p>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* Card 1 */}
            <div className="bg-lime-500 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={teamwork} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=WEEWzZchJbg&ab_channel=PREESCOLARAPRENDOJUGANDO" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-lime-500 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={teamwork} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=jKCsVNy9R-w&ab_channel=ElviaRomero" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card3 */}
            <div className="bg-lime-500 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={teamwork} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=Au3GcOsgA5M&ab_channel=Miss.EslendyBarroso" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CuidadoDeSi;
