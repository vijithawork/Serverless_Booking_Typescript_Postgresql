import { Sequelize } from "sequelize";
import { Booking } from "../db/models/booking";


export interface dbInterface {
  // Sequelize ORM object
  sequelize: Sequelize;
  // Use this function to establish connection with DB
  authenticate: Function;
  // Use this function to prefill data into tables when empty
  seed: Function;
  // Models for this project
  book: Booking;


}