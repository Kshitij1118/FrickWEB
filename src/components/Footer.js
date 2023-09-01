import React from 'react'
import { FaYoutube, FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[100%] m-auto px-4 py-2 bg-[#24262b]'>
            <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl py-4'> Frick India <span className='text-blue-500 font-bold'> Limited</span></h1>
                    <p>
                    Most Experienced & Largest Industrial Refrigeration Equipment Manufacturer And Turnkey Solution Provider Since 1962
                    </p>
                    <img className='w-[250px] mx-auto my-6' src='https://www.frickweb.com/images/tuv.jpg'></img>
                    <h1 className='w-full text-2xl font-bold mt-10'> Follow Us..</h1>
                    <div className='flex justify-between md:w-[75%] my-10'>
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                        <FaYoutube size={30} />
            
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>CORPORATE</h6>
                        <ul>
                            <li className='py-2 text-sm'>Home</li>
                            <li className='py-2 text-sm'>About Us</li>
                            <li className='py-2 text-sm'>Investors Relation</li>
                            <li className='py-2 text-sm'>Corporate Social Responsibility</li>
                            <li className='py-2 text-sm'>Area Of Bussiness</li>
                            <li className='py-2 text-sm'>Career</li>
                            <li className='py-2 text-sm'>Service Network</li>
                            <li className='py-2 text-sm'>Feedback</li>
                            <li className='py-2 text-sm'>What's customer say</li>
                            <li className='py-2 text-sm'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>CONTACT US</h6>
                        <ul>
                            <li className='py-2 text-sm'>Address : Frick India Limited
809, Surya Kiran, 19 K. G. Marg, New Delhi 110 001.</li>
                            <li className='py-2 text-sm'>Phone No. : 23322381/384/391,23738693/694</li>
                            <li className='py-2 text-sm'>Email : delhi@frick.co.in, publicity@frickmail.com</li>
                            <li className='py-2 text-sm'>For Export Enquiry : export@frickmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-center text-white'>Made with ❤️ by Kshitij Singh</p>
        </div>
    )
}

export default Footer
