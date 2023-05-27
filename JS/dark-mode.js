const btnDark = document.querySelector('.btn-dark-mode')

btnDark.addEventListener('click', () => {
    // é uma função boleana, toda vez que clicar vai mudar independente de qual esteja.
    document.body.classList.toggle('dark-mode');

    // para mudar o butao de acordo com o tema
    if (document.body.className === 'dark-mode') {
        btnDark.innerHTML = `
        <i class="fa-regular fa-sun"></i>
        Light Mode
        `
    } else {
        btnDark.innerHTML = `
        <i class="fa-regular fa-moon"></i>
        Dark Mode
        `
    }

})