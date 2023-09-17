import { DataTypes } from "sequelize";
import db_task from "../utils/db_task.js";

const Task = db_task.define('tasks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  categorieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'categorie_id'
  }
},{
  timestamps: false
});

export default Task;