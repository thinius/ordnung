import sequelize from 'sequelize';
import db from '../models';

export function list(req, res, next) {
	db.User.findAll()
		.then(res.json.bind(res))
		.catch(next)
}

export function create(req, res, next) {
	console.log(req.body);
	db.User.create(req.body)
	.then(user => {
		res.send(user);
	});
}