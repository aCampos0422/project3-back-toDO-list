// importando modelos 
import User from "./users.models.js";
import Task from "./tasks.models.js";
import Categorie from "./categories.models.js";

const initModels = () => {
  /* RELACIONANDO USER Y TASK 
  un user tiene muchas tasks y una task tienen muchos users*/

  User.belongsToMany(Task, {through: 'userTasks'});
  Task.belongsToMany(User, {through: 'userTasks'});

  // RELACIONANDO TASK CON CATEGORIE
  
  // Una categoria puede tener muchas tareas
  Categorie.hasMany(Task, {foreignKey: 'categorieId'});

  // Una tarea puede tener solo una categoria
  Task.belongsTo(Categorie, {foreignKey: 'categorieId'});


};

export default initModels;