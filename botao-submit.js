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
});

function telaObrigado(container, valorClassific) {
    container.innerHTML = `
            <div class="Obrigado">
                <img src="./images/illustration-thank-you.svg" alt="Obrigado" class="img_obrigado">
                <p class="obrigado_result">You selected ${valorClassific} out of 5.</p>
                <h1 class="obrigado_titulo">Thank you!</h1>
                <p class="descricao_obrigado">
                    We appreciate you taking the time to give a rating. 
                    If you ever need more support, don’t hesitate to get in touch!
                </p>
        </div>
    `;
}