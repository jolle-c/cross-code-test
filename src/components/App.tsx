import React from 'react';
import BookDetail from './Books/BookDetail';
import BookList from './Books/BookList';
import classes from './App.module.scss';

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
				<p>Kodtest för Cross Technology Solutions, kodad av Jolle Carlestam juni 2021. Koden kan inspekteras på <a href="https://github.com/jolle-c/cross-code-test" rel="noopener noreferrer" target="_blank">https://github.com/jolle-c/cross-code-test</a></p>
			</footer>

		</div>
	);
};

export default App;
