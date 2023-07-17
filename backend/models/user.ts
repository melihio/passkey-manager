import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/db';

class User extends Model {
    declare firstName: string;
    declare lastName: string;
    declare email: string;
    declare username: string;
    declare password: string;
    declare createdAt: string;
    declare updatedAt: string;
    declare deletedAt: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
}, { sequelize })