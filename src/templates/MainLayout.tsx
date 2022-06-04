import { FC, ReactNode } from "react";
import Header from "../components/header/Header";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-gray-200 flex flex-grow">
        <div className="bg-gray-50 max-w-7xl mx-auto p-8 pt-16 shadow-lg flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
