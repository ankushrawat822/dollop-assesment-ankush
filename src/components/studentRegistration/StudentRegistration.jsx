import React, { useState, useEffect } from 'react'
import './studentRegistration.css'
import heroBLine from '../../assets/images/studentRegistration/hero-b-line.svg'
import { Breadcrumbs, Stepper, Step, Button, Typography } from "@material-tailwind/react";
import '../../common/navbar/navbar.css'
import loginWhiteStrip from '../../assets/images/navbar/login-white-strip.svg'
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

import { FiPhone } from "react-icons/fi";
import { FaUserCheck } from "react-icons/fa";

import personalDetailIcon from '../../assets/images/studentRegistration/personal-detail-icon.svg'
import PersonalDetails from './PersonalDetails';
import ContactDetails from './ContactDetails';
import Verification from './Verification';

const StudentRegistration = () => {

  // get screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () =>{

      if(activeStep < 2){
        !isLastStep && setActiveStep((cur) => cur + 1)
      }

     
    
    };
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);



 


  return (
    <>
      <div className=' hero-bg w-screen h-[350px]  lg:px-28 py-16' >
        <p className='px-4  text-[25px] md:text-[40px] font-semibold text-white '>Student Registration</p>
        {/* hero below line */}
        <img className='px-3 w-[350px]   lg:w-[500px] ' src={heroBLine} alt="" />


        {/* breadcrumb */}
        <Breadcrumbs className='bg-transparent  text-white mt-36 text-[19px] ' separator=" >> ">
          <p className="text-white mx-1">
            HOME
          </p>
          <p className=" text-[#F6821F] ">
            STUDENT REGISTRATION
          </p>

        </Breadcrumbs>
      </div>

      {/* desktop stepper */}
      <div className="w-full px-10 sm:px-16 md:px-32 py-4 mt-14 ">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <div style={{ background: "white" }} className="bg-white-clr absolute w-full h-1 top-1/2 -translate-y-1/2 bg-gray-100 ">
            <div
              className="h-full bg-orange-500 transition-all duration-500"
              style={{ width: `${(activeStep / 2) * 100}%` }}
            ></div>
          </div>
          <Step onClick={() => setActiveStep(0)}>
            <UserIcon className={` ${screenWidth <= 450 ? (` text-[#D9D9D9]  ${activeStep === 0 ? 'bg-[#F6821F]  rounded-full p-1  w-[47px] h-[47px] mt-[-3px] ' : 'bg-[#F6821F] rounded-full p-1  w-[47px] h-[47px] mt-[-3px] '}  `) : `  rounded-full p-1  w-[47px] h-[47px] mt-[-3px]  ${activeStep === 0 ? 'bg-[#F6821F] rounded-full p-1  w-[47px] h-[47px] mt-[-3px]  text-white' : 'bg-[#F6821F] rounded-full p-1  w-[47px] h-[47px] mt-[-3px]  text-white'} `}  `} />
            <div className=" absolute -bottom-[4.5rem] sm:-bottom-[4.5rem]  w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "orange" : "gray"}
                className='w-[60px]'
              >
                Personal Details
              </Typography>

            </div>

          </Step>



          <Step onClick={() => setActiveStep(1)}>
            <FiPhone className={` ${screenWidth <= 450 ? (` text-[#D9D9D9]  ${activeStep >= 1 ? 'bg-[#F6821F]  rounded-full p-1  w-[47px] h-[47px] mt-[-3px] ' : 'bg-[#D9D9D9] text-[#D9D9D9] rounded-full p-1  w-[47px] h-[47px] mt-[-3px] '}  `) : `  rounded-full p-1  w-[47px] h-[47px] mt-[-3px]  ${activeStep >= 1 ? 'bg-[#F6821F] rounded-full p-2  w-[47px] h-[47px] mt-[-3px]  text-white' : 'bg-[#F6821F] rounded-full p-2  w-[47px] h-[47px] mt-[-3px]  text-white'} `}  `} />
            <div className="absolute -bottom-[4.5rem] sm:-bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "orange" : "gray"}
                className='w-[60px]'
              >
                Contact Details
              </Typography>

            </div>

          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <FaUserCheck className={` ${screenWidth <= 450 ? (` text-[#D9D9D9]  ${activeStep >= 2 ? 'bg-[#F6821F]  rounded-full p-1  w-[47px] h-[47px] mt-[-3px] ' : 'bg-[#D9D9D9] rounded-full p-1  w-[47px] h-[47px] mt-[-3px] '}  `) : `  rounded-full p-1  w-[47px] h-[47px] mt-[-3px]  ${activeStep >= 2 ? 'bg-[#F6821F] rounded-full p-2  w-[47px] h-[47px] mt-[-3px]  text-white' : 'bg-[#F6821F] rounded-full p-2  w-[47px] h-[47px] mt-[-3px]  text-white'} `}  `} />
            <div className="absolute -bottom-[4.5rem] sm:-bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "orange" : "gray"}
                className='w-[60px]'
              >
                OTP Verification
              </Typography>

            </div>
          </Step>
        </Stepper>

        {/* input div */}
        
        <div className='h-[1px] w-full bg-blue-gray-200 mt-24'>

        </div>

       <div className='mt-12'>
       {activeStep === 0 ? (<PersonalDetails></PersonalDetails>) : (null)}
       {activeStep === 1 ? (<ContactDetails></ContactDetails>) : (null)}
       {activeStep === 2 ? (<Verification></Verification>) : (null)}
       </div>
       


        <div className="mt-32 flex justify-between">
          <div className=' invisible ' onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </div>
          {activeStep === 2 ? (

          <div  onClick={handleNext} disabled={isLastStep} className="cursor-pointer text-white flex items-center justify-center ">
               {/* <p>Login</p> */}

               <div className="rounded-l-full flex items-center justify-center login-bg w-[135px] h-[44px] ">
                 <p className="text-[20px] font-semibold mr-6 ">Submit</p>
               </div>
               {/* <img className=" rounded-l-full" src={logInBg1} alt="" /> */}
               <img className=" rounded-tr-[10px] ml-[-35px] " src={loginWhiteStrip} alt="" />
          </div>
          
          ) :
            (
            
            <div onClick={handleNext} disabled={isLastStep} className="cursor-pointer text-white flex items-center justify-center ">
               {/* <p>Login</p> */}

               <div className="rounded-l-full flex items-center justify-center login-bg w-[135px] h-[44px] ">
                 <p className="text-[20px] font-semibold mr-6 ">Next</p>
               </div>
               {/* <img className=" rounded-l-full" src={logInBg1} alt="" /> */}
               <img className=" rounded-tr-[10px] ml-[-35px] " src={loginWhiteStrip} alt="" />
          </div>
            
            )
          }
        </div>
      </div>






    </>
  )
}

export default StudentRegistration