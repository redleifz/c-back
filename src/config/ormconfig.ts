import { Patient } from 'src/patients/entities/patient.model';
import { User } from 'src/users/entities/user.model';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import * as dotenv from 'dotenv';

dotenv.config();

const config: MysqlConnectionOptions = {
    type: 'mysql',
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [Patient , User],
    synchronize: true,
    // Add other options as needed, such as timezone, charset, etc.
};

export default config;
