import React from 'react';

const GeneratedRequest = ({ genres }) => {
  const genresList = (
    <ul>
      {genres.map((genre) => {
        return <li key={genre}>{genre}</li>;
      })}
    </ul>
  );
  return (
    <div>
      <div>Please share recommendations in the following genres</div>
      {genresList}
    </div>
  );
};

export default GeneratedRequest;
