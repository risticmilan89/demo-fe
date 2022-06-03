import { FC, ReactNode } from "react";
import Header from "../components/header/Header";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
