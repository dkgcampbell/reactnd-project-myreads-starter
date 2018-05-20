import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListBookShelf from './ListBookShelf';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onOpenSearch: PropTypes.func.isRequired
  };

  render() {
    const booksCurrentlyReading = this.props.books.filter(book => book.shelf === 'currentlyReading');
    const booksWantToRead = this.props.books.filter(book => book.shelf === 'wantToRead');
    const booksRead = this.props.books.filter(book => book.shelf === 'read');

    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <ListBookShelf
            books={booksCurrentlyReading}
            title='Currently Reading'
          />
          <ListBookShelf
            books={booksWantToRead}
            title='Want to Read'
          />
          <ListBookShelf
            books={booksRead}
            title='Read'
          />
        </div>
      </div>
      <div className="open-search">
        <a onClick={this.props.onOpenSearch}>Add a book</a>
      </div>
    </div>
    )
  }
}

export default ListBooks;