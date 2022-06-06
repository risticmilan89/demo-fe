import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostsDisplay from "../../components/posts/PostsDisplay";
import { postsActions } from "../../store/slices/postsSlice";
import { useAppDispatch } from "../../store/store";
import MainLayout from "../../templates/MainLayout";

const PostsByAuthorPage = () => {
  const dispatch = useAppDispatch();
  const { username } = useParams();

  useEffect(() => {
    if (username) dispatch(postsActions.getPostsByUsername(username));
  }, [dispatch]);

  return (
    <MainLayout>
      <PostsDisplay />
    </MainLayout>
  );
};

export default PostsByAuthorPage;
