import mixpanel from 'mixpanel-browser';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import RecommendationInputForm from '../components/RecommendationInputForm';
import Recommendations from '../components/Recommendations';
import styles from './GetRecommendations.module.css';

const GiveRecommendations = () => {
  const { promptID } = useParams();

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch(`https://app.arsolutions.it/api/v1/book?prompt_id=${promptID}`)
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          const transformedData = data['data'].map((recommendation) => {
            console.log(recommendation._id);
            return {
              id: recommendation._id['$oid'],
              title: recommendation.title,
              author: recommendation.author,
              isbn: recommendation.isbn,
            };
          });
          setRecommendations(transformedData);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [promptID]);

  mixpanel.track('Loaded give recommendations page');
  return (
    <div className={styles['container']}>
      <MessageBox
        requester={'Vivek'}
        responder={'Carlo'}
        genres={['Fiction', 'Comedy']}
      ></MessageBox>
      <RecommendationInputForm promptID={promptID}></RecommendationInputForm>
      <Recommendations
        promptID={promptID}
        retrievedRecommendations={recommendations}
      ></Recommendations>
    </div>
  );
};

export default GiveRecommendations;
