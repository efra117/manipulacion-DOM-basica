const h1 = document.querySelector('h1'); //querySelector no spermite selecionar la etiqueta, clase, etc, sin necesidad de especificar su tipo
const input1 = document.querySelector('#calculo1');
const input2= document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputValues );

// btn.addEventListener('click', btnOnClick); //los argumentos que se colocan son el evento que va a disparar el proceso, y el segundo argumento es la función que se va a ejecutar

// function sumarInputValues(event) {
//     console.log({event});
//     event.preventDefault(); //se está mandando a llamar a un evento  que se produce cuando se ejecuta un form, al mandarlo a llamar, es como decirle que esa parte no la queremos ejecutar
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
//  }

btn.addEventListener('click', sumarInputValues);

 function sumarInputValues(event) {
    //console.log({event});
    //event.preventDefault(); //se está mandando a llamar a un evento  que se produce cuando se ejecuta un form, al mandarlo a llamar, es como decirle que esa parte no la queremos ejecutar
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
 }
