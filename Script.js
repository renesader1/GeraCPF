const listaInputs = document.querySelectorAll(".input-CPF");
const botaoEnviar = document.querySelector("#envia-CPF-Botão");
const estados = document.querySelector("#lista-Estados");
let estado = estados.value;
const txtCPF = document.querySelector("#CPF");

estados.addEventListener("change", () => {
  estado = estados.value;
});

const regioesFiscais = {
  Acre: 2,
  Alagoas: 4,
  Amapá: 2,
  Amazonas: 2,
  Bahia: 5,
  Ceará: 3,
  "Espírito Santo": 7,
  Goiás: 1,
  Maranhão: 3,
  "Mato Grosso": 1,
  "Mato Grosso do Sul": 1,
  "Minas Gerais": 6,
  Pará: 2,
  Paraíba: 4,
  Paraná: 9,
  Pernambuco: 4,
  Piauí: 3,
  "Rio de Janeiro": 7,
  "Rio Grande do Norte": 4,
  "Rio Grande do Sul": 0,
  Rondônia: 2,
  Roraima: 2,
  "Santa Catarina": 9,
  "São Paulo": 8,
  Sergipe: 5,
  Tocantins: 1,
  "Distrito Federal": 1,
};

listaInputs.forEach((element) => {
  element.addEventListener("keyup", (e) => {
    if (e.key == "Backspace" && e.target.previousElementSibling != null) {
      e.target.previousElementSibling.focus();
    } else if (e.key != "Backspace" && e.target.nextElementSibling != null) {
        e.target.nextElementSibling.focus();
    }
    estilizaCampo(e.target);
  });
});

function estilizaCampo(e){
    if (e.value == "" || isNaN(e.value) || e.value == " ") {
        e.style.borderColor = "#8d0000"
    }
    else{
        e.style.borderColor = "#212529"
    }
}

function verificaCampoCPF(listaInputs) {
  for (i = 0; i < listaInputs.length; i++) {
    if (listaInputs[i].value == "" || isNaN(listaInputs[i].value)) {
      return false;
    }
  }
  return true;
}

botaoEnviar.addEventListener("click", (e) => {
  e.preventDefault();

  if (estado != "" && verificaCampoCPF(listaInputs)) {
    txtCPF.innerHTML = geraCPF();
  } 
  else { 
    txtCPF.innerHTML = "Favor verificar o campo de seleção da unidade federativa ou a ortografia dos digitos dos CPF"
  }
});

function geraCPF() {
  let CPF = [];

  listaInputs.forEach((element) => {
    CPF.push(parseInt(element.value));
  });

  CPF.push(regioesFiscais[estado]);

  let multiplicador = 1;
  let soma = 0;

  for (i = 0; i < 9; i++) {
    soma += CPF[i] * multiplicador;
    multiplicador++;
  }

  let V1 = soma % 11;
  if (V1 != 10) {
    CPF.push(V1);
  } else {
    CPF.push(0);
  }

  multiplicador = 0;
  soma = 0;

  for (i = 0; i < 10; i++) {
    soma += CPF[i] * multiplicador;
    multiplicador++;
  }

  let V2 = soma % 11;

  if (V2 != 10) {
    CPF.push(V2);
  } else {
    CPF.push(0);
  }

  CPFFormatado = CPF.join("");

  return CPFFormatado;
}
