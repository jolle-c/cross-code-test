import React from 'react';
import BookDetail from './Books/BookDetail';
import BookList from './Books/BookList';
import classes from './App.module.scss';
import { ObfuscateEmail } from 'utils';

const App = () => {
	return (
		<div className={classes.content}>
			<header>
				<img src={process.env.PUBLIC_URL + '/crosstechlogo.png'} alt="Cross Technology Solutions" />
				<h2>Cross Code test</h2>
			</header>

			<section>
				<nav className={classes.menu}>
					<BookList />
				</nav>

				<article>
					<BookDetail />
				</article>
			</section>

			<footer>
				<p>
					Kodtest för Cross Technology Solutions, kodad av <ObfuscateEmail emObf="am9sbGVAY2FybGVzdGFtLmNvbQ==" emText="Jolle Carlestam" /> juni 2021.<br />
					Koden kan inspekteras på{' '}
					<a href="https://github.com/jolle-c/cross-code-test" rel="noopener noreferrer" target="_blank">
						https://github.com/jolle-c/cross-code-test
					</a>
					<br />
					<small>Don't be cross. Be Cross!</small>
				</p>
			</footer>
		</div>
	);
};

export default App;
