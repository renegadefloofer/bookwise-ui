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
      <div className={styles['question']}>{Question}</div>
      {genresList}
      <div className={styles['text']}>
        Please go to {requestURL} to provide recommendations!
      </div>
      <button className={styles['copy-btn']} onClick={copyHandler}>
        Copy
      </button>
    </div>
  );
};

export default GeneratedRequest;
