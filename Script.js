listaInputs = document.querySelectorAll(".input-CPF")
botaoEnviar = document.querySelector("#envia-CPF-Botão")


listaInputs.forEach(element => {
    element.addEventListener("keyup", (e) =>{

        if(e.key == "Backspace"){
            e.target.previousElementSibling.focus()
        }
        else{
            e.target.nextElementSibling.focus()
        }
    })
});
