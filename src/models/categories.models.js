import { DataTypes } from "sequelize";
import db_task from "../utils/db_task.js";

const Categorie = db_task.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: false
});

export default Categorie;