import React from "react";
import Cardbike from "./Cardbike";
import { Stack, Heading } from '@chakra-ui/react';
import bikesData from '../utils/data'; // Importa los datos de tu archivo data.js

function Main() {
  return (
    <main>
      <Stack direction={{ base:'column'}} spacing='20px' marginTop='40px' marginBottom='60px' w={['100%', null, 'auto']} textAlign='center' alignItems='center'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 7 C 15.059 7 7 15.059 7 25 C 7 34.941 15.059 43 25 43 C 34.941 43 43 34.941 43 25 C 43 15.059 34.941 7 25 7 z M 26.007812 13 L 28.794922 13 L 28.109375 15 L 29.164062 15 L 29.849609 13 L 32.730469 13 L 31.927734 15.453125 C 35.483734 15.791125 40.92075 17.496078 36.09375 26.080078 C 33.40675 30.859078 28.923297 33.050625 24.779297 34.015625 L 24.029297 36 L 21.242188 36 L 21.910156 34 L 20.855469 34 L 20.1875 36 L 17.306641 36 L 17.75 34.96875 L 17.744141 34.96875 L 18.136719 34.015625 L 15.203125 34.005859 L 20.470703 21 L 25.744141 21 L 22.25 30.595703 C 22.25 30.595703 26.039328 30.7595 29.236328 27.5625 C 32.341328 24.4585 33.621938 19 28.710938 19 L 15 19 L 17.076172 15 L 25.236328 15 L 26.007812 13 z"></path>
        </svg>
        <Heading color='black' textTransform='uppercase' textAlign='center' fontWeight='semibold'>Una historia aprobada de innovación desde 1991.</Heading>
        <p className="text-gray-500 font-medium tracking-wide">UBICADO EN EL HERMOSO TUCUMÁN, ARGENTINA</p>
      </Stack>
      <section className="my-20">
        <article className="flex flex-col md:flex-row">
          <div className="p-5 md:p-10 xl:p-28 md:w-1/2">
            <h1 className="text-lg text-red-600 leading-6 mb-5 font-bold">OPTAR POR SALIR EN CADA OPORTUNIDAD</h1>
            <p className="text-base text-gray-800 leading-6 font-medium">
              Tenemos una historia comprobada de innovación y un compromiso inquebrantable con la ingeniería y el 
              diseño de primer nivel. Desde nuestra innovadora tecnología de suspensión Living Link hasta nuestro 
              invento del sistema de cinturones CenterTrack, Spot Brand crea bicicletas que van más rápido, duran más, 
              maximizan su disfrute y simplifican su estilo de vida ciclista.
            </p>
          </div>
          <img src="src\assets\mountain.jpg" alt="bike" className="w-full md:w-1/2" />
        </article>
        <article className="flex flex-col-reverse md:flex-row mb-14">
          <img src="src\assets\cycling.jpg" alt="bike" className="w-full md:w-1/2"/>
            <div className="p-5 md:p-10 xl:p-28 md:w-1/2">
              <h1 className="text-lg text-red-600 leading-6 mb-5 font-bold">ELIJE TU AVENTURA</h1>
              <p className="text-base text-gray-800 leading-6 font-medium">
                Ofrecemos bicicletas de montaña, gravel y urbanas únicas e innovadoras, y seguimos liderando la categoría 
                que puso a Spot en el mapa en los años noventa: Singlespeed MTB. El espíritu pionero de Spot tiene raíces 
                profundas. La familia Lumpkin fundó Avid en 1991 y convirtió la empresa de componentes en el mayor fabricante 
                de frenos de Estados Unidos. Después de vender Avid y adquirir Spot, 
                centramos nuestra atención en construir mejores bicicletas.</p>
            </div>
        </article>
        <div className="flex justify-center mb-10">
          <div className="border-b border-solid border-gray-400 w-1/3 h-14"></div>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24" className="animate-wiggle">
            <path d="M13.5 5l-.4-2.6C13 2.2 12.8 2 12.6 2h-1.2c-.2 0-.5.2-.5.4L10.5 5H13.5zM10.5 19l.4 2.6c0 .2.2.4.5.4h1.2c.2 0 .5-.2.5-.4l.4-2.6H10.5zM19 13.5l2.6-.4c.2 0 .4-.2.4-.5v-1.2c0-.2-.2-.5-.4-.5L19 10.5V13.5zM5 10.5l-2.6.4C2.2 11 2 11.2 2 11.4v1.2c0 .2.2.5.4.5L5 13.5V10.5zM9.8 5.2l-1.7-2C8 3 7.7 2.9 7.5 3.1l-1 .6C6.3 3.8 6.2 4 6.3 4.2l.9 2.5L9.8 5.2zM14.2 18.8l1.7 2c.2.2.4.2.6.1l1-.6c.2-.1.3-.4.2-.6l-.9-2.5L14.2 18.8zM18.8 9.8l2-1.7C21 8 21.1 7.7 20.9 7.5l-.6-1c-.1-.2-.4-.3-.6-.2l-2.5.9L18.8 9.8zM5.2 14.2l-2 1.7C3 16 2.9 16.3 3.1 16.5l.6 1c.1.2.4.3.6.2l2.5-.9L5.2 14.2zM6.7 7.2L4.2 6.3C4 6.2 3.8 6.3 3.6 6.5l-.6 1C2.9 7.7 3 8 3.2 8.1l2 1.7L6.7 7.2zM17.3 16.8l2.5.9c.2.1.5 0 .6-.2l.6-1c.1-.2.1-.5-.1-.6l-2-1.7L17.3 16.8zM16.8 6.7l.9-2.5c.1-.2 0-.5-.2-.6l-1-.6C16.3 2.9 16 3 15.9 3.2l-1.7 2L16.8 6.7zM7.2 17.3l-.9 2.5c-.1.2 0 .5.2.6l1 .6C7.7 21.1 8 21 8.1 20.8l1.7-2L7.2 17.3zM12 15c-1.7 0-3-1.3-3-3 0-1.7 1.3-3 3-3 1.7 0 3 1.3 3 3C15 13.7 13.7 15 12 15zM12 11c-.6 0-1 .4-1 1 0 .6.4 1 1 1 .6 0 1-.4 1-1C13 11.4 12.6 11 12 11z"></path><path d="M12,5c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S15.9,5,12,5z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,14,12,14z" opacity=".3"></path><path d="M11 5H13V11H11z"></path><path d="M5.5 13H11.5V15H5.5z" transform="rotate(-29.991 8.537 14)"></path><path d="M14.5 11H16.5V17H14.5z" transform="rotate(-60.007 15.463 13.999)"></path><path d="M12,20c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8C20,16.4,16.4,20,12,20z M12,6c-3.3,0-6,2.7-6,6c0,3.3,2.7,6,6,6 c3.3,0,6-2.7,6-6C18,8.7,15.3,6,12,6z"></path>
          </svg>
          <div className="border-b border-solid border-gray-400 w-1/3 h-px"></div>
        </div>
        <Cardbike bikesData={bikesData} />
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"
            className="fill-current transition-transform duration-300 transform hover:scale-125"
            style={{ fill: '#737373' }}>
            <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"></path>
          </svg>
        </div>
      </section>
    </main>
  )
}

export default Main;