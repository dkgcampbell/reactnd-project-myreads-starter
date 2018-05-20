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
  };

  openSearch = () => {
    this.setState({ showSearchPage: true });
  };

  // search = (searchTerm) => {
  //   const searchResults = BooksAPI.search(searchTerm);
  //   this.setState({
  //     searchResults: searchResults
  //   });
  // };

  // updateSearch = (newSearchTerm) => {
  //   this.setState({
  //     searchTerm: newSearchTerm
  //   })
  // };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks 
            onCloseSearch={this.closeSearch}
            // updateSearch={this.updateSearch}
            // onChange={this.search}
            // searchResults={this.state.searchResults}
          />
        ) : (
          <ListBooks 
            books={this.state.books}
            onOpenSearch={this.openSearch}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
