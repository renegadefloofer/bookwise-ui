import mixpanel from 'mixpanel-browser';
import MessageBox from '../components/MessageBox';
import RecommendationInputForm from '../components/RecommendationInputForm';
import Recommendations from '../components/Recommendations';
import styles from './GetRecommendations.module.css';

const savedRecommendations = [
  { title: 'Harry Potter', author: 'J K Rowling' },
  { title: 'Oliver Twist', author: 'Charles Dickens' },
];

const GiveRecommendations = () => {
  mixpanel.track('Loaded give recommendations page');
  return (
    <div className={styles['container']}>
      <MessageBox
        requester={'Vivek'}
        responder={'Carlo'}
        genres={['Fiction', 'Comedy']}
      ></MessageBox>
      <RecommendationInputForm></RecommendationInputForm>
      <Recommendations
        retrievedRecommendations={savedRecommendations}
      ></Recommendations>
    </div>
  );
};

export default GiveRecommendations;
