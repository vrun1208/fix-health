import React from 'react';
import logo from '../logos.svg'

const HeroSection = () => {
  return (
    <div className="hero-section bg-gray-900 text-white h-screen flex flex-col md:flex-row">
      <div className="md:flex-1 flex items-center justify-center mt-12">
        <div>
          <h1 className="text-6xl md:text-9xl font-extrabold">Fix</h1>
          <h1 className="text-6xl md:text-9xl font-extrabold">Health</h1>
          <img src={logo} alt="logo" className='w-80 h-33 mt-2 ml-0 md:ml-12' />
        </div>
      </div>

      <div className="md:flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold md:mb-2 md:p-16 mb-0 p-6  text-right">On a mission to make people lives pain free</h1>
          <div className='flex flex-row md:flex-row md:mt-8 md:p-6 mt-0 p-2 text-balance'>
            <div className='square-div bg-slate-700 md:mx-2 md:p-4 mx-1 p-2 md:flex-1 rounded-lg'>
              <h1 className='text-md md:text-3xl font-bold'>100+</h1>
              <h1 className='font-bold'>Cities</h1>
              <p className='text-xs'>Patients from metro to taluka places</p>
            </div>
            <div className='square-div bg-slate-700 md:mx-2 md:p-4 mx-1 p-2 md:flex-1 rounded-lg'>
              <h1 className='text-md md:text-3xl font-bold'>1,00,000+</h1>
              <h1>Sessions</h1>
              <p className='text-xs'>Convinient & effective care.</p>
            </div>
            <div className='square-div bg-slate-700 md:mx-2 md:p-4 mx-1 p-2 md:flex-1 rounded-lg'>
              <h1 className='text-md md:text-3xl font-bold'>3.8/4</h1>
              <h1>Patient feedback</h1>
              <p className='text-xs'>Patient satisfaction is our primary goal.</p>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Book a Consultation</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
