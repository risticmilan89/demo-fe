export type PostT = {
  title: string;
  body: string;
  id: number;
  userId: number;
};

export type PostsStateT = {
  posts: PostT[];
  postsLoading: boolean;
  postsError: string | null;
};
