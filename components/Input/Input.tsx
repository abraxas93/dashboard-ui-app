import { FC, InputHTMLAttributes, ReactNode } from "react";


type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    size?: InputSize;
}


export const Input: FC<InputProps> = (props) => {
  const {label, placeholder} = props;
  return (
    <div className='flex flex-col'>
      <div>{label}</div>
      <input className="border rounded border-gray-300 p-2" placeholder={placeholder}/>
    </div>
  )
}