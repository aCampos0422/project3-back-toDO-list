import Task from "../../models/tasks.models.js";
import User from "../../models/users.models.js";
import Categorie from "../../models/categories.models.js";



const getTaskByUser = async (req, res) => {
  try{
    const {id} = req.params;
    const user = await User.findByPk(id, {
      attributes: ['username'],
      include: [
        {
          model: Task,
          attributes: ['id', 'title', 'description', 'completed'],
          include: {model: Categorie, attributes: ['name', 'description']}
        }
      ]
    });
    res.status(201).json(user);
  }catch(error) {
    res.status(401).json(error);
  }
};


const deleteTaskById = async (req, res) => {
  try{
    const {id} = req.params;
    await Task.destroy({
      where: {id}
    });
    res.status(204).end();
  }catch(error) {
    res.status(400).json(error);
  }
};

const updateTaskById = async (req, res) => {
  try{
    const {id} = req.params;
    const {body} = req;
    const upTask = await Task.update(body, {
      where: {id}
    });
    res.json(upTask)
  }catch(error) {
    console.log(error)
    res.status(400).json(error);
  }
};


export {deleteTaskById, getTaskByUser, updateTaskById};