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
    showTable();
}

function saida(texto){
    document.getElementById("saida").innerHTML = texto;
}

function addAluno(aluno){
    alunos.push(aluno);
    console.log(alunos)
}

function valida(el){
    if(el.value == ""){
        saida(`<p class='alert alert-danger'>Preencha o campo ${el.placeholder}!</p>`)
    } else {
        document.getElementById("saida").innerHTML = '';
    }
}

function showTable(){
    if(alunos[0]){

        //Verifica se a tabela já existe, senão cria a tabela.
        if(!document.getElementById("tabela")){
            let table = document.createElement("table");
            table.setAttribute("id", "tabela");
            table.setAttribute("class", "table");
            document.getElementById("saida").appendChild(table);
        }

        let table = document.getElementById("tabela");

        for(i = 0; i < alunos.length; i++){
            let linha = document.createElement("tr")
            table.appendChild(linha)

            let tdNome = document.createElement("td");
            let tdNota1 = document.createElement("td");
            let tdNota2 = document.createElement("td");
            let tdMedia = document.createElement("td");
            let tdResultado = document.createElement("td");
            
            let txtNome = document.createTextNode(alunos[i].nome)
            let txtNota1 = document.createTextNode(alunos[i].nota1)
            let txtNota2 = document.createTextNode(alunos[i].nota2)
            let txtMedia = document.createTextNode(alunos[i].media)
            let txtResultado = document.createTextNode(alunos[i].result)
            
            tdNome.appendChild(txtNome)
            tdNota1.appendChild(txtNota1)
            tdNota2.appendChild(txtNota2)
            tdMedia.appendChild(txtMedia)
            tdResultado.appendChild(txtResultado)
            let elements = [tdNome, tdNota1, tdNota2, tdMedia, tdResultado];
            
                for(el of elements){
                    linha.appendChild(el)
                }

        }
    }
}