import bcrypt from 'bcryptjs';
import Skater from '../models/Skater'

export const createSkater = async(req, res) => {
    const { email, nombre, password, anos_experiencia, especialidad, foto, estado } = req.body;
    try {
        const newSkater = await Skater.create({
            email,
            nombre,
            password,
            anos_experiencia,
            especialidad,
            foto,
            estado
        })
        const salt = bcrypt.genSaltSync();
        newSkater.password = bcrypt.hashSync(password, salt);
        return res.status(200).json({
            message: 'Skater created successfully',
            data: newSkater
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error creating Skater',
            data: {}
        })
    }

}

const getSkater = (req, res) => {}