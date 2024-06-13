import React, { useState } from 'react'
import {
  Input,
  Select, Option, Typography,
  Checkbox
} from "@material-tailwind/react";

import { ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";


const ContactDetails = () => {

  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
 
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedTaluka, setSelectedTaluka] = useState('');
  const [selectedPinCode, setSelectedPinCode] = useState('');

  const handleStateChange = (value) => {
    setSelectedState(value);
 
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
   
  };

  const handleTalukaChange = (value) => {
    setSelectedTaluka(value);
 
  };

  const handlePinCodeChange = (value) => {
    setSelectedPinCode(value);
  };

  return (
    <>
      <div>

        <p className='font-semibold text-[20px] '>Contact Details</p>

        <div className='flex items-center w-full justify-between gap-1 flex-wrap'>

          {/* email */}
          <div className=' mt-6 w-full md:w-[48%] lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Email</label>
            <Input className='' variant="standard" label="Enter your emial id" placeholder="Enter your emial id" />
          </div>

          {/* mobile */}
          <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Mobile</label>
            <Input variant="standard" label="Enter your mobile no." placeholder="Enter your mobile no." />
          </div>



          {/* Address Line 1 */}
          <div className=' mt-6 w-full md:w-[48%] lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Address Line-1</label>
            <Input variant="standard" label="Enter your address" placeholder="Enter your address" />
          </div>


          {/* Address Line 2 */}
          <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Address Line-2</label>
            <Input variant="standard" label="Enter your address" placeholder="Enter your address" />
          </div>


          {/* state */}
          <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>State</label>
            <div className="relative">
              <Select
                variant="standard"
                label="State"
                value={selectedState}
                onChange={(e) => handleStateChange(e.target.value)}
                icon={<ChevronDownIcon className="w-5 h-5 text-gray-500" />}
              >

                <Option value="option 1"> option 1 </Option>
                <Option value="option 2"> option 2 </Option>
                <Option value="option 3"> option 3 </Option>



              </Select>
            </div>
          </div>



          {/* district */}
          <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>District</label>
            <div className="relative">
              <Select
                variant="standard"
                label="District"
                value={selectedDistrict}
                onChange={(e) => handleDistrictChange(e.target.value)}
                icon={<ChevronDownIcon className="w-5 h-5 text-gray-500" />}
              >
                <Option value="option 1"> option 1 </Option>
                <Option value="option 2"> option 2 </Option>
                <Option value="option 3"> option 3 </Option>
              </Select>
            </div>
          </div>




          {/* Taluka */}
          <div className=' mt-6 w-full md:w-[48%] lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Taluka</label>
            <div className="relative">
              <Select
                variant="standard"
                label="Taluka"
                value={selectedTaluka}
                onChange={(e) => handleTalukaChange(e.target.value)}
                icon={<ChevronDownIcon className="w-5 h-5 text-gray-500" />}
              >
                <Option value="option 1"> option 1 </Option>
                <Option value="option 2"> option 2 </Option>
                <Option value="option 3"> option 3 </Option>
              </Select>
            </div>
          </div>



          {/* Pin code */}
          <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Pin Code</label>
            <div className="relative">
              <Select
                variant="standard"
                label="Pin Code"
                value={selectedPinCode}
                onChange={(e) => handlePinCodeChange(e.target.value)}
                icon={<ChevronDownIcon className="w-5 h-5 text-gray-500" />}
              >
                <Option value="option 1"> option 1 </Option>
                <Option value="option 2"> option 2 </Option>
                <Option value="option 3"> option 3 </Option>
              </Select>
            </div>
          </div>



           {/* hidden temp */}
           <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex-col gap-2 hidden sm:block invisible '>
            <label className='font-semibold'>Address Line-2</label>
            <Input variant="standard" label="Enter your address" placeholder="Enter your address" />
          </div>






        </div>

         
         <div className='flex items-center justify-start mt-4 gap-2'>
         <Checkbox></Checkbox> 
         <p>I agree to these Terms and Conditions</p>
         </div>
       


      </div>
    </>
  )
}

export default ContactDetails