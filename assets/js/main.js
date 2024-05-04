/* Se criarmos variáveis no escopo global, pode dar problema
Portanto, é uma boa prática criar as variáveis sempre dentro das functions
sempre que possível */
let contador = 1;
function meuEscopo() {
    const form = document.querySelector(".formulario");
    const resultado = document.querySelector(".resultado");
    const pessoas = [];
    /*
    form.onSubmit = function (evento){
        console.log('Aqui fará algo quando enviado')
    };
    */
    function recebeEventoForm(evento) {
        /* evento.preventDefault();
        console.log('Form não foi enviado'); */
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso')
        console.log(nome.value, sobrenome.value, altura.value, peso.value);

        let pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(pessoa);
        contador++;
        console.log(pessoas);
        function calculaIMC(p, a) {
            let imc = p / ((a / 100) ** 2);
            resultado.innerHTML = `${nome.value} ${sobrenome.value}  seu IMC é ${imc.toFixed(1)}! <br />`
            if (peso.value >= 300){
          resultado.classList.add('preto')
          resultado.innerHTML += ' <p> Vai morrer </p>'} else{
            resultado.classList.remove('preto');
          }
          
          if (imc < 18.5) {
                resultado.classList.add('cinza');
                resultado.innerHTML += `Você está em MAGREZA! </br /><hr />`
            }else if (imc >= 18.5 && imc <= 24.9) {
              resultado.classList.add('green');
                resultado.innerHTML += `Você está em EUTROFIA! <br /><hr />`
            } else if (imc >= 25 && imc <= 29.9) {
              resultado.classList.add('pink');
                resultado.innerHTML += `Você está em PRÉ-OBESIDADE! <br /><hr />`
            }else if (imc >= 30 && imc <= 34.9) {
              resultado.classList.add('red-fraco');
                resultado.innerHTML += `Você está em OBESIDADE GRAU I! <br /><hr />`
            }else if (imc >= 35 && imc <= 39.9) {
              resultado.classList.add('red-medio');
                resultado.innerHTML += `Você está em OBESIDADE GRAU II! <br /><hr />`
            }else if (imc >= 40) {
              resultado.classList.add('red-forte');
                resultado.innerHTML += `<p> Você está em OBESIDADE GRAU III! </p><hr />`
            }
        }
        
        calculaIMC(Number(peso.value), Number(altura.value))
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();