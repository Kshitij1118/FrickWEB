import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-blue-700 font-bold text-4xl text-center'>About Us</h3>
      <p className='text-center py-8'>Frick India Limited - Premium turnkey solution provider & equipment manufacturer for industrial refrigeration in India, since 1962 FRICK INDIA LIMITED was incorporated as a public limited company in 1962 in collaboration with Frick Company USA, one of the worlds most experienced and largest manufacturers of industrial refrigeration & air-conditioning equipment. Now a front-ranking company, Frick India has been adapting to new technologies and is offering the customer the latest systems for all Industrial refrigeration applications. With collaboration and technologies from Japan, U.S.A. Frick India can also provide on line Total Energy Management System (TEMS) for almost all industrial refrigeration applications.</p>
      <div className='w-[1540px] mx-auto grid md:grid-cols-3'>
        <div className='flex flex-col justify-center'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Quality Management System</h1>
            <p>
            A pioneer in design, manufacture, installation and servicing of refrigeration and air-conditioning systems and equipment, Frick India has achieved the certification of assessment "Quality Management System ISO 9001:2015 and ASME - "U" Stamping certification for Pressure Vessels.
            </p>
        </div>
        <img className='w-[300px] mx-auto my-6' src='https://www.frickweb.com/images/facility.jpg'></img>
        <img className='w-[300px] mx-auto my-6' src='https://www.frickweb.com/images/mem.jpg'></img>
      </div>
      <div className='w-[1540px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-10'>Integrated Production Facility</h1>

            <h2 className='text-black font-bold text-1xl'>TOTAL AREA OF FACTORY</h2>
            <p> - Covered Area : 2,88,936 Sq.Ft</p>
            <p> - Uncovered Area : 4,22,514 Sq.Ft.</p>

            <h2 className='text-black font-bold text-1xl mt-4'>R & D DEPARTMENT</h2>
            <p> - In house R & D & Engineering Deptt. : 14,294 Sq.Ft.</p>

            <h2 className='text-black font-bold text-1xl mt-4'>FOUNDRY & PATTERN SHOP DEPARTMENT</h2>
            <p> - Foundry Deptt. : 25,040 Sq.Ft.</p>
            <p> - Pattern Shop : 2970 Sq.Ft.</p>

            <h2 className='text-black font-bold text-1xl mt-4'>MACHINING DEPARTMENT</h2>
            <p> - Machine Shop : 24,692 Sq.Ft.</p>
            <p> - Condensers & Coil Section : 32,524 Sq.Ft.</p> 
            <p> - Sheet Metal Fabrication : 17,446 Sq.Ft.</p>
            <p> - New Coil Section : 18,400 Sq.Ft.</p>

            <h2 className='text-black font-bold text-1xl mt-4'>ASSEMBLY DEPARTMENT</h2>
            <p> - Compressor Assembly : 29,082 Sq.Ft.</p>
            <p> - Screw Package Assembly : 7,000 Sq.Ft.</p>
            <p> - Plate Freezer Assembly : 6,960 Sq.Ft.</p>
            <p> - Electrical Control Panel : 4,585 Sq.Ft.</p>

            <h2 className='text-black font-bold text-1xl mt-4'>LOGISTIC & SUPPLY CHAIN DEPARTMENT</h2>
            <p> - Administration : 23,181 Sq.ft.</p>
            <p> - Stores Department : 18,400 Sq.ft.</p>
            <p> - Shipping Wing : 8,880 Sq.ft.</p>

        </div>
        <img className='w-[950px] mx-auto my-6' src='https://www.frickweb.com/images/facility-a.jpg'></img>
        <img className='w-[550px] mx-auto my-6' src='https://www.frickweb.com/images/facility1.jpg'></img>
        <img className='w-[550px] mx-auto my-6' src='https://www.frickweb.com/images/facility2.jpg'></img>
        <img className='w-[550px] mx-auto my-6' src='https://www.frickweb.com/images/facility3.jpg'></img>
        <img className='w-[550px] mx-auto my-6' src='https://www.frickweb.com/images/facility5.jpg'></img>
      </div>
    </div>
  )
}

export default AboutUs
