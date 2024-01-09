import { Model, DataTypes, Sequelize } from "sequelize";

export class Staff extends Model {
  public id?: number;
  public booking_id: number;
  public no_of_staff : number;
  public shift_description:string;
  public job:number
}

export async function initStaff(sequelize: Sequelize) {
  sequelize.define('staff',
    {
      id: {
        type: new DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true
      },
      booking_id: {
        type: new DataTypes.NUMBER,
        allowNull: false
      },
      no_of_staff: {
        type: new DataTypes.NUMBER,
        allowNull: false
      },
      shift_description: {
        type: new DataTypes.TEXT,
        allowNull: false
      },
      job:{
        type: new DataTypes.JSONB,
        allowNull: true
      }
    },
    {
      tableName: "staff_details",
      modelName: "Staff",
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
    }
  );

}

