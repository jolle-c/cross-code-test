import crossBook from 'apis/crossBook';
import { Book } from 'components/Books/Books';
import { sort } from '../utils';

interface OneId {
	id: string;
	ids?: never;
}

interface Multipleids {
	id?: never;
	ids: string[];
}

type IdOrIds = OneId | Multipleids;

export const selectBook = (bookId: string) => {
	return {
		type: 'BOOK_SELECTED',
		payload: bookId,
	};
};

export const fetchBooks = () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
	const response = await crossBook.get('/books/');
	const sortedBooks = sort(response.data, 'title');
	dispatch({ type: 'FETCH_BOOKS', payload: sortedBooks });
};

export const addBook = (data: Book) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
	const response = await crossBook.post('/books/', data);
	dispatch({ type: 'ADD_BOOK', payload: response.data });
};

export const deleteBook =
	({ id, ids }: IdOrIds) =>
	async (dispatch: (arg0: { type: string; payload: any }) => void) => {
		let _id;
		if (ids) {
			_id = ids.join(',');
		} else {
			_id = id;
		}
		const response = await crossBook.delete(`/books/${_id}`);
		console.log('delete response', response);
		dispatch({ type: 'DELETE_BOOK', payload: _id });
	};
