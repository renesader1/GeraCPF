listaInputs = document.querySelectorAll(".input-CPF")
botaoEnviar = document.querySelector("#envia-CPF-Botão")

listaInputs.forEach(element => {
    element.addEventListener("keyup", (e) =>{

        if(e.key == "Backspace" && e.target.previousElementSibling != null){
            e.target.previousElementSibling.focus()
        }
        else if(e.key != "Backspace" && e.target.nextElementSibling != null){
            e.target.nextElementSibling.focus()
        }
    })
});

botaoEnviar.addEventListener("click", (e) => {
    e.preventDefault()
    geraCPF()
})

function geraCPF(){
    listaInputs.forEach(element => {
        console.log(element.value)
    })
}