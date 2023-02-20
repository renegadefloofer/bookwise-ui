import { useState, useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import MessageBox from '../components/MessageBox';
import RecommendationInputForm from '../components/RecommendationInputForm';
import Recommendations from '../components/Recommendations';
import styles from './GetRecommendations.module.css';
import { getRecommendations } from '../utilities/get-recommendations';

const savedRecommendations = [
  { title: 'Harry Potter', author: 'J K Rowling' },
  { title: 'Oliver Twist', author: 'Charles Dickens' },
];

const GiveRecommendations = () => {
  const promptid = '63da4e57ccf150e6bdc11649';
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchedRecommendations = async (promptid) => {
      const response = await getRecommendations(promptid);
      console.log(response['data']);
      return response['data'];
    };
    let booksArray = [];
    fetchedRecommendations(promptid)
      .then((data) => {
        booksArray = data.map((book) => {
          return { title: book['title'], author: book['author'] };
        });
        console.log(booksArray);
        setBooks(booksArray);
      })
      .catch((err) => console.log(err));
  }, []);

  mixpanel.track('Loaded give recommendations page');
  return (
    <div className={styles['container']}>
      <MessageBox
        requester={'Vivek'}
        responder={'Carlo'}
        genres={['Fiction', 'Comedy']}
      ></MessageBox>
      <RecommendationInputForm></RecommendationInputForm>
      <Recommendations retrievedRecommendations={books}></Recommendations>
    </div>
  );
};

export default GiveRecommendations;
