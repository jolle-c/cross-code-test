import { combineReducers } from 'redux';

export const booksReducer = (state = [], action: any) => {
	switch (action.type) {
		case 'FETCH_BOOKS':
			return action.payload;

		case 'ADD_BOOK':
			return [...state, action.payload];

		case 'DELETE_BOOK':
			return state.filter(book => action.payload.indexOf(book['id']) < 0);

		default:
			return state;
	}
};

export const selectedBookReducer = (selectedBook: string | null = null, action: any) => {
	if (action.type === 'BOOK_SELECTED') {
		return action.payload;
	}
	return selectedBook;
};

export default combineReducers({
	books: booksReducer,
	selectedBook: selectedBookReducer,
});
