import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowBook from './ShowBook';

class ListBookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.length ? this.props.books.map((book) => (
              <li key={book.id}>
                <ShowBook 
                  book={book}
                  onChangeShelf={this.props.onChangeShelf}/>
              </li>
            )) : null}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListBookShelf;