import _ from 'lodash';
import './styles.css';
import printMe from './print.js';

function component() {
	let element = document.createElement('div');
	var btn = document.createElement('button');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!');
		printMe();
	})
}