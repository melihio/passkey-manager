import { Sequelize } from 'sequelize';
import { log } from '../utils/logger';
import dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USERNAME!, process.env.DB_PASS, {
    logging: false,
    host: process.env.DB_HOST,
    dialect: "mysql"
});

try {
    sequelize.authenticate();
    log.info('Connection has been established successfully.');
} catch (error) {
    log.error('Unable to connect to the database:', error);
}
