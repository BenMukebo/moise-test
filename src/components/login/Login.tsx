'use client';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { CustomButton } from '..';

import { useUserInfoContext } from '@/contexts/userContext';

export const Login: React.FC = () => {
  const { userInfo, setUserInfo } = useUserInfoContext();
  console.log('userInfo', userInfo);

  return (
    <Card className="flex flex-col w-full h-full bg-dark-blue border border-[#5a6374] rounded-small py-48 px-20">
      <CardHeader className="flex justify-center">
        <h2 className="text-[#8c94a8]">Welcome</h2>
      </CardHeader>

      <CardBody className="flex flex-col items-center justify-center grow">
        <p className="text-[#5a6374] mb-16">
          Please insert Your Name
        </p>
        <div className="mb-8 w-full">
          <input
            type="text"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            className="bg-[#000] border border-[#5a6374] rounded-8 w-full h-[40px] px-12 py-8 text-white"
          />
        </div>

        <CustomButton color="secondary" radius="sm" fullWidth
          text="Candidate"
          isDisabled={((userInfo?.name?.length) || 0) <= 3}
          // variant=""
          className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          handleClick={() => setUserInfo({ ...userInfo, isLogin: true })}
        />

      </CardBody>
    </Card>
  );
}
