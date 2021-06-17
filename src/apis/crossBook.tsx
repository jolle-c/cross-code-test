import axios from 'axios';

export default axios.create({
	baseURL: ' https://hu7yj4035d.execute-api.eu-west-1.amazonaws.com/dev',
	headers: {
		'x-api-key': 'Ik73kNY4yS7M2Io6QEsHJ2rSViKwkTee9j6HQvRY',
		'x-authorization': '70479205-2773-4cb2-9413-0c59b9992e1a',
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});
