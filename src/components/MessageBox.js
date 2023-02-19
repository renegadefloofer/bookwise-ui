import styles from './MessageBox.module.css';

const MessageBox = ({ requestor, responder, genres }) => {
  return (
    <div className={styles['message-container']}>
      Hi {responder}, your friend {requestor} has asked for book recommendations
      in the genres {genres}
    </div>
  );
};

export default MessageBox;
