

export default function(sequelize, DataTypes) {
	const User = sequelize.define('user', {
		name: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate:{
				isEmail: true
			}
		}
	})
	return User;
}