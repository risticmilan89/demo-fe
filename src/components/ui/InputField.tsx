import { FC } from "react";
import Input from "./Input";

const InputField: FC<{ name: string; label: string; type?: string }> = ({
  name,
  label,
  type = "text",
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input type={type} name={name} />
    </div>
  );
};

export default InputField;
