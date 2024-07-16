import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import { BsPerson} from 'react-icons/bs'
import {TbTruckReturn} from 'react-icons/tb'
import { FaGoogleWallet } from 'react-icons/fa'
import {MdHelp, MdOutlineFavorite} from 'react-icons/md'

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false)
  console.log(sideNav)
  return (
    <div className='max-w-[1520] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <img className='w-[250px] gap-2 ' src='https://www.frickweb.com/images/logo.jpg'></img>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search'
        />
      </div>
      <button className='bg-blue-700 text-white hidden md:flex items-center py-1 gap-3 rounded-full'>
        <BsPerson size={20} />Login
      </button>
      {
        sideNav ? (
          <div className='bg-black/40 fixed w-full h-screen z-10 top-0 left-0'
          onClick={() => setSideNav(!sideNav)}
          ></div>
        ) : ("")
      }

      <div
        className={
          sideNav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25}
        className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'> Frick India <span className='text-blue-700 font-bold'> Limited</span></h2>
          <nav>
            <ul className='flex flex-col p-4 text-grey-900'>
              <li className='text-xl py-4 flex'>
                <BsPerson size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                My Account
              </li>
              <li className='text-xl py-4 flex'>
                <TbTruckReturn size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                Delivery
              </li>
              <li className='text-xl py-4 flex'>
                <MdOutlineFavorite size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                My Favourite
              </li>
              <li className='text-xl py-4 flex'>
                <FaGoogleWallet size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                My Wallet
              </li>
              <li className='text-xl py-4 flex'>
                <MdHelp size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                Help
              </li>
            </ul>
          </nav>
      </div>
    </div>
  )
}

export default TopNav
