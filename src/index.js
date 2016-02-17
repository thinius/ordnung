import app from './app';
import { syncDB } from './model-helpers';

function listen() {
	app.listen(9000, () => {
		console.log('Listening.')
	});
}

syncDB()
	.then(() => listen());