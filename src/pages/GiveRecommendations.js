import { useState, useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import { useParams } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import RecommendationInputForm from '../components/RecommendationInputForm';
import Recommendations from '../components/Recommendations';
import styles from './GiveRecommendations.module.css';

const GiveRecommendations = () => {
  const { promptID } = useParams();
  console.log(promptID);
  const [promptDetails, setPromptDetails] = useState({ isAvailable: false });
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch(`https://app.arsolutions.it/api/v1/prompt?prompt_id=${promptID}`, {
      method: 'GET',
      redirect: 'follow',
    })
      .then((res) => {
        res.json().then((data) => {
          setPromptDetails({
            prompter: data['data']['prompter'],
            genres: data['data']['genres'],
            isAvailable: true,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [promptID]);

  useEffect(() => {
    fetch(`https://app.arsolutions.it/api/v1/book?prompt_id=${promptID}`)
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          const transformedData = data['data'].map((recommendation) => {
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

  const bookAddHandler = (title, author, isbn, id) => {
    setRecommendations((prevData) => {
      return [
        ...prevData,
        { id: id, title: title, author: author, isbn: isbn },
      ];
    });
  };
  mixpanel.track('Loaded give recommendations page');
  return (
    <div className={styles['container']}>
      {promptDetails['isAvailable'] && (
        <MessageBox
          prompter={promptDetails['prompter']}
          genres={promptDetails['genres']}
        ></MessageBox>
      )}
      <RecommendationInputForm
        promptID={promptID}
        bookAdded={bookAddHandler}
      ></RecommendationInputForm>

      <Recommendations
        promptID={promptID}
        retrievedRecommendations={recommendations}
      ></Recommendations>
    </div>
  );
};

export default GiveRecommendations;
