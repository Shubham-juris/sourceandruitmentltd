import React from 'react';
import Heroimage from '../../assets/images/heroimg.jpg';

export default function HeroSection() {
  return (
    <div className="relative h-[700px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Heroimage})`,
          filter: 'brightness(0.6)',
          zIndex: -1,
        }}
      ></div>

      <div className="relative flex items-center justify-center text-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Empowering careers,<br />
            one placement at a<br />
            time.
          </h2>
          <p className="mt-6 text-white text-lg sm:text-xl">
            Guiding individuals towards their desired career milestones
          </p>
          <div className="mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
