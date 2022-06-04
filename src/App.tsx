import Router from "./Router";
import { useEffect } from "react";
import { useAppDispatch } from "./store/store";
import { postsActions } from "./store/slices/postsSlice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postsActions.getPosts());
  }, [dispatch]);

  return <Router />;
};

export default App;
