import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ROUTE_LIST } from "../../Router";
import { authActions, authSelector } from "../../store/slices/authSlice";
import { useAppDispatch } from "../../store/store";

const Header = () => {
  const { accessToken } = useSelector(authSelector);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(authActions.resetCredentials());
  };

  return (
    <div className="bg-slate-700">
      <div className="max-w-7xl mx-auto flex text-gray-100 h-16 items-center">
        <h1 className="text-3xl">Demo-App</h1>
        <div className="flex-grow items-center flex justify-end gap-10 uppercase font-semibold">
          <NavLink to="/">Home</NavLink>
          {accessToken ? (
            <>
              <NavLink to={ROUTE_LIST.PRIVATE.CREATE_POST}>
                Create a Post
              </NavLink>
              <button
                onClick={logout}
                className="flex bg-slate-400 p-4 py-1 h-12 rounded-xl gap-4 items-center hover:bg-slate-500"
              >
                <p className="uppercase font-semibold">Logout</p>
                <img
                  className="w-10 h-auto rounded-full"
                  src="https://i.pravatar.cc/300"
                  alt="random avatar"
                />
              </button>
            </>
          ) : (
            <>
              <NavLink to={ROUTE_LIST.PUBLIC.LOGIN}>Login</NavLink>
              <NavLink to={ROUTE_LIST.PUBLIC.SIGNUP}>Signup</NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
