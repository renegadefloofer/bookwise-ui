import styles from './RecommendationInputForm.module.css';

const RecommendationInputForm = ({ promptID }) => {
  return (
    <div className={styles['form-container']}>
      <h3 className={styles['heading']}>Recommend a Book</h3>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text"></input>
        <label htmlFor="author">Author</label>
        <input type="text"></input>
      </form>
    </div>
  );
};

export default RecommendationInputForm;
