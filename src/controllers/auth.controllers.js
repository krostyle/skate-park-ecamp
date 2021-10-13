const fs = require('fs');
const path = require('path');
const expfu = require('express-fileupload')

const renderLogin = (req, res) => {
    res.render('partials/login');
}

const renderRegister = (req, res) => {
    res.render('partials/register');
}

const createSkater = async(req, res) => {
    console.log(req.file);
    // const { body } = req.body
    // console.log(body);
    // res.send({
    //     email,
    //     name,
    //     password,
    //     anos_experiencia,
    //     especialidad,
    //     photo: req.files.photo.data

    // });
}

// const uploadFile = async(req, res) => {
//     console.log(req.files);
// }


module.exports = {
    renderLogin,
    renderRegister,
    createSkater,
}