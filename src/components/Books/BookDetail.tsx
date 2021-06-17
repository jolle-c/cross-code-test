import React, { FC, ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import { Book } from './Books';
import { addBook, deleteBook, selectBook } from '../../actions';
import BookForm from './BookForm';
import classes from './Books.module.scss';

type BookProps = {
	book: Book;
	addBook: any;
	deleteBook: any;
	selectBook: any;
};
function ForceUpdate() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [value, setValue] = useState(0);
	return () => setValue(value => value + 1);
}

let showForm: boolean = false;

const BookDetail: FC<BookProps> = (props: BookProps): ReactElement => {
	const forceUpdate = ForceUpdate();

	if (!props.book) {
		return (
			<div className={classes.bookDetail}>
				{(showForm && <BookForm />) || (
					<div className={classes.bookDetail}>
						<h1>Välj en bok</h1>
						<button
							type="button"
							onClick={() => {
								showForm = true;
								forceUpdate();
							}}
						>
							eller skapa en ny
						</button>
					</div>
				)}
			</div>
		);
	}
	showForm = false;
	return (
		<div className={classes.bookDetail}>
			<h1>{props.book.title}</h1>
			<h2>{props.book.author}</h2>
			<p>{props.book.description}</p>
			<dl>
				<dt>Publicerad</dt>
				<dd>
					<em>{format(new Date(props.book.publish_date), 'd MMM yyyy')}</em>
				</dd>
				<dt>Genre</dt>
				<dd>
					<strong className={classes.genre}>{props.book.genre}</strong>
				</dd>
				<dt>Kostnad</dt>
				<dd>{props.book.price}</dd>
			</dl>
			<button type="button" onClick={() => props.selectBook(null)}>
				Stäng
			</button>
			<button type="button" onClick={() => {showForm = false; props.deleteBook({ id: props.book.id })}}>
				Radera
			</button>
		</div>
	);
};

const mapStateToprops = (state: any) => {
	return { book: state.selectedBook };
};
export default connect(mapStateToprops, {
	addBook,
	deleteBook,
	selectBook,
})(BookDetail);
