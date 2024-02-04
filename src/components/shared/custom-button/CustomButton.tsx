'use client';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { MouseEventHandler } from 'react';


type ButtonTYpe = 'button' | 'submit' | 'reset';

interface CustomButtonProps {
  children?: React.ReactNode | React.ReactNode[]
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  isDisabled?: boolean;
  type?: ButtonTYpe;
  text: string;
  href?: string;
  className?: string;
  textStyles?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  // handleClick?: MouseEventHandler<HTMLButtonElement>;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}


export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const {
    variant, color, radius, isDisabled, type, text, href, className, fullWidth, handleClick
  } = props;


  return (
    <Button
      variant={variant || "solid"}
      color={color || "default"}
      radius={radius || "md"}
      isDisabled={isDisabled}
      type={type || "button"}
      startContent={props.startIcon}
      endContent={props.endIcon}
      className={`min-w-[30px] ${className}`}
      fullWidth={fullWidth}
      onClick={handleClick}
      {...(href && { as: Link, href })}
    >
      {text}
    </Button>
  );
};
