import { Patient } from 'src/patients/entities/patient.model';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import * as dotenv from 'dotenv';
dotenv.config();

const config: MysqlConnectionOptions = {
    type: 'mysql', // Changed from 'postgres' to 'mysql'
    database: process.env.database ,
    host: process.env.host,
    port: parseInt(process.env.port) || 3306, // Default MySQL port
    username: process.env.username, // Your MySQL username
    password: process.env.password, // Your MySQL password
    entities: [Patient],
    synchronize: true,
    // Add other options as needed, such as timezone, charset, etc.
};

export default config;
