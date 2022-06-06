import { useEffect } from "react";
import Router from "./Router";
import { authActions } from "./store/slices/authSlice";
import { useAppDispatch } from "./store/store";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const username = localStorage.getItem("username");

    if (accessToken && username) {
      dispatch(
        authActions.setCredentials({
          username,
          token: accessToken,
        })
      );
    }
  }, [dispatch]);

  return <Router />;
};

export default App;
