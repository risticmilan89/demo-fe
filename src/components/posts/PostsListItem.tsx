import { FC } from "react";
import { PostT } from "../../types";

const PostsListItem: FC<{ post: PostT }> = ({ post }) => {
  const {
    title,
    body,
    author: { username },
  } = post;

  return (
    <div className="bg-white rounded-md p-4 shadow-md mb-6 relative">
      <h2 className="text-2xl font-semibold mb-2 capitalize">{title}</h2>
      <p>{body}</p>
      <div>
        <p className="mt-4">
          Author: <span className="font-semibold">{username}</span>
        </p>
      </div>

      <div className="absolute bottom-0 right-0 p-2 px-8 font-semibold bg-orange-200 rounded-tl-md cursor-pointer">
        Read more
      </div>
    </div>
  );
};

export default PostsListItem;
