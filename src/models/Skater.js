import { Sequelize } from "sequelize";
import { sequelize } from "../database/database";


const Skater = sequelize.define('skater', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    anos_experiencia: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    especialidad: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: false
});

export default Skater;