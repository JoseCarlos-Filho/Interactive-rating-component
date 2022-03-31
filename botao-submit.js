const formulario = document.querySelector(".form_botoes");
const radioEntrada = document.querySelectorAll(".form_radio_button");
const classifica = document.querySelector(".classificacao");

let classificaValor;

radioEntrada.forEach(input => {
    
    input.addEventListener("change", (e) => {
        
        classificaValor = e.target.value;

    });
});

formulario.addEventListener('submit', e => {
    
    e.preventDefault();

    if(!classificaValor){
        return;
    }
})


// function submitLink() {
//     var link = <a href="./thankyou.html"></a>
//     return link;
// }