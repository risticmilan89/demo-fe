import { FC } from "react";
import { PostT } from "../../types";

const PostsListItem: FC<{ post: PostT }> = ({ post: { title, body } }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostsListItem;
