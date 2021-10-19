const login_form = document.getElementById('login_form');
login_form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const email = login_form.email.value;
    const password = login_form.password.value;
    const data = {
        email: email,
        password: password
    };
    try {

        const res = await axios.post('/auth/login', data);
        const token = res.data.token;
        sessionStorage.removeItem('token');
        sessionStorage.setItem('token', token);
        alert(res.data.message);
        if (res.data.skater.rol === 'USER') {
            window.location.href = `/api/skaters/profile?token=${token}`;
        } else {
            window.location.href = `/api/skaters/dashboard?token=${token}`;
        }
    } catch (error) {
        console.log(error);
        alert(error.response.data.message);
        login_form.reset();
    }

});