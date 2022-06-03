import { FC, ReactNode } from "react";

type PropsT = {
  children?: ReactNode;
};

const LoginLayout: FC<PropsT> = ({ children }) => {
  return <div>{children}</div>;
};

export default LoginLayout;
