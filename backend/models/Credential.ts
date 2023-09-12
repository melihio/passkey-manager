import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/db';

export class Credential extends Model {
    declare owner_id: number;
    declare website: string;
    declare username: string;
    declare password: string;
}

Credential.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    website: {
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
}, { sequelize })