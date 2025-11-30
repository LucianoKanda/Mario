/* VARIAVEIS - é um espaço de memória que você reserva e pode guardar o que quiser la dentro,
Existem 3 jeitos de criar uma variavel, usando: var | let | const, var é um jeito antigo, não use mais,
Prefira utilizar "const" pois ela é uma constante, não podendo alterar o valor depois,
Agora "let" você pode alterar o valor depois, basicamente é isso,
por que usar "const" e não "let", simplesmente para proteger o código de alterações sem querer, podendo ocasionar em erros */

/* FUNÇÕES - É um trecho de código que só é executado quando é chamado,
Para usar a função utilize "function EXEMPLO(){}" */

/* console.log - É pra ver na tela o código selecionado */

const form = document.querySelector(".formulario-fale-conosco") /* "const" estou criando uma variavel com o nome form (form),
use = para chamar algo, neste caso document (document é o HTML), queryselector é utilizado para selecionar algo, neste caso uma classe (.formulario-fale.conosco) */
const mascara = document.querySelector(".mascara-formulario") /* Obs: O javascript não chama o HTML de html, mas sim de document */

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}