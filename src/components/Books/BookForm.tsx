import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { zonedTimeToUtc } from 'date-fns-tz';
import { addBook } from '../../actions';
import TextInput from 'components/FormParts/TextInput';
import NumberInput from 'components/FormParts/NumberInput';
import TextAreaInput from 'components/FormParts/TextAreaInput';
import { Book } from './Books';

type BookProps = {
	addBook?: any;
};

class BookForm extends React.Component<BookProps> {
	onSubmit = (values: Book, action: any) => {
		values.publish_date = zonedTimeToUtc(new Date(), 'Europe/Stockholm').toISOString();
		values.price = parseFloat(values.price.toString());
		this.props.addBook(values).then(() => {
			alert(`${values.title} lades till i listan!`);
		});
	};

	render() {
		return (
			<div>
				<h1>Lägg till en ny bok</h1>
				<Form
					onSubmit={this.onSubmit}
					render={({ handleSubmit, form, submitting, pristine, values }) => (
						<form onSubmit={handleSubmit}>
							<div>
								<label>Titel</label>
								<Field<string> name="title" component={TextInput} placeholder="Titel" />
							</div>
							<div>
								<label>Författare</label>
								<Field<string> name="author" component={TextInput} placeholder="Efternamn, Förnamn" />
							</div>
							<div>
								<label>Genre</label>
								<Field<string> name="genre" component={TextInput} placeholder="Genre" />
							</div>
							<div>
								<label>Pris</label>
								<Field<number> name="price" component={NumberInput} placeholder="Kostnad i $dollar" />
							</div>

							<div>
								<label>Beskrivning</label>
								<Field name="description" component={TextAreaInput} placeholder="Beskrivning" />
							</div>
							<div className="buttons">
								<button type="submit" disabled={submitting || pristine}>
									Lägg till
								</button>
							</div>
						</form>
					)}
				/>
			</div>
		);
	}
}

const mapStateToprops = (state: any) => {
	return { addBook: state.addBook };
};
export default connect(mapStateToprops, {
	addBook,
})(BookForm);
