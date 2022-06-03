import { FC } from "react";

const Input: FC<{ name: string; type: string }> = ({ name, type }) => {
  return <input type={type} name={name} id={name} />;
};

export default Input;
