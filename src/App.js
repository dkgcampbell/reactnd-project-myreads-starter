import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
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

  closeSearch = () => {
    this.setState({ showSearchPage: false });
    this.clearBooks();
  };

  openSearch = () => {
    this.setState({ showSearchPage: true });
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
        {this.state.showSearchPage ? (
          <SearchBooks 
            onCloseSearch={this.closeSearch}
            updateSearch={this.updateSearch}
            onChange={this.searchBooks}
            onClear={this.clearBooks}
            onChangeShelf={this.moveBook}
            searchResults={this.state.searchResults}
          />
        ) : (
          <ListBooks 
            books={this.state.books}
            onOpenSearch={this.openSearch}
            onChangeShelf={this.moveBook}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
