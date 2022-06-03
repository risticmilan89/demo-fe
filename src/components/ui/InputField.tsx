import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type InputFieldPropsT = {
  name: string;
  label: string;
  type?: string;
  register: UseFormRegister<any>;
};

const InputField: FC<InputFieldPropsT> = ({
  name,
  label,
  type = "text",
  register,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        {...register(name, { required: `${label} is required.` })}
      />
    </div>
  );
};

export default InputField;
