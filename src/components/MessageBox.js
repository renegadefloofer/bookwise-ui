import styles from './MessageBox.module.css';

const MessageBox = ({ prompter, genres }) => {
  return (
    <div className={styles['message-container']}>
      <p>
        Hello there! your friend {prompter} has asked you for some book
        recommendations.
      </p>
      <p>
        Their favorite genres are{' '}
        {genres
          .map((genre) => {
            return genre;
          })
          .join(', ')}
      </p>
    </div>
  );
};

export default MessageBox;
