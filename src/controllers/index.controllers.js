const Skater = require('../models/Skater');

const renderIndex = async(req, res) => {
    const skatersData = await Skater.findAll({
        where: {
            rol: 'USER'
        }
    });

    const skaters = skatersData.map((skater, index) => {
        const skaterData = skater.dataValues;
        return {
            index: index + 1,
            foto: skaterData.foto,
            nombre: skaterData.nombre,
            anos_experiencia: skaterData.anos_experiencia,
            especialidad: skaterData.especialidad,
            estado: skaterData.estado,
            rol: skaterData.rol,
        }
    });
    console.log(skaters);
    res.render('index', {
        skaters
    });
};

module.exports = {
    renderIndex,
}