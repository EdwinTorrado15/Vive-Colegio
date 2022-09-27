import React from "react";
import ViveColegio from "../assets/img/ViveColegio.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='relative w-full h-screen bg-login bg-cover'>
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[300px] 2xl:max-w-[400px] md:max-w-[400px] w-full mx-auto bg-white p-8 rounded-md'>
          <div className='flex justify-center py-8'>
            <img src={ViveColegio} alt="Logo Vive Colegio" className=' w-20 2xl:w-28 xl:w-28 lg:w-28 md:w-28 sm:w-28 object-cover'/>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-base 2xl:text-2xl md:text-xl'>Usuario</label>
            <input placeholder='Usuario' type="text" className='border relative bg-gray-100 p-2 rounded-md focus:bg-white focus:outline-none' />
          </div>
          <div className='flex flex-col'>
              <label className='text-base 2xl:text-2xl md:text-xl'>Contraseña</label>
              <input placeholder='Contraseña' type="text" className='border relative bg-gray-100 p-2 focus:bg-white focus:outline-none' />
          </div>
          <Link to={'/Vive-Colegio/categoria'} className='w-full text-base 2xl:text-2xl md:text-xl block border-2 border-water-blue text-center bg-water-blue hover:bg-white hover:text-water-blue text-white font-semibold rounded-lg px-4 py-3 mt-6'>Iniciar sesión</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
