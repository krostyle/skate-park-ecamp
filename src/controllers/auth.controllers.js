const path = require('path');
const expfu = require('express-fileupload');
const bcrypt = require('bcryptjs')
const Skater = require('../models/Skater');
const { generateJWT } = require('../helpers/jwt');

const renderLogin = (req, res) => {
    res.render('login');
}

const renderRegister = (req, res) => {
    res.render('register');
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
        const skater = await Skater.findOne({
            where: {
                email
            }
        });
        if (!skater) return res.status(404).send({ message: 'El usuario no existe', success: false });
        const validPass = bcrypt.compareSync(password, skater.password);
        if (!validPass) return res.status(401).json({ message: 'Contraseña incorrecta', success: false });
        //JWT
        const token = await generateJWT(skater.id, skater.nombre);

        skater.password = undefined;
        res.status(200).send({
            message: 'Has iniciado sesión correctamente',
            token,
            skater,
            success: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error al iniciar sesión', success: false });
    }
}


module.exports = {
    renderLogin,
    renderRegister,
    createSkater,
    loginSkater
}