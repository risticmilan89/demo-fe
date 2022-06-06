import MainLayout from "../templates/MainLayout";
import PostsDisplay from "../components/posts/PostsDisplay";
import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { postsActions } from "../store/slices/postsSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postsActions.getPosts());
  }, [dispatch]);
  return (
    <MainLayout>
      <PostsDisplay />
    </MainLayout>
  );
};

export default HomePage;
