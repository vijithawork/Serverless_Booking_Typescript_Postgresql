import { Model, DataTypes, Sequelize } from "sequelize";
// import { db } from "../db";
// import { AUTHOR_STUB } from "../stubs/author";

export class Booking extends Model {
  public id?: number;
  public name: string;
  public job_address : string;
  public venue_size:number;
  public is_workfromhome:boolean;
  public grooming_policy:string;
  public entry_description:string;
}

export async function initBooking(sequelize: Sequelize) {
  sequelize.define('booking',
    {
      id: {
        type: new DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: new DataTypes.STRING(256),
        allowNull: false
      },
      job_address: {
        type: new DataTypes.TEXT,
        allowNull: false
      },
      venue_size: {
        type: new DataTypes.NUMBER,
        allowNull: false
      },
      is_workfromhome:{
        type: new DataTypes.BOOLEAN,
        allowNull: true
      },
      grooming_policy:{
        type: new DataTypes.TEXT,
        allowNull: true
      },
      entry_description:{
        type: new DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      tableName: "booking_details",
      modelName: "Booking",
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
    }
  );

}

// export async function seedAuthor(DB: db){
    
//   const authors = await DB.author.findAndCountAll() 
  
//   if(!authors.count){
//     const data: Array<Pick<Author, "id" | "name" | "address">> = AUTHOR_STUB;
//     return await DB.author.bulkCreate(data, { returning: true });
//   }

// }