(function () { 
    var btn = document.getElementById("btnCalc");
    btn.setAttribute("onclick", 
            `resultado( document.getElementById('nome').value,
                        document.getElementById('nota1').value, 
                        document.getElementById('nota2').value, 
                        document.getElementById('optativa').value)`);

    var obrigatorios = document.querySelectorAll(".required");
    for (i = 0; i < obrigatorios.length; i++){
        obrigatorios[i].setAttribute("onblur", `valida(this)`)
    }})();

class Aluno {
    constructor(nome, nota1, nota2, optativa, result) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.optativa = optativa;
        this.result = result;
        this.media = this.media();
    }
    media(){
        return (parseFloat(this.nota1) + parseFloat(this.nota2)) / 2 
    }
}

var alunos = [];



function media(nota1, nota2){
    return (Number(nota1) + Number(nota2)) / 2;
}

function resultado(nome, nota1, nota2, optativa = -1){
    
    if(optativa >= 6){
        if(nota1 <= 6){
            nota1 = optativa;
        } else if(nota2 <= 6){
            nota2 = optativa;
        }
    }

    var mediaSemestre = media(nota1, nota2);

    if( mediaSemestre >= 6){
        saida(`<p class="alert alert-success">Aprovado! Sua média é: ${media(nota1, nota2)}</p>`);
        result = "Aprovado";
    } else if(mediaSemestre < 3) {
        saida(`<p class="alert alert-danger">Reprovado! Sua média é: ${media(nota1, nota2)}</p>`)
        result = "Reprovado";
    } else {
        saida(`<p class="alert alert-warning">Em Exame! Sua média é: ${media(nota1, nota2)}</p>`);
        result = "Em exame";
    }

    var aluno = new Aluno(nome, nota1, nota2, optativa, result);
    addAluno(aluno);
    document.forms[0].reset();
}

function saida(texto){
    document.getElementById("saida").innerHTML = texto;
}

function addAluno(aluno){
    alunos.push(aluno);
}

function valida(el){
    if(el.value == ""){
        saida(`<p class='alert alert-danger'>Preencha o campo ${el.placeholder}!</p>`)
    } else {
        document.getElementById("saida").innerHTML = '';
    }
}