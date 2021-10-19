const update_form = document.getElementById('update_form');
const update_btn = document.getElementById('update_btn');
const delete_btn = document.getElementById('delete_btn');

update_form.addEventListener('submit', async(e) => {
    e.preventDefault();
});

update_btn.addEventListener('click', async(e) => {
    e.preventDefault();
    const password = update_form.password.value;
    const password_confirm = update_form.password_confirm.value;
    if (password != password_confirm) {
        alert('Las contraseñas no coinciden');
    } else {
        const email = update_form.email.value;
        const nombre = update_form.nombre.value;
        const anos_experiencia = update_form.anos_experiencia.value;
        const especialidad = update_form.especialidad.value;
        const data = {
            nombre,
            email,
            password,
            anos_experiencia,
            especialidad,
        };
        const url = window.location.href;
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status == 200) {
            alert(response.data.message);
            const token = sessionStorage.getItem('token');
            window.location.href = `/api/skaters/profile?token=${token}`;
        }

    }
});

delete_btn.addEventListener('click', async(e) => {
    e.preventDefault();
    const password = update_form.password.value;
    const password_confirm = update_form.password_confirm.value;
    if (password != password_confirm) {
        alert('Las contraseñas no coinciden');
    } else {
        const url = window.location.href;
        const response = await axios.delete(url)
        if (response.status == 200) {
            alert(response.data.message);
            sessionStorage.removeItem('token')
            window.location.href = '/';
        }

    }
});