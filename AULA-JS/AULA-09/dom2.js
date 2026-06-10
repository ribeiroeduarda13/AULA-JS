let elementoH1 = window.document.getElementById('titulo')

elementoH1.innerText //
elementoH1.innerHTML = 'Aula - Data: 08/06';

let elementoParagrafo = document.getElementsByTagName('p')
let elementoParagrafo = document.getElementsByClassName('par')
// 0 / 1 / 2 / 3
//elementoParagrafo[1].style.color = 'red'

for (let cont = 0; elementoParagrafo.length > cont; cont++) {
    elementoParagrafo[cont].style.color = 'red'

}
