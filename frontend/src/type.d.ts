export type Movie = {
  id: number;
  uu_id: string;
  title: string;
  description: string;
  release_date: string;
  image: string;
  video: string;
  movie_views: movie_views;
  genre: string;
};
export type SearchMovie = {
  key?: string;
};
export type Book = {
  id: number;
  image: string;
  title: string;
  author: string;
  description: string;
  price: number;
  rating: number;
  isLike: boolean;
  category: string;
  created_date: string;
};
