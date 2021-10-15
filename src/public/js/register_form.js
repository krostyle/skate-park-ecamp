// const axios = require("axios")/

const register_form = document.getElementById('register_form')

register_form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const password = register_form.password.value
    const password_confirm = register_form.password_confirm.value
    if (password !== password_confirm) {
        alert('Passwords do not match')
        register_form.reset()
    } else {
        const formData = new FormData()
        formData.append('image', e.target.foto_register.files[0])
        const email = register_form.email.value
        const password = register_form.password.value
        const nombre = register_form.name.value
        const anos_experiencia = register_form.anos_experiencia.value
        const especialidad = register_form.especialidad.value
        const data = {
            email,
            password,
            nombre,
            anos_experiencia,
            especialidad
        }
        formData.append('data', JSON.stringify(data))
        const res = await axios.post('/auth/register', formData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
        })
        if (res.data.success) {
            alert('Registrado exitosamente')
            window.location.href = '/auth/login'
        } else {
            alert('Error al registrarse')
            register_form.reset()
        }


    }
})