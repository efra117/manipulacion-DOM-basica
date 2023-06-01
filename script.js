const h1 = document.querySelector("h1"); //querySelector no spermite selecionar la etiqueta, clase, etc, sin necesidad de especificar su tipo
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(input.value);

console.log(
    {
        h1,
        p,
        parrafito,
        pid,
        input,
    
    }    
    );

    h1.innerHTML = "patito <br> feo";
    h1.innerText = "patito <br> feo";
    //console.log(h1.getAttribute("pantalla"));
    console.log(h1.getAttribute("class")); //nos arroja la información de lo que contiene algún atributo
    //h1.setAttribute("class","rojo"); //nos permite cambiar el atributo dentro de una clase

    h1.classList.add("rojo"); //agrega clases desde JS
    h1.classList.remove("verde"); //elimina la clase

    input.value = "456"; //da un valor a un input en HTML
    const img = document.createElement("img"); //nos permite crear un elemento en el html

    img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwW6FTgej7sufkkOUGZh0FsTfFPBzapRtapA&usqp=CAU" ) //nos permite darle argumentos al atributo creado
    console.log(img);

    pid.append(img); //indica en dónde se está agregando el elemento
    



