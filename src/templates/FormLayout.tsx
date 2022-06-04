import { FC, ReactNode } from "react";

const FormLayout: FC<{
  title: string;
  onSubmit: () => void;
  children: ReactNode;
}> = ({ title, onSubmit, children }) => {
  return (
    <div className="bg-white  mx-auto max-h-[800px] max-w-[600px] p-10 mt-10 flex flex-col items-center justify-center shadow-md">
      <h2 className="text-3xl font-semibold p-8">{title}</h2>
      <form className="flex flex-col p-6 gap-3 w-[400px]" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default FormLayout;
