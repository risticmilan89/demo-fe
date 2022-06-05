import { FC } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const EyeButton: FC<{ show: boolean; onClick: () => void }> = ({
  show,
  onClick,
}) => {
  return (
    <button type="button" className="absolute right-0 top-0" onClick={onClick}>
      {show ? <IoEyeOutline size={24} /> : <IoEyeOffOutline size={24} />}
    </button>
  );
};

export default EyeButton;
