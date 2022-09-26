import React from "react";
import ViveColegio from "../assets/img/ViveColegio.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='relative w-full h-screen bg-login bg-cover'>
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-md'>
          <div className='flex justify-center py-8'>
            <img src={ViveColegio} alt="Logo Vive Colegio" className=' w-28 object-cover'/>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-2xl'>Usuario</label>
            <input placeholder='Usuario' type="text" className='border relative bg-gray-100 p-2 rounded-md focus:bg-white focus:outline-none' />
          </div>
          <div className='flex flex-col'>
              <label className='text-2xl'>Contraseña</label>
              <input placeholder='Contraseña' type="text" className='border relative bg-gray-100 p-2 focus:bg-white focus:outline-none' />
          </div>
          <Link to={'/categoria'} className='w-full text-2xl block border-2 border-water-blue text-center bg-water-blue hover:bg-white hover:text-water-blue text-white font-semibold rounded-lg px-4 py-3 mt-6'>Iniciar sesion</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
