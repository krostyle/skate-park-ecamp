const skaters_table = document.getElementById('skaters_table');
skaters_table.addEventListener('click', async(e) => {
    const id = e.target.parentElement.parentElement.id;
    if (e.target.type === 'checkbox') {
        const res = await axios.put(`/api/skaters/dashboard/${id}`, {
            id: id,
            status: e.target.checked
        })
        alert(res.data.message)
    }
});