import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();
  return (
    <div>
      <p>Ini halaman detail movies, id: {movieId}</p>
    </div>
  );
};

export default MovieDetail;
