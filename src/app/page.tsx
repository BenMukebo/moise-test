'use client';

import { useState } from "react";
import Image from "next/image";
import { Button } from '@nextui-org/button';
import { CustomButton } from '@/components/shared/custom-button/CustomButton';
import { CurrentRound, Chat, Login, Ranking, RoundController } from "@/components";
import { useUserInfoContext } from '@/contexts/userContext';


const columns = [
  {
    key: "No.",
    label: "No",
  },
  {
    key: "Name",
    label: "NAME",
  },
  {
    key: "Score",
    label: "SCORE",
  },
];

export default function Home() {
  const { userInfo, setUserInfo } = useUserInfoContext();

  const [points, setPoints] = useState(100);
  const [multipler, setMultipler] = useState(2.15);

  return (
    <div className="flex min-h-screen flex-col items-center py-32 px-24 bg-black">

      <div className="w-full max-w-7xl min-h-[480px] flex gap-16">
        <div className="w-2/5 max-w-[440px]">

          {userInfo.isLogin ? (
            <>
              <div className="flex items-center justify-around">
                <RoundController
                  label="Points"
                  value={points}
                  onEncrease={() => {
                    setPoints((previous) => previous + 1);
                  }}
                  onDecrease={() => {
                    setPoints((previous) => previous - 1);
                  }}
                />
                <RoundController
                  label="Multipilier"
                  value={multipler}
                  onEncrease={() => {
                    setMultipler((previous) => previous + 1);
                  }}
                  onDecrease={() => {
                    setMultipler((previous) => previous - 1);
                  }}
                />
              </div>
              <CurrentRound />
            </>
          ) : (
            <Login />
          )}
        </div>

        <div className="flex flex-col w-full grow w-8/12">
          <ul className="h-[48px] w-full flex items-center gap-16 mb-16">
            <li className="h-full flex flex-1 items-center gap-8 rounded-8 bg-dark-blue bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <Image
                src="/images/medal.webp"
                alt="Logo"
                width={40}
                height={40}
              />
              <p className="text-white text-md">Home</p>
            </li>
            <li className="h-full flex flex-1 items-center gap-8 rounded-8 bg-dark-blue">
              <Image
                src="/images/user-profile.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <p className="text-white text-sm">Home</p>
            </li>
            <li className="h-full flex flex-1 items-center gap-8 rounded-8 bg-dark-blue bg-gradient-to-r from-indigo-500">
              <Image
                src="/images/clock.webp"
                alt="Logo"
                width={40}
                height={40}
              />
              <p className="text-white text-sm">Home</p>
            </li>
          </ul>

          <div className="w-full grow bg-dark-blue border border-[#5a6374] rounded-small"></div>
        </div>
      </div>

      <div className="w-full max-w-7xl flex gap-16 mt-24">
        <Ranking />
        <Chat />
      </div>
    </div >
  );
}
