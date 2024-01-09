import * as pg from 'pg';
import { Sequelize } from 'sequelize';
import { dbInterface } from '../interface/dbInterface';
import { initBooking } from '../db/models/booking';
import * as dotenv from 'dotenv';
dotenv.config();


export class db implements dbInterface {

    sequelize: Sequelize;
    book: any;
    author: any;
    publisher: any;

    constructor() {

        this.sequelize = new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: "postgres",
            dialectModule: pg,
            logging: false,
        });

        initBooking(this.sequelize);
        this.book = this.sequelize.models.booking;
    }

  

    async seed() {
        //await seedAuthor(this);
    }

    async authenticate() {
        try {

        

            //Sync DB
            await this.sequelize.sync({ force: false })
                .then(() => console.log('DB Connection established successfully.'))
                .catch(err => console.error(`DB Sequelize Connection Failed: ${err}`));

        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }


}

export const getDBInstance = async () => {
    const DB = new db();
    await DB.authenticate();
    await DB.seed();
    return DB;
}
