const fs = require('fs');
const path = require('path');
const expfu = require('express-fileupload');
const bcrypt = require('bcryptjs')
const Skater = require('../models/Skater');
const { generateJWT } = require('../helpers/jwt');

const renderLogin = (req, res) => {
    res.render('partials/login');
}

const renderRegister = (req, res) => {
    res.render('partials/register');
}

const createSkater = async(req, res) => {
    const { image } = req.files;
    const { data } = req.body;
    try {
        const { nombre, email, password, anos_experiencia, especialidad } = JSON.parse(data);
        const foto = `${nombre}-${email}.jpg`
        image.mv(path.resolve(__dirname, '../public/img/', foto), async(err) => {
            if (err) return res.status(500).send({ message: 'Error al subir la imagen' });
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);
            const newSkater = {
                nombre,
                email,
                password: hash,
                anos_experiencia,
                especialidad,
                foto
            }
            await Skater.create(newSkater);
            res.status(201).send({ message: 'Skater creado', success: true });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error al crear el skater', success: false });
    }

}

const loginSkater = async(req, res) => {
    const { email, password } = req.body;
    try {
        const skater = await Skater.findOne({ email });
        if (!skater) return res.status(404).send({ message: 'El skater no existe' });
        const validPass = bcrypt.compareSync(password, skater.password);
        if (!validPass) return res.status(401).send({ message: 'Contraseña incorrecta' });
        //JWT
        const token = generateJWT(skater.id, skater.nombre);

        skater.password = undefined;
        res.status(200).send({
            message: 'Skater logueado',
            token,
            skater
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error al loguear el skater', success: false });
    }
}


module.exports = {
    renderLogin,
    renderRegister,
    createSkater,
}