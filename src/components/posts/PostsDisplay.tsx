import PostsList from "./PostsList";
import SearchPosts from "./SearchPosts";

const PostsDisplay = () => {
  return (
    <div>
      <h3 className="text-5xl mb-6 pb-3 font-semibold border-b-4 border-b-orange-300">
        Posts
      </h3>
      <SearchPosts />
      <PostsList />
    </div>
  );
};

export default PostsDisplay;
