import { useState } from 'react';
import styles from './RecommendationInputForm.module.css';
import BookSuggestions from './bookSuggestions';

//Google Books API
const API_KEY = 'AIzaSyBVbgl1OrSUZy8SXDUKAtwYZDmFASE7axM';

const RecommendationInputForm = ({ promptID, bookAdded }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [inputsValid, setInputsValid] = useState({
    state: true,
    message: null,
  });
  const [showSuggestions, setShowSuggestions] = useState(false);
  //const [searchParams, setSearchParams] = useState([]);

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    //search for books here
    setTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    console.log(event.target.value);
    //search for books here
    setAuthor(event.target.value);
  };

  // const bookSearchHandler = () => {
  //   console.log('sbumit');
  // };

  const showSuggestionsHandler = () => {
    setShowSuggestions(true);
  };

  const validateInputs = (title, author) => {
    if (title.trim() === '') {
      setInputsValid({ state: false, message: 'Title cannot be empty' });
      return false;
    }
    if (author.trim() === '') {
      setInputsValid({ state: false, message: 'Author cannot be empty' });
      return false;
    }
    setInputsValid({ state: true, message: '' });
    return true;
  };

  const addBookHandler = () => {
    console.log('add book');
    const inputsValidated = validateInputs(title, author);
    if (!inputsValidated) {
      console.log('input state invalid');
      return;
    }
    console.log('still in add book handler');
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const raw = JSON.stringify({
      prompt_id: promptID,
      title: title,
      author: author,
      isbn: 123123,
      recommender: 'dev-user',
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`https://app.arsolutions.it/api/v1/book`, requestOptions).then(
      (res) => {
        console.log(res);
        res.json().then((data) => {
          if (data['success']) {
            setTitle('');
            setAuthor('');
            bookAdded(
              title,
              author,
              data['data']['isbn'],
              data['data']['_id']['$oid']
            );
          } else {
            console.log('Error');
          }
        });
      }
    );
  };

  return (
    <div className={styles['form-container']}>
      <h3 className={styles['heading']}>Recommend a Book</h3>
      <form>
        <div className={styles['form-control']}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            onBlur={showSuggestionsHandler}
          ></input>
        </div>
        <div className={styles['form-control']}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            onChange={authorChangeHandler}
            onBlur={showSuggestionsHandler}
          ></input>
        </div>
        <div className={styles['form-action']}>
          {!inputsValid['state'] && (
            <p className={styles['error']}>{inputsValid['message']}</p>
          )}
          {showSuggestions && (
            <BookSuggestions title={title} author={author}></BookSuggestions>
          )}
          <button
            className={styles['btn']}
            type="button"
            onClick={addBookHandler}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecommendationInputForm;
