import Image from 'next/image';
import { CustomButton } from '..';
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

type Props = {
  label: string;
  value: number;
}

export const RoundController: React.FC<Props> = ({
  label,
  value
}) => {
  return (
    <div className="text-center px-8 py-4 border border-[#1a1d26] rounded-8">
      <p className="text-8 text-[#8c94a8] mb-2">
        {label}
      </p>

      <div className='flex items-center justify-center gap-4 h-[32px]'>
        <CustomButton
          variant="bordered"
          radius="sm"
          text=""
          endIcon={<BiSolidDownArrow />}
          className="max-w-[20px] h-full p-0 border-[#1a1d26] text-white"
        />
        <div className='h-full text-white text-16 text-center'>
          <p className="text-while h-full w-[80px] leading-[32px] bg-[#000] rounded-8">
            {value}
          </p>
        </div>
        <CustomButton
          variant="bordered"
          radius="sm"
          text=""
          endIcon={<BiSolidUpArrow />}
          className="w-[20px] h-full p-0 border-[#1a1d26] text-white"
        />
      </div>

    </div>

  )
}
