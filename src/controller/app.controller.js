import { dataBase } from "../dataBase/dataBase.js";

const ctrl = {};

ctrl.crearUsuario = (req, res) => {
    const { nombre, edad, email } = req.body;
    const id = dataBase.length + 1;
    dataBase.push({ id, nombre, edad, email });
    res.json({ message: 'Usuario creado correctamente!' });
}

ctrl.obtenerTodos = (req, res) => {
    res.json( dataBase );
}

ctrl.obtenerUsuario = (req, res) => {
    const { id } = parseInt(req.params.id);
    const user = dataBase.find( user => user.id == id);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
}

ctrl.modificarUsuario = (req, res) => {
    const { id } = parseInt(req.params.id);
    const { nombre, edad, email } = req.body;
    const user = dataBase.find( user => user.id == id);
    if (!user) {
        return res.status(400).json({ message: 'Usuario no valido' });
    }
    user.nombre = nombre;
    user.edad = edad;
    user.email = email;
    res.json({ message: 'Usuario modificado correctamente' });
}

ctrl.eliminarUsuario = (req, res) => {
    const { id } = parseInt(req.params.id);
    const user = dataBase.find( user => user.id == id);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    const index = dataBase.indexOf(user);
    dataBase.splice(index, 1);
    res.json({ message: 'Usuario eliminado correctamente' });
}

export { ctrl };