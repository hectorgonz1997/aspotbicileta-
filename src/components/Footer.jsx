import React from 'react'
import { Heading } from '@chakra-ui/react';

function Footer() {

  const today = new Date();
  const currentYear = today.getFullYear();

  return (
  <footer className="h-1/4 bg-gradient-to-b from-gray-400 to-gray-800 flex flex-col justify-center items-center text-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="7%" height="7%" viewBox="0 0 50 50" className="mt-6 min-w-14 min-h-14">
        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 7 C 15.059 7 7 15.059 7 25 C 7 34.941 15.059 43 25 43 C 34.941 43 43 34.941 43 25 C 43 15.059 34.941 7 25 7 z M 26.007812 13 L 28.794922 13 L 28.109375 15 L 29.164062 15 L 29.849609 13 L 32.730469 13 L 31.927734 15.453125 C 35.483734 15.791125 40.92075 17.496078 36.09375 26.080078 C 33.40675 30.859078 28.923297 33.050625 24.779297 34.015625 L 24.029297 36 L 21.242188 36 L 21.910156 34 L 20.855469 34 L 20.1875 36 L 17.306641 36 L 17.75 34.96875 L 17.744141 34.96875 L 18.136719 34.015625 L 15.203125 34.005859 L 20.470703 21 L 25.744141 21 L 22.25 30.595703 C 22.25 30.595703 26.039328 30.7595 29.236328 27.5625 C 32.341328 24.4585 33.621938 19 28.710938 19 L 15 19 L 17.076172 15 L 25.236328 15 L 26.007812 13 z"></path>
      </svg>
      <Heading fontWeight='semibold' textColor='white'>Libertad sobre dos ruedas</Heading>
    <p className=" text-base text-white leading-6 font-medium">
      Conquista las colinas, domina los caminos
    </p>
    <div className="flex justify-center my-8">
      <div className="flex gap-x-10 sm:gap-x-20 md:gap-x-40">
        <a href="#"><img src="src\assets\facebook.svg" alt="Facebook" className="hover:animate-wiggle"/></a>
        <a href="#"><img src="src\assets\instagram.svg" alt="Instagram" className="hover:animate-wiggle"/></a>
        <a href="#"><img src="src\assets\google.svg" alt="Google" className="hover:animate-wiggle"/></a>
      </div>
    </div>
    <div className="flex flex-col-reverse gap-4 items-center sm:flex-row w-full justify-between text-white mb-2">
      <div className="sm:ml-5">
        &copy; {currentYear} Hector Sebastian Gonzalez
      </div>
      <div className="flex gap-5 sm:mr-5">
        <a href="#"><p>Blog</p></a>
        <a href="#"><p>Acerca de</p></a>
        <a href="#"><p>Contacto</p></a>
        <a href="#"><p>Nosotros</p></a>
      </div>
    </div>
  </footer>
  )
}

export default Footer