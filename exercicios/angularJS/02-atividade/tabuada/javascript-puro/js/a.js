document.getElementById("multiplicando").onkeyup = setTabuada;

function setTabuada(){

    let multiplicando = Number(document.getElementById("multiplicando").value);
    let resultado = document.getElementById("resultado");

    if(multiplicando == ''){
        resultado.innerHTML = '';
    } else {
        resultado.innerHTML = '';
        for(let i = 1; i <= 10; i++){
            resultado.innerHTML += 
            `
                <p> ${multiplicando} x ${i} = ${multiplicando * i}</p>
            
            `;
        }

    }


}
