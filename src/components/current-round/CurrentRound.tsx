import React from 'react';
import { Slider } from "@nextui-org/react";

import { CustomButton } from '..'
import Image from 'next/image';

export const CurrentRound = () => {

  const rowsData = [
    {
      name: "CPU 1",
      point: "-",
      multiple: "-",
    },
    {
      point: "2",
      name: "CPU 2",
      multiple: "-",
    },
    {
      name: "CPU 3",
      point: "-",
      multiple: "-",
    },
    {
      name: "CPU 4",
      point: "-",
      multiple: "-",
    },
  ];


  const speedMarks = [
    {
      value: 0,
      label: "1x",
    },
    {
      value: 25,
      label: "2x",
    },
    {
      value: 50,
      label: "3x",
    },
    {
      value: 75,
      label: "4x",
    },
    {
      value: 100,
      label: "5x",
    },
  ]

  return (
    <div className="flex flex-col w-full h-full rounded-small py-48 px-20">

      <CustomButton
        color="secondary"
        radius="sm"
        fullWidth
        text="Start"
        className="h-[48px] text-22 font-semibold text-white bg-gradient-to-r from-[#e53d79] to-[#f75753]"
      />

      <div className="flex items-center gap-8 my-20">
        <Image
          src="/images/trophy-cup.webp"
          alt="Logo"
          width={25}
          height={25}
        />
        <h3 className="text-white text-18">Current Round</h3>
      </div>

      <ul className="w-full flex flex-col items-center border border-[#1a1d26] rounded-6">
        <li className="w-full flex items-center justify-between pl-28 py-8 text-12 text-[#8c94a8]">
          <p className="flex-1 text-md">No</p>
          <p className="flex-1 text-sm">Name</p>
          <p className="flex-1 text-sm">Score</p>
        </li>
        <li className="w-full">
          <ul className="w-full flex flex-col items-center  [&>li:nth-child(even)]:bg-dark-blue">
            {rowsData.map((row, index: number) => (
              <li key={index} className="w-full flex items-center justify-between gap-24 px-24 py-8 bg-[#232833]">
                <p className="flex-1 text-white text-sm">{row.name}</p>
                <p className="flex-1 text-white text-sm">{row.point}</p>
                <p className="flex-1 text-white text-sm">{row.multiple}</p>
              </li>
            ))}
          </ul>

        </li>
      </ul>

      <div className="flex items-center gap-8 my-20">
        <Image
          src="/images/speedometer.svg"
          alt="Logo"
          width={25}
          height={25}
        />
        <h3 className="text-white text-18">Speed</h3>
      </div>

      <div className='w-full bg-dark-blue'>
        <Slider
          // label="Select a value"
          color="danger"
          size="md"
          step={10}
          marks={[...speedMarks
          ]}
          defaultValue={25}
          className="w-full max-w-md text-white "
        />
      </div>
    </div>
  )
}