import { NavLink } from "react-router-dom";
import { ROUTE_LIST } from "../../Router";

const Header = () => {
  const auth = "";
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to={ROUTE_LIST.PUBLIC.LOGIN}>Login</NavLink>
      <NavLink to={ROUTE_LIST.PUBLIC.SIGNUP}>Signup</NavLink>
      {auth && (
        <NavLink to={ROUTE_LIST.PRIVATE.CREATE_POST}>Create a Post</NavLink>
      )}
    </div>
  );
};

export default Header;
