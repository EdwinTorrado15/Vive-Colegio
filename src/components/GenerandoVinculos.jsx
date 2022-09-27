import React, { Fragment } from "react";
import man from "../assets/img/man.png";
import ecological from "../assets/img/ecological.png";
import handshake from "../assets/img/handshake.png";
import herdimmunity from '../assets/img/herdimmunity.png'

const GenerandoVinculos = () => {
  return (
    <Fragment>
      {/* Cuidado de si */}
      <div className="pt-12" id="generandoVinculos">
        <h1 className="bg-water-blue w-max px-7 py-2 rounded-r-lg text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] font-semibold text-white">
          Generando vínculos
        </h1>
        <p className="px-7 pt-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
          Traten a los demás como ustedes quisieran ser tratados
        </p>
        <div className="flex flex-col items-center py-12">
          <h1 className="px-7 py-2 bg-water-blue font-semibold text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] text-white rounded-lg">
            Medio ambiente y la escuela
          </h1>
          <p className="py-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
            (1°-3°) - 3 videos
          </p>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* Card 1 */}
            <div className="bg-water-blue rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={ecological} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=cvakvfXj0KE&ab_channel=HappyLearningEspa%C3%B1ol" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-water-blue rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={ecological} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=6fkTx4haAdY&ab_channel=Keity" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card3 */}
            <div className="bg-water-blue rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={ecological} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=Gpc1s9qSeVM&ab_channel=MundoDivertidodeNi%C3%B1os" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-12">
          <h1 className="px-7 py-2 bg-water-blue font-semibold text-[16px] text-center 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] text-white rounded-lg">
            Me comprometo conmigo mismo y con los demás
          </h1>
          <p className="py-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
            (4°-5°) - 3 videos
          </p>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* Card 1 */}
            <div className="bg-water-blue rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={handshake} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=SGjzeqI4DCw&ab_channel=Energ%C3%ADaCrystal" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-water-blue rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={handshake} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=2rCp-8kbJjQ&ab_channel=ElpoderdelasAfirmaciones" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card3 */}
            <div className="bg-water-blue rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={handshake} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=NF6hXrbCedA&ab_channel=adrianamacedabonilla" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-12">
          <h1 className="px-7 py-2 bg-water-blue font-semibold text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] text-white rounded-lg">
            El gregarismo de los seres humanos
          </h1>
          <p className="py-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
            (6°-11°) - 3 videos
          </p>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* Card 1 */}
            <div className="bg-water-blue rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={herdimmunity} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=uUUpuEw-hcM&ab_channel=SIGMAMGTOW" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-water-blue rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={herdimmunity} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=6t0as2tITBw&ab_channel=MartinBoza" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card3 */}
            <div className="bg-water-blue rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={herdimmunity} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=a_GT4vjFzNU&ab_channel=LilianaAbrilMK" target='_blank' className="btnLink">
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

export default GenerandoVinculos;
