import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListBookShelf from './ListBookShelf';

class SearchBooks extends Component {
    static propTypes = {
        onCloseSearch: PropTypes.func.isRequired,
        updateSearch: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onClear: PropTypes.func.isRequired,
        searchResults: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    };

    handleChange = (e) => {
        this.props.updateSearch(e.target.value);
        if (e.target.value) {
            this.props.onChange(e.target.value)
        } else {
            this.props.onClear()
        };
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={this.props.onCloseSearch}>Close</a>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
        
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" onChange={this.handleChange} />        
                    </div>
                </div>
                <div className="search-books-results">
                    <ListBookShelf
                        books={this.props.searchResults}
                        title='Search Results'
                        onChangeShelf={this.props.onChangeShelf}
                    />
                    {/* <ol className="books-grid"></ol> */}
                </div>
            </div>
        )
    }
}

export default SearchBooks;