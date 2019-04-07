import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form - {match.params.id}</h1>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => history.replace("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
