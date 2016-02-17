import sequelize from 'sequelize';
import db from '../models';

export function list(req, res, next) {
	db.User.findAll()
		.then(res.json.bind(res))
		.catch(next)
}

export function create(req, res, next) {
	db.User.create(req.body)
		.then(user => res.send(user))
		.catch(next);
}

export function retrieve(req, res, next) {
	db.User.findById(req.params.id)
		.then(user => res.send(user))
		.catch(next);
}

export function destroy(req, res, next) {
	db.User.findById(req.params.id)
		.then(user => user.destroy())
		.then(() => res.sendStatus(200))
		.catch(next);
}