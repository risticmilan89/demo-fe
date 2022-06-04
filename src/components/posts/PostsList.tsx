import { useSelector } from "react-redux";
import { postsSelector } from "../../store/slices/postsSlice";
import PostsListItem from "./PostsListItem";

const PostsList = () => {
  const { posts, postsLoading, postsError } = useSelector(postsSelector);

  if (postsLoading) {
    return <p>Loading...</p>;
  }

  if (postsError) {
    return <p>Failed to get posts from server</p>;
  }

  return (
    <div>
      {posts.map((singlePost) => (
        <PostsListItem key={singlePost.id} post={singlePost} />
      ))}
    </div>
  );
};

export default PostsList;
