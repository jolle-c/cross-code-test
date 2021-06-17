import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import { zonedTimeToUtc } from 'date-fns-tz';
import { Book } from './Books';
import { addBook, deleteBook, selectBook } from '../../actions';
import classes from './Books.module.scss';

type BookProps = {
	book: Book;
	addBook: any;
	deleteBook: any;
	selectBook: any;
};

const BookDetail: FC<BookProps> = (props: BookProps): ReactElement => {
	const data: Book = {
		author: 'Lindgren, Astrid',
		description:
			'Emil, the title character, is a prankster who lives on a farm in the Lönneberga village of Småland, Sweden.',
		genre: 'fiction',
		price: 13.69,
		publish_date: zonedTimeToUtc(new Date(), 'Europe/Stockholm').toISOString(),
		title: 'Emil i Lönneberga',
	};

	if (!props.book) {
		return (
			<div className={classes.bookDetail}>
				<h1>Hallå där välj en bok</h1>
				<button type="button" onClick={() => props.addBook(data)}>
					eller skapa en ny
				</button>
			</div>
		);
	}
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
			<button type="button" onClick={() => props.deleteBook({ id: props.book.id })}>
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
