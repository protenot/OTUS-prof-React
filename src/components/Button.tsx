import React from "react";

interface ButtonProps {
  text: string;
  onClick: (arg?: string) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {

  const handleClick:React.MouseEventHandler<HTMLButtonElement> = (_event)=>{
    onClick('arg')
  }
  return <button onClick={handleClick}>{text}</button>;
};
export default Button;
