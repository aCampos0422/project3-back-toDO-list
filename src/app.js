import express from "express";
import 'dotenv/config';
import cors from "cors";
import db_task from "./utils/db_task.js";
import initModels from "./models/initModels.js";
import userRoute from './components/users/users.routers.js';
import categorieRoute from './components/categories/categories.routers.js';
import taskRoute from './components/tasks/tasks.routers.js';
/*--------------------------------------------------------------------------- */

// SINCRONIZANDO LA BASE DE DATOS CON LOS MODELOS DEFINIDOS
initModels();

db_task.authenticate()
  .then(() => console.log('base de datos conectada'))
  .catch((error) => console.log(error));

db_task.sync()
  .then(() => console.log('base de datos sincronizada'))
  .catch((error) => console.log(error));

/*------------------------------------------------------ */
// CREANDO LAS INSTANCIAS
const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(categorieRoute);
app.use(taskRoute);

/*-------------------------------------------------------- */
app.get('/', (req, res) => {
  res.send('ok');
});

/*--------------------------------------------------------- */
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`)
})