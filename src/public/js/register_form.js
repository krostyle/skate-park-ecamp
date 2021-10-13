// const axios = require("axios")/

const register_form = document.getElementById('register_form')

register_form.addEventListener('submit', async(e) => {
    e.preventDefault()
        // const email = register_form.email.value
    const password = document.getElementById('password').value
    const password_confirm = document.getElementById('password_confirm').value
        // const name = register_form.name.value
        // const anos_experiencia = register_form.anos_experiencia.value
        // const especialidad = register_form.especialidad.value
        // const foto = register_form.foto
    const data = new FormData(register_form)
        // console.log(data.get('email'));
        // console.log(data.get('foto'));
    console.log(data.get('password'));
    if (password !== password_confirm) {
        alert('Passwords do not match')
        register_form.reset()
    } else {

        console.log(data);
        await axios.post('/auth/register', {
                body: data,
                headers: {
                    formData: true
                },

            })
            // await axios('/auth/register/photo', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     },
            //     data: new FormData(register_form)
            // })
        alert('Registrado Correctamente')
    }
})