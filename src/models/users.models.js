import { DataTypes } from "sequelize";
import db_task from "../utils/db_task.js";

const User = db_task.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
},{
  timestamps: false
});

export default User;