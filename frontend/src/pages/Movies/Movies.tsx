import React, { useEffect } from "react";
import { getMovies, useMovie } from "../../slices/movie";
import { useAppDispatch } from "../../app/redux";

const Movies = () => {
  const dispatch = useAppDispatch();
  const { list: movies } = useMovie();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <section className="movie">
      <div className="container">
        <div className="main">
          <div className="main__head">
            <h2 className="main__head-title">все фильмы</h2>
          </div>
          <div className="main__body">
            <div className="row">
              {movies.map((movie) => {
                return (
                  <div className="col-4">
                    <div
                      className="movie__content"
                      style={{ backgroundImage: `url(${movie.image})` }}
                    >
                      <h3>{movie.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
