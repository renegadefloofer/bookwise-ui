import { useEffect, useState } from 'react';

const BookSuggestions = ({ title, author }) => {
  const [bookSuggestions, setBookSuggestions] = useState([]);

  useEffect(() => {
    const query = `intitle:${title}+inauthor:${author}`;
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
        console.log(suggestedBooks);
        setBookSuggestions(suggestedBooks);
      });
  }, [title, author]);

  return (
    <ul>
      {bookSuggestions.map((book) => (
        <li>
          {book.title} by {book.author}
        </li>
      ))}
    </ul>
  );
};

export default BookSuggestions;
