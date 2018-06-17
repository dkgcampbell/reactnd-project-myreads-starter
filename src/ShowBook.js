import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowBook extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  handleChange = (e) => {
    this.props.onChangeShelf(this.props.book, e.target.value);
  }

  render() {
    const style = {
      width: 128,
      height: 193
    }

    if (this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) {
      style.backgroundImage = `url("${this.props.book.imageLinks.thumbnail}")`
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={style}></div>
          <div className="book-shelf-changer">
            <select onChange={this.handleChange} value={this.props.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors ? this.props.book.authors.map((author) => (
          <p key={author}>
            {author}
          </p>
        )): null}</div>
      </div>
    )
  }
}

export default ShowBook;