import React, { useState } from 'react';
import GeneratedRequest from '../components/GeneratedRequest';
import RequestGenerationForm from '../components/RequestGenerationForm';
import { BASE_URL, saveRecommendation } from '../utilities/save-recommendation';

import styles from './Recommendations.module.css';

const Recommendations = () => {
  const [requestContent, setRequestContent] = useState(<></>);
  let requestText = '';

  const generateRequest = async ({ name, userId, genres, notes }) => {
    //calculate text to be copied
    const requestQuestion = `Hi, I'm trying to pick a book to read. Could you please share some recommendations in the following genres?`;
    const requestGenres = `${genres.map((genre) => genre)}`;
    const response = await saveRecommendation(name, genres);
    const requestURL = BASE_URL.concat(response);

    //saving in text format for copying
    requestText = requestQuestion.concat(requestGenres, requestURL);

    //saving as JSX element to display updated state
    setRequestContent(
      <GeneratedRequest
        copyHandler={copyContent}
        Question={requestQuestion}
        requestURL={requestURL}
        genres={genres}
      />
    );
  };

  //copy to clipboard
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(requestText);
      console.log('Content copied to clipboard');
      console.log(requestText);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className={styles['container']}>
      <RequestGenerationForm generateRequest={generateRequest} />
      {requestContent}
    </div>
  );
};

export default Recommendations;
