const renderLogin = (req, res) => {
    res.render('partials/login');
}

const renderRegister = (req, res) => {
    res.render('partials/register');
}


module.exports = {
    renderLogin,
    renderRegister
}