import { FC, ReactNode } from "react";

const Button: FC<{ children: ReactNode }> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
