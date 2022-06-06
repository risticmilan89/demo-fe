export type CreateUserT = {
  username: string;
  email: string;
  password: string;
};

export type LoginUserT = {
  username: string;
  password: string;
};

export type CreatePostT = {
  title: string;
  body: string;
  username: string;
};
