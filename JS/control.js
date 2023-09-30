const navMenuOpen = document.getElementById('menu');
navMenuOpen.addEventListener('click', () =>{
    const navBody = document.getElementById('nav-body');
    navBody.style.display = 'block';
    const btnBody = document.getElementById('btn-body');
    btnBody.style.display = 'block';
    const cross = document.getElementById('cross');
    navMenuOpen.style.display = 'none';
    cross.classList.remove('D-none');
    cross.addEventListener('click', () =>{
        navBody.style.display = 'none';
        btnBody.classList.add('D-none');
        cross.classList.add('D-none');
        navMenuOpen.style.display = 'block';
    })
});