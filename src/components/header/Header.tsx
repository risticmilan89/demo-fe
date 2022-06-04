import { NavLink } from "react-router-dom";
import { ROUTE_LIST } from "../../Router";

const Header = () => {
  const auth = "";
  return (
    <div className="bg-slate-700">
      <div className="max-w-7xl mx-auto flex text-gray-100 p-4">
        <h1 className="text-3xl">Demo-App</h1>
        <div className="flex-grow items-center flex justify-end gap-10 uppercase font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to={ROUTE_LIST.PUBLIC.LOGIN}>Login</NavLink>
          <NavLink to={ROUTE_LIST.PUBLIC.SIGNUP}>Signup</NavLink>
          {auth && (
            <NavLink to={ROUTE_LIST.PRIVATE.CREATE_POST}>Create a Post</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
