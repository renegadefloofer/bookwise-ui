import styles from './BookSuggestion.module.css';

const BookSuggestion = ({ title, author, isbn, sendSuggestion }) => {
  const selectHandler = () => {
    console.log('click');
    sendSuggestion(title, author, isbn);
  };
  return (
    <div onClick={selectHandler}>
      <div className={styles['title']}>{title}</div>
      <div className={styles['author']}>{author}</div>
    </div>
  );
};

export default BookSuggestion;
