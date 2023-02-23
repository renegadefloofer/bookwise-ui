import styles from './Recommendations.module.css';

const Recommendations = ({ retrievedRecommendations }) => {
  return (
    <div className={styles['recommendations-container']}>
      <h3 className={styles['heading']}>Other Recommendations</h3>
      <ul className={styles['list']}>
        {retrievedRecommendations.map((recommendation) => {
          return (
            <li className={styles['list-item']} key={recommendation.id}>
              <span>{recommendation.title} </span>
              by
              <span> {recommendation.author}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recommendations;
