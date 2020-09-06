// Define a função check para o evento onkeyup de ambos os inputs:
document.getElementById("tabInicial").onkeyup = check;
document.getElementById("tabFinal").onkeyup = check;


// Checa se ambos os imputs estão preenchidos e se o primeiro valor é maior que o segundo:

function check(){
    document.getElementById("resultado").innerHTML = '';

    let tabInicial = Number(document.getElementById("tabInicial").value);
    let tabFinal = Number(document.getElementById("tabFinal").value);

    if(tabInicial && tabFinal){
        if(tabInicial <= tabFinal){
            setMultiplicandos(tabInicial, tabFinal);
        } else {
            document.getElementById("resultado").textContent = "Digite um interválo válido!"
        }
    }
}


// Define as tabuadas
function setMultiplicandos(inicial, final){
    
    // Cria um array para todos os multiplicandos definidos pelo intervalo
    let multiplicandos = [];

    for(i=inicial; i <= final; i++){
        multiplicandos.push(i);
    }

    setTabuadas(multiplicandos);
}


function setTabuadas(multiplicandos){
    let resultado = document.getElementById("resultado");
    console.log(multiplicandos);

    for(multiplicando of multiplicandos){

        resultado.innerHTML += `<div id="mult${multiplicando}" class="tabuada"></div>`

        for(i=1; i <= 10; i++){
            document.getElementById(`mult${multiplicando}`).innerHTML += 
            `
                <div>${multiplicando} X ${i} = ${multiplicando * i}</div>
            `;
        }

    }
}