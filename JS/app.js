const bandeiras = document.getElementById('bandeiras')

document.addEventListener('DOMContentLoaded', e => {
     fetchData()
 })

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        banderillas(data)
        // chamando essa função para a pesquisa 
        formularioCliente(data)
        // função que chama o filtro do select
        filtros(data)
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
                 <p>
                     <a href="pais.html?name=${item.name}">Mais info<a/>
                 </p>
             </div>
         </article>
         `
     });

    bandeiras.innerHTML = elementos
}