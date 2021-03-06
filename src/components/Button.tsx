import { FC, ReactNode } from "react";

const Button: FC<{ children: ReactNode }> = ({ children, ...props }) => {
  return (
    <button
      className="bg-slate-500 text-white text-xl p-2 flex justify-center w-full"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
