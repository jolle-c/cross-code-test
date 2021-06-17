import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Book } from './Books';
import { selectBook, fetchBooks } from '../../actions';
import { BOOKICON } from 'assets/images'
import classes from './Books.module.scss';

type BookProps = {
	books: Book[];
	selectBook?: any;
	fetchBooks?: any;
};

class BookList extends Component<BookProps> {
	componentDidMount() {
		this.props.fetchBooks();
	}

	renderList() {
		return (
			<ul className={classes.bookList}>
				{this.props.books.map((book: Book) => {
					return (
						<li key={book.id} className="list-group-item pointer" onClick={() => this.props.selectBook(book)}>
							<img src={BOOKICON} alt="" />
							<span>
								{book.title}
							</span>
						</li>
					);
				})}
			</ul>
		);
	}
	render() {
		return (
			<div>
				<h1>Boklista</h1>
				<div>{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToprops = (state: any) => {
	return { books: state.books };
};

export default connect(mapStateToprops, {
	selectBook,
	fetchBooks,
})(BookList);
