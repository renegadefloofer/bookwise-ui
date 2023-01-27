import React, { useState } from 'react';
import GeneratedRequest from '../components/GeneratedRequest';
import RequestGenerationForm from '../components/RequestGenerationForm';

import styles from './Recommendations.module.css';

const Recommendations = () => {
  const [requestContent, setRequestContent] = useState(<></>);

  const generateRequest = (genres) => {
    setRequestContent(<GeneratedRequest genres={genres} />);
  };

  return (
    <div className={styles['container']}>
      <RequestGenerationForm generateRequest={generateRequest} />
      {requestContent}
    </div>
  );
};

export default Recommendations;
