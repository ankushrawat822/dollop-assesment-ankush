import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import logo from '../../assets/images/navbar/logo.svg'
import loginWhiteStrip from '../../assets/images/navbar/login-white-strip.svg'
import logInBg1 from '../../assets/images/navbar/login-bg-1.svg'
import './navbar.css'

const Nav = () => {

    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);

   
const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-[#222222] lg:gap-6">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
     
      <p className="flex items-center">
        Home
      </p>
    </Typography>

    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
     
      <p className="flex items-center">
        About Us
      </p>
    </Typography>

    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
     
      <p className="flex items-center">
        Our Service
      </p>
    </Typography>


    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
     
      <p className="flex items-center">
        Bharat SAT
      </p>
    </Typography>

    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
     
      <p className="flex items-center">
        Bharat Sat Scholarship
      </p>
    </Typography>


    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
     
      <p className="flex items-center">
        Join as a Coordinator
      </p>
    </Typography>
   
    
   
  </ul>
);

  return (
    <>
         <Navbar className=" py-2 px-3 mx-auto  text-black w-screen">
      <div className=" flex items-center justify-between ">
         <img className="" src={logo} alt="" />

        <div className="hidden lg:block ">{navList}</div>

        <div className="flex items-center justify-center gap-2">

        <div className=" flex items-end justify-end  gap-x-1">
          
          <div  className="cursor-pointer text-white flex items-center justify-center ">
               {/* <p>Login</p> */}

               <div className="rounded-l-full flex items-center justify-center login-bg w-[135px] h-[44px] ">
                 <p className="text-[20px] font-semibold mr-6 ">Login</p>
               </div>
               {/* <img className=" rounded-l-full" src={logInBg1} alt="" /> */}
               <img className=" rounded-tr-[10px] ml-[-35px] " src={loginWhiteStrip} alt="" />
          </div>
          
        </div>

        <IconButton
          variant="text"
          className=" ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>

        </div>

       
      </div>

      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          
        </div>
      </MobileNav>
    </Navbar>
    </>
  )
}

export default Nav