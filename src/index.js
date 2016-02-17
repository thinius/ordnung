import app from './app';

function listen() {
	app.listen(9000, () => {
		console.log('Listening.')
	});
}

listen();