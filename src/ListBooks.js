import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListBookShelf from './ListBookShelf';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onOpenSearch: PropTypes.func.isRequired,
    onChangeShelf: PropTypes.func.isRequired
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
            shelf='currentlyReading'
            books={booksCurrentlyReading}
            title='Currently Reading'
            onChangeShelf={this.props.onChangeShelf}
          />
          <ListBookShelf
            shelf='wantToRead'
            books={booksWantToRead}
            title='Want to Read'
            onChangeShelf={this.props.onChangeShelf}
          />
          <ListBookShelf
            shelf='read'
            books={booksRead}
            title='Read'
            onChangeShelf={this.props.onChangeShelf}
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