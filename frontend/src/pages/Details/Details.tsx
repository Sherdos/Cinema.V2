import { UUID } from "crypto";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/redux";
import { getMovieItem, useMovie } from "../../slices/movie";

const Details = () => {
  const dispatch = useAppDispatch();
  const { uu_id: uu_id } = useParams() as { uu_id: UUID };
  const { item: movie } = useMovie();

  useEffect(() => {
    dispatch(getMovieItem(uu_id));
  }, [uu_id]);
  return (
    <section>
      <div className="container">
        <div className="main">
          <div className="main__head">
            <h2 className="main__head-title">{movie?.title}</h2>
          </div>
          <div className="main__body">
            <div className="main__body-img">
              <img src={movie?.image} alt="" />
            </div>
            <video
              className="main__body-player"
              src={movie?.video}
              controls
            ></video>
          </div>
        </div>
      </div>
    </section>
    // <div>
    //   <h1>{movie?.title}</h1>
    // </div>
  );
};

export default Details;
