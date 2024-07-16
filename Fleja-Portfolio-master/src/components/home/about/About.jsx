import React from "react"

const About = () => {
  const data = [
    {
      title: "Frick India Limited",
      desc1: "Premium turnkey solution provider & equipment manufacturer for industrial refrigeration in India, since 1962",
      desc2: "FRICK INDIA LIMITED was incorporated as a public limited company in 1962 in collaboration with Frick Company USA, one of the worlds most experienced and largest manufacturers of industrial refrigeration & air-conditioning equipment. Now a front-ranking company, Frick India has been adapting to new technologies and is offering the customer the latest systems for all Industrial refrigeration applications.",
      desc3: "With collaboration and technologies from Japan, U.S.A. Frick India can also provide on line Total Energy Management System (TEMS) for almost all industrial refrigeration applications.",
      cover: "./assets/ammonianatural.jpg",
    },
  ]
  return (
    <>
      <section className='about topMarign'>
        <div className='container flex'>
          {data.map((value) => {
            return (
              <>
                <div className='left mtop'>
                  <div className='heading'>
                    <h3>About Us</h3>
                    <h1>{value.title}</h1>
                    <h2>{value.desc1}</h2>
                  </div>

                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
                  <button className='primary-btn'>Read More...</button>
                </div>
                <div className='centre'>
                  <img src={value.cover} alt='' />
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default About
