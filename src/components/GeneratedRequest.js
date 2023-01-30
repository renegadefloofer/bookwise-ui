import React from 'react';
import styles from './GeneratedRequest.module.css';

const GeneratedRequest = ({ genres, Question, requestURL, copyHandler }) => {
  const genresList = (
    <ul className={styles['list']}>
      {genres.map((genre) => {
        return <li key={genre}>{`- ${genre}`}</li>;
      })}
    </ul>
  );
  return (
    <div className={styles['request']}>
      <button onClick={copyHandler}>Copy</button>
      <div className={styles['question']}>{Question}</div>
      {genresList}
      <div>Please go to {requestURL} to provide recommendations!</div>
    </div>
  );
};

export default GeneratedRequest;
