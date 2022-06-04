import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type InputFieldPropsT = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<any>;
};

const InputField: FC<InputFieldPropsT> = ({
  name,
  label,
  type = "text",
  register,
}) => {
  return (
    <div className="w-full">
      <label className="block font-semibold mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        className="bg-neutral-100 w-full p-3 py-1"
        type={type}
        {...register(name, { required: `${label} is required.` })}
      />
    </div>
  );
};

export default InputField;
