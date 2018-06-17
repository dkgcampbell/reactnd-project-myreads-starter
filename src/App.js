import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
  }

  componentWillMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  };

  searchBooks = async(searchTerm) => {
    const searchResults = await BooksAPI.search(searchTerm);
    searchResults && searchResults.map((book) => {
      var existingBook = this.state.books.find((x) => (x.id === book.id));
      book.shelf = existingBook ? existingBook.shelf : 'none';
      return book
    })
    this.setState({
      searchResults: searchResults
    });
  };

  clearBooks = () => {
    this.setState({
      searchResults: []
    });
  };

  updateSearch = (newSearchTerm) => {
    this.setState({
      searchTerm: newSearchTerm
    })
  };

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  };

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks 
            books={this.state.books}
            onChangeShelf={this.moveBook}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks 
            updateSearch={this.updateSearch}
            onChange={this.searchBooks}
            onClear={this.clearBooks}
            onChangeShelf={this.moveBook}
            searchResults={this.state.searchResults}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
