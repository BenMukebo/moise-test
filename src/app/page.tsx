'use client';

import { useState } from "react";
import Image from "next/image";
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

  const headerItems = [
    {
      icon: "/images/medal.webp",
      text: "Home",
      size: "md",
    },
    {
      icon: "/images/user-profile.png",
      text: userInfo.name,
      size: "sm",
    },
    {
      icon: "/images/clock.webp",
      text: new Date().toLocaleTimeString(),
      size: "sm",
    },
  ];

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

        <div className="flex flex-col grow w-8/12">
          <ul className="h-[48px] w-full flex items-center gap-16 mb-16">
            {headerItems.map((item, index: number) => (
              <li
                key={index}
                className={`h-full flex flex-1 items-center gap-8 rounded-8 bg-gradient-to-r from-[#181b24] ${index === 0 ? "to-dark-blue" : "bg-dark-blue"
                  }`}
              >
                <Image src={item.icon} alt="Logo" width={40} height={40} />
                <p className={`text-white text-${item.size}`}>{item.text}</p>
              </li>
            ))}
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
