import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../app/redux";
import { getMovies, setSearchMovie, useMovie } from "../../slices/movie";
import { Link } from "react-router-dom";
import { Movie } from "../../type";

const Home = () => {
  const [searchResult, setSearchResult] = useState<Movie[]>([]);
  const [state, setState] = useState("");
  const dispatch = useAppDispatch();
  const { list: movies, search } = useMovie();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState(value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setSearchMovie(state));
  };
  useEffect(() => {
    setSearchResult(search);
  }, [search]);
  const clearSearch = () => {
    setSearchResult([]);
  };
  return (
    <section className="home" onClick={clearSearch}>
      <div className="container">
        <div className="main">
          <div className="main__head">
            <h2 className="main__head-title">Главная</h2>
          </div>
          <div className="main__body">
            <div className="main__body-title">
              <p>Найдите нужный фильм или сериал по названию</p>
              <Link to={"/categories"}>категории</Link>
            </div>
            <form onSubmit={onSubmit} className="main__body-form">
              <label htmlFor="">
                <input
                  type="text"
                  name="key"
                  required
                  onChange={onChange}
                  placeholder={
                    searchResult.length == 0
                      ? "Название фильма или сериала..."
                      : "результаты:"
                  }
                  className={
                    searchResult.length == 0
                      ? "main__form-input"
                      : "main__form-input radius"
                  }
                />
              </label>
              <button className="main__form-btn" type="submit">
                Искать
              </button>
              {searchResult.length !== 0 ? (
                <div className="home__result">
                  {searchResult.map((search, idx) => {
                    return (
                      <div
                        className="home__result-item"
                        key={idx}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="home__result-idx">{idx + 1}</p>
                        <h3 className="home__result-title">
                          <Link to={`/movie/${search.uu_id}`}>
                            {search.title}
                          </Link>
                        </h3>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
    // <div>
    //   {movies.map((movie) => {
    //     return (
    //       <div key={movie.id}>
    //         <h1 key={movie.id}>{movie.title}</h1>
    //         <video autoPlay controls poster={movie.image}>
    //           <source src={movie.video} />
    //         </video>
    //         <br />
    //         <Link to={`/movie/${movie.uu_id}`}>{movie.title}</Link>
    //       </div>
    //     );
    //   })}
    //   <form onSubmit={onSubmit}>
    //     <input type="text" name="title" onChange={onChange} />
    //     <button type="submit">submit</button>
    //   </form>
    //   {searchResult.map((search) => {
    //     return (
    //       <Link to={`/movie/${search.uu_id}`} key={search.id}>
    //         {search.title}
    //       </Link>
    //     );
    //   })}
    // </div>
  );
};

export default Home;
