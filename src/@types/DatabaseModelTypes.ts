// typescript type for database user model
export type User = {
  name: string;
  surname: string;
  username: string;
  email: string;
  password?: string;
  gender: string;
  createdAt: Date;
  admin: boolean;
};

// typescript type for database blog model
export type Blog = {
  owner_id: string;
  title: string;
  content: string;
  summary: string;
  tags: [string];
  likes: number;
  img: string;
  views: number;
  category: string;
  createdAt: Date;
};

// typescript type for database comment model
export type Comment = {
  id?: string;
  blog_id: string;
  user_id: string;
  content: string;
  likes: number;
  createdAt: Date;
};

export type Feed = {
  id?: string;
  blog_id: string;
  user_id: string;
  content: string;
  likes: number;
  createdAt: Date;
};
