import { useSelector } from "react-redux";
import { postsSelector } from "../../store/slices/postsSlice";
import PostsListItem from "./PostsListItem";
import SearchPosts from "./SearchPosts";
import spinner from "../../assets/loading.gif";
import { FaExclamation } from "react-icons/fa";

const PostsList = () => {
  const { posts, postsLoading, postsError } = useSelector(postsSelector);

  let postsContainer;

  if (postsLoading) {
    postsContainer = (
      <div className="flex justify-center mt-16">
        <img src={spinner} className="scale-50" alt="loading spinner" />
      </div>
    );
  } else if (postsError) {
    postsContainer = (
      <div className="flex flex-col items-center gap-6 text-2xl my-24">
        <FaExclamation size={32} />
        <p>Failed to get posts from server</p>
      </div>
    );
  } else {
    postsContainer = posts.map((singlePost) => (
      <PostsListItem key={singlePost.id} post={singlePost} />
    ));
  }

  return (
    <div>
      <h3 className="text-5xl mb-6 pb-3 font-semibold border-b-4 border-b-orange-300">
        Posts
      </h3>
      <SearchPosts />
      {postsContainer}
    </div>
  );
};

export default PostsList;
