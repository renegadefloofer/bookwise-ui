import { useEffect, useState } from 'react';
import BookSuggestion from './BookSuggestion';
import styles from './BookSuggestions.module.css';

const BookSuggestions = ({ title, author, sendSuggestion }) => {
  const [bookSuggestions, setBookSuggestions] = useState([]);

  useEffect(() => {
    const query = `${title}+${author}`;
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&printType=books`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const suggestedBooks = data['items'].map((item) => {
          return {
            title: item['volumeInfo']['title'],
            author: item['volumeInfo']['authors'],
            isbn: item['volumeInfo']['industryIdentifiers'][0]['identifier'],
          };
        });
        const filteredSuggestions = suggestedBooks.filter(
          (book) => book.title && book.author && book.isbn
        );
        setBookSuggestions(filteredSuggestions);
      });
  }, [title, author]);

  return (
    <ul className={styles['list']}>
      {bookSuggestions.map((book) => {
        return (
          <li className={styles['list-item']} key={book.isbn}>
            <BookSuggestion
              title={book.title}
              author={book.author[0]}
              isbn={book.isbn}
              sendSuggestion={sendSuggestion}
            ></BookSuggestion>
          </li>
        );
      })}
    </ul>
  );
};

export default BookSuggestions;
