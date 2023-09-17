import User from "../../models/users.models.js";
import Categorie from "../../models/categories.models.js";
import Task from "../../models/tasks.models.js";

// MIDDLEWARE PARA CREAR USUARIOS (POST)
const createUsers = async (req, res) => {
  try{
    const {body} = req;
    const user = await User.create(body);
    res.status(201).json(user);
  }catch(error) {
    res.status(400).json(error);
  }
};


// MIDDLEWARE PARA QUE UN USUARIO PUEDE CREAR TAREAS (POST)
const createTaskByUser = async (req, res) => {
  try{
    const {userId,...task} = req.body;
    const user = await User.findOne({
      where: {id: userId}
    });

    const tasks = await Task.create(task);

    await tasks.addUser(user);

    res.status(201).json(user);
  }catch(error) {
    res.status(400).json(error)
  }
};


export {createUsers, createTaskByUser};