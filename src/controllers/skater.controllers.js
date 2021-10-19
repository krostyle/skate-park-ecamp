const bcrypt = require('bcryptjs');
const Skater = require('../models/Skater');


const renderProfile = async(req, res) => {
    const { uid } = req
    const skaterData = await Skater.findOne({
        where: {
            id: uid
        }
    })
    const { password, ...skater } = skaterData.dataValues
    res.render('profile', {
        skater
    });
}

const renderDashboard = async(req, res) => {
    const { uid } = req
    const userData = await Skater.findOne({
        where: {
            id: uid
        }
    })

    const skatersData = await Skater.findAll({
        where: {
            rol: 'USER'
        }
    })

    const { password_user, ...skater } = userData.dataValues

    const skaters = skatersData.map((skater, index) => {
        const skaterData = skater.dataValues;
        return {
            index: index + 1,
            id: skaterData.id,
            foto: skaterData.foto,
            nombre: skaterData.nombre,
            anos_experiencia: skaterData.anos_experiencia,
            especialidad: skaterData.especialidad,
            estado: skaterData.estado,
            rol: skaterData.rol,
        }
    });

    const { password, ...user } = userData.dataValues
    res.render('admin', {
        user,
        skaters,
        skater
    });
}

const renderEditProfile = async(req, res) => {
    const { id } = req.params
    const skaterData = await Skater.findOne({
        where: {
            id
        }
    });
    if (skaterData) {
        const { password, ...skater } = skaterData.dataValues
        res.render('datos', {
            skater
        });
    } else {
        const url = '/'
        res.redirect(url);
    }

}

const updateSkater = async(req, res) => {
    const { id } = req.params
    const { nombre, email, password, anos_experiencia, especialidad } = req.body
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const skaterData = await Skater.update({
            nombre,
            email,
            password: hash,
            anos_experiencia,
            especialidad
        }, {
            where: {
                id
            }
        })
        res.status(200).send({
            message: 'Datos actualizado correctamente'
        })
    } catch (error) {
        res.status(500).send({
            message: 'Error al actualizar los datos'
        })
    }

}

const updateEstado = async(req, res) => {
    const { id } = req.params
    const { status } = req.body
    try {
        await Skater.update({
            estado: status
        }, {
            where: {
                id

            }
        });
        res.status(200).send({
            message: 'Estado actualizado correctamente'
        })
    } catch (error) {
        res.status(500).send({
            message: 'Error al actualizar el estado'
        })
    }

}


const deleteSkater = async(req, res) => {
    const { id } = req.params
    try {
        const skaterData = await Skater.destroy({
            where: {
                id
            }
        })
        res.status(200).send({
            message: 'Skater eliminado correctamente'
        })
    } catch (error) {
        res.status(500).send({
            message: 'Error al eliminar el skater'
        })
    }
}





module.exports = {
    renderProfile,
    renderEditProfile,
    updateSkater,
    deleteSkater,
    renderDashboard,
    updateEstado
}