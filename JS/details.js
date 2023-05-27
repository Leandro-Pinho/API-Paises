const bandeiras = document.getElementById('bandeiras')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')


document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()

        const filtroData = data.filter(item => item.name === params)
        banderillas(filtroData)

    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flag}" class="img-fluid">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>
                    <b>Population</b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital</b>
                    ${item.capital}
                </p>
                <p>
                    <b>Region</b>
                    ${item.region}
                </p>
            </div>
        </article>
        `
    });

    bandeiras.innerHTML = elementos
}
