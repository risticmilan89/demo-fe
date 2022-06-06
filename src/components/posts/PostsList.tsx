import { useSelector } from "react-redux";
import {
  filteredPostSelector,
  postsSelector,
} from "../../store/slices/postsSlice";
import PostsListItem from "./PostsListItem";
import spinner from "../../assets/loading.gif";
import { FaExclamation } from "react-icons/fa";
import { uiSelector } from "../../store/slices/uiSlice";

const PostsList = () => {
  const { postsLoading, postsError } = useSelector(postsSelector);
  const { filteredPosts: posts } = useSelector(filteredPostSelector);
  const { searchValue } = useSelector(uiSelector);

  if (postsLoading) {
    return (
      <div className="flex justify-center mt-16">
        <img src={spinner} className="scale-50" alt="loading spinner" />
      </div>
    );
  }

  if (postsError) {
    return (
      <div className="flex flex-col items-center gap-6 text-2xl my-24">
        <FaExclamation size={32} />
        <p>Failed to get posts from server</p>
      </div>
    );
  }

  if (posts.length === 0 && searchValue.length > 0) {
    return (
      <p className="text-2xl text-gray-500 p-20 text-center bg-slate-100">
        No posts match your search
      </p>
    );
  }

  if (posts.length === 0) {
    return (
      <p className="text-2xl text-gray-500 p-20 text-center bg-slate-100">
        There are no posts to display
      </p>
    );
  }

  return (
    <>
      {posts.map((singlePost) => (
        <PostsListItem key={singlePost.id} post={singlePost} />
      ))}
    </>
  );
};

export default PostsList;
