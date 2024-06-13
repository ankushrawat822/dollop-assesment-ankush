import React from 'react'
import logo from '../../assets/images/navbar/logo.svg'

import girl from '../../assets/images/footer/girl-2.png'

import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

import { RiFacebookLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";


const Footer = () => {
    return (
        <>
            <div className='text-white flex flex-col bg-[#001D39] p-5 mt-36 md:flex-row md:items-start md:justify-between lg:justify-center gap-5 px-3  sm:px-5 lg:px-20 '>

                {/* first component */}
                <div className='md:w-1/3 lg:w-1/4'>
                    <img src={logo} alt="" />
                    <p className='mt-5'>Learn and Achieve is dedicated to enhancing the educational experience of students across India.</p>
                    {/* social links */}
                    <div className='flex items-start justify-start gap-3 mt-8'>
                        <div className='bg-gray-500 py-2 text-black px-2 font-bold text-[20px] hover:bg-[#F6821F] hover:text-white w-[50px] flex items-center justify-center rounded-[10px] '>
                            <RiFacebookLine></RiFacebookLine>
                        </div>
                        

                        <div className='bg-gray-500 py-2 text-black px-2 font-bold text-[20px] hover:bg-[#F6821F] hover:text-white w-[50px] flex items-center justify-center rounded-[10px] '>
                            <CiInstagram></CiInstagram>
                        </div>
                        

                        <div className='bg-gray-500 py-2 text-black px-2 font-bold text-[20px] hover:bg-[#F6821F] hover:text-white w-[50px] flex items-center justify-center rounded-[10px] '>
                            <CiLinkedin></CiLinkedin>
                        </div>
                        

                        <div className='bg-gray-500 py-2 text-black px-2 font-bold text-[20px] hover:bg-[#F6821F] hover:text-white w-[50px] flex items-center justify-center rounded-[10px] '>
                            <RiTwitterXLine></RiTwitterXLine>
                        </div>
                        

                        <div className='bg-gray-500 py-2 text-black px-2 font-bold text-[20px] hover:bg-[#F6821F] hover:text-white w-[50px] flex items-center justify-center rounded-[10px] '>
                            <CiYoutube></CiYoutube>
                        </div>
                        
                    </div>

                    
                </div>


                {/* grouping quick links and get in touch */}
                <div className='xl:ml-16 flex flex-col sm:flex-row flex-wrap gap-2  w-1/3 sm:items-start sm:justify-between md:justify-start md:gap-5 md:mt-12 '>
                    {/* quick links */}
                    <div>
                        <p className='text-[20px] mt-8 mb-3 font-semibold  '>Quick Links</p>
                        <p className='hover:text-[#F6821F]'>About Us</p>
                        <p className='hover:text-[#F6821F]'>Our Services</p>
                        <p className='hover:text-[#F6821F]'>Bharat SAT</p>
                        <p className='hover:text-[#F6821F]'>Registration Form</p>


                        <p className='hover:text-[#F6821F]'>Contact Us</p>
                        <p className='hover:text-[#F6821F]'>Terms & Conditions</p>
                        <p className='hover:text-[#F6821F]'>Privacy Policy</p>
                        <p className='hover:text-[#F6821F]'>Cancellation Policy</p>

                    </div>

                    {/* get in touch */}
                    <div>

                        <p className='text-[20px] mt-8 mb-3 font-semibold   '>Get In Touch</p>

                        <div className=' flex  items-center justify-start gap-2'>
                            <CiMail className='text-white' />
                            <p>info@learnandachieve.in</p>
                        </div>
                        <div className='my-1 flex  items-center justify-start gap-2'>
                            <MdOutlinePhone className='text-white' />
                            <p>883-0340425</p>
                        </div>
                        <div className=' flex  items-center justify-start gap-2'>
                            <FaRegClock className='text-white' />

                            <div>
                            <p>Sunday - Friday</p>
                            <p>08:00 AM - 05:00 PM</p>
                            </div>
                            
                        </div>
                    </div>




                </div>


                {/* girl image */}
                <img className='hidden h-[580px] lg:flex w-1/3 mt-[-200px] ' src={girl} alt="" />

            </div>

          

            <div className='bg-[#001D39] text-white px-4 flex items-center justify-center gap-2 py-4'>

                <p>COPYRIGHT © 2024 LEARN AND ACHIEVE. ALL RIGHTS RESERVED. | POWERRED BY: DIGIHOST</p>


            </div>


        </>
    )
}

export default Footer
