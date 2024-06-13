import React, { useState } from 'react'
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent, Select, Option, Typography
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const PersonalDetails = () => {

  // date of birth
  const [date, setDate] = useState();


  // gender
  const [gender, setGender] = useState('');


  // medium 
  const [medium, setMedium] = useState('');


  // class
  const [classs, setClasss] = useState('');


  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleMediumChange = (value) => {
    setMedium(value);
  };

  const handleClassChange = (value) => {
    setClasss(value);
  };

  return (
    <>
      <div>

        <p className='font-semibold text-[20px] '>Personal Details</p>


        {/* input fields */}

        <div className='flex items-center w-full justify-between gap-1 flex-wrap'>

          {/* first name */}
          <div className=' mt-6 w-full md:w-[48%] lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>First Name</label>
            <Input className='' variant="standard" label="Enter your first name" placeholder="Enter your first name" />
          </div>

          {/* middle name */}
          <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Middle Name</label>
            <Input variant="standard" label="Enter your middle name" placeholder="Enter your middle name" />
          </div>

          {/* last name */}
          <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Last Name</label>
            <Input variant="standard" label="Enter your last name" placeholder="Enter your last name" />
          </div>



          {/* dob */}
          <div className=' mt-6 w-full md:w-[48%] lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Date Of Birth</label>
            <div className="pt-0">
              <Popover placement="bottom">
                <PopoverHandler>
                  <Input
                    variant="standard"
                    label='Enter your DOB'
                    onChange={() => null}
                    value={date ? format(date, "PPP") : ""}
                  />
                </PopoverHandler>
                <PopoverContent>
                  <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    showOutsideDays
                    className="border-0"
                    classNames={{
                      caption: "flex justify-center py-2 mb-4 relative items-center",
                      caption_label: "text-sm font-medium text-gray-900",
                      nav: "flex items-center",
                      nav_button:
                        "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                      nav_button_previous: "absolute left-1.5",
                      nav_button_next: "absolute right-1.5",
                      table: "w-full border-collapse",
                      head_row: "flex font-medium text-gray-900",
                      head_cell: "m-0.5 w-9 font-normal text-sm",
                      row: "flex w-full mt-2",
                      cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                      day: "h-9 w-9 p-0 font-normal",
                      day_range_end: "day-range-end",
                      day_selected:
                        "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                      day_today: "rounded-md bg-gray-200 text-gray-900",
                      day_outside:
                        "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                      day_disabled: "text-gray-500 opacity-50",
                      day_hidden: "invisible",
                    }}
                    components={{
                      IconLeft: ({ ...props }) => (
                        <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                      ),
                      IconRight: ({ ...props }) => (
                        <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                      ),
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* gender */}
          <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Gender</label>
            <div className="relative">
              <Select
                variant="standard"
                label="Select Gender"
                value={gender}
                onChange={(e) => handleGenderChange(e.target.value)}
                icon={<ChevronDownIcon className="w-5 h-5 text-gray-500" />}
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </div>
          </div>

          {/* school name */}
          <div className=' mt-6 w-full md:w-[48%] lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>School Name</label>
            <Input variant="standard" label="Enter your School Name" placeholder="Enter your School Name" />
          </div>


          {/* medium */}
          <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Medium</label>
            <div className="relative">
              <Select
                variant="standard"
                label="Select Medium"
                value={medium}
                onChange={(e) => handleMediumChange(e.target.value)}
                icon={<ChevronDownIcon className="w-5 h-5 text-gray-500" />}
              >
                <Option value="english">English</Option>
                <Option value="hindi">Hindi</Option>
              </Select>
            </div>
          </div>

          {/* class */}
          <div className=' mt-6 w-full md:w-[48%] lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Class</label>
            <div className="relative">
              <Select
                variant="standard"
                label="Select Class"
                value={classs}
                onChange={(e) => handleClassChange(e.target.value)}
                icon={<ChevronDownIcon className="w-5 h-5 text-gray-500" />}
              >
                <Option value="1st">1st</Option>
                <Option value="2nd">2nd</Option>
                <Option value="3rd">3rd</Option>
                <Option value="4th">4th</Option>
                <Option value="5th">5th</Option>
                <Option value="6th">6th</Option>
                <Option value="7th">7th</Option>
                <Option value="8th">8th</Option>
                <Option value="9th">9th</Option>
                <Option value="10th">10th</Option>
                <Option value="11th">11th</Option>
                <Option value="12th">12th</Option>
                

              </Select>
            </div>
          </div>


          
          {/* school name */}
          <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Register By</label>
            <Input variant="standard" label="Coordinator" placeholder="Coordinator" />
          </div>


          {/* school name */}
          <div className=' mt-6 w-full md:w-[48%]  lg:w-[31%] flex flex-col gap-2'>
            <label className='font-semibold'>Unique Code</label>
            <Input variant="standard" label="Enter unique code" placeholder="Enter your unique code" />
          </div>


        </div>
      </div>
    </>
  )
}

export default PersonalDetails