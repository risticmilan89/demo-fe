import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import CreatePostPage from "./pages/posts/CreatePostPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import PostsByAuthorPage from "./pages/posts/PostsByAuthorPage";

const Router = () => {
  const accessKey = "";

  const privateRoutes = (
    <>
      <Route
        path={ROUTE_LIST.PRIVATE.CREATE_POST}
        element={<CreatePostPage />}
      />
    </>
  );

  return (
    <Routes>
      {accessKey && privateRoutes}
      <Route path="/" element={<HomePage />} />
      <Route path={ROUTE_LIST.PUBLIC.LOGIN} element={<LoginPage />} />
      <Route path={ROUTE_LIST.PUBLIC.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTE_LIST.PUBLIC.POSTS} element={<HomePage />} />
      <Route path={ROUTE_LIST.PUBLIC.POST} element={<PostDetailsPage />} />
      <Route path={ROUTE_LIST.PUBLIC.AUTHOR} element={<PostsByAuthorPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;

export const ROUTE_LIST = {
  PUBLIC: {
    SIGNUP: "/signup",
    LOGIN: "/login",
    POSTS: "/posts",
    POST: "/posts/:slug",
    AUTHOR: "/posts/author/:username",
  },
  PRIVATE: {
    CREATE_POST: "create-post",
  },
};
