import React, { Fragment } from "react";
import man from "../assets/img/man.png";
import civilright from "../assets/img/civilright.png";
import book from "../assets/img/book.png";
import morality from "../assets/img/morality.png";
import emotion from "../assets/img/emotion.png";

const ManejoEmociones = () => {
  return (
    <Fragment>
      {/* Manejo de emociones */}
      <div className="pt-12" id="manejoEmociones">
        <h1 className="bg-light-orange w-max px-7 py-2 rounded-r-lg text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] font-semibold text-white">
          Manejo de emociones
        </h1>
        <p className="px-7 pt-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
          Anda despacio cuando escojas a tus amigos, pero, cuando los tengas,
          mantente firme y contante

        </p>
        <div className="flex flex-col items-center py-12">
          <h1 className="px-7 py-2 bg-light-orange font-semibold text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] text-white rounded-lg">
            Ser justo y correcto
          </h1>
          <p className="py-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
            (1°-3°) - 3 videos
          </p>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* Card 1 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={civilright} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=aF2abkT0_vg&ab_channel=MiSe%C3%B1al" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={civilright} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=Be97I3VDbns&ab_channel=ErikaArista" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card3 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={civilright} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=tJSqzNeKaPc&ab_channel=PEKETOONS" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-12">
          <h1 className="px-7 py-2 bg-light-orange font-semibold text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] text-white rounded-lg">
            Seguir normas
          </h1>
          <p className="py-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
            (4°-5°) - 3 videos
          </p>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* Card 1 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={book} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=hH0J8cTaCLQ&ab_channel=MarieLeiner" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={book} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=2hpEqD5RxXE&ab_channel=OnceNi%C3%B1asyNi%C3%B1os" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card3 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={book} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=C4d32kccCXs&ab_channel=NETOficial" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-12">
          <h1 className="px-7 py-2 bg-light-orange font-semibold text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] text-white rounded-lg">
            Los dilemas morales
          </h1>
          <p className="py-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
            (6°-8°) - 3 videos
          </p>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* Card 1 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={morality} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=2tzpbZH9Imw&ab_channel=GrupoTAREPE" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={morality} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=3dN02hPYqac&ab_channel=MaestroRodolfo" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card3 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={morality} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=QU1Bdofl5P0&ab_channel=GrupoTAREPE" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-12">
          <h1 className="px-7 py-2 bg-light-orange font-semibold text-[16px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[26px] text-white rounded-lg">
            La emoción y la expresión
          </h1>
          <p className="py-2 text-[12px] 2xl:text-2xl xl:text-xl lg:text-base md:text-base ">
            (9°-11°) - 3 videos
          </p>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* Card 1 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={emotion} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=qBZSlGo4N1k&ab_channel=SmileandLearn-Espa%C3%B1ol" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={emotion} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=_nKs1UUJ5u8&ab_channel=ColegioAlexanderVonHumboldt" target='_blank' className="btnLink">
                    Ver video
                  </a>
                </div>
              </div>
            </div>

            {/* Card3 */}
            <div className="bg-light-orange rounded-lg">
              <div className="flex flex-col items-center">
                <div className="p-3">
                  <img src={emotion} alt="Persona" className="w-10 xl:w-16" />
                </div>
                <div className="flex justify-center px-7 py-3">
                  <a href="https://www.youtube.com/watch?v=Q25ZIPq_PlE&ab_channel=MundoDivertidodeNi%C3%B1os" target='_blank' className="btnLink">
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

export default ManejoEmociones;
