var app = angular.module("rapadura", []);

app.controller("myCtrl", function($scope){
    class Aluno {
        constructor(nome, nota1, nota2, optativa, result) {
            this.nome = nome;
            this.nota1 = nota1;
            this.nota2 = nota2;
            this.optativa = optativa;
            this.resultado = result;
            this.media = this.media();
        }
        media(){
            return (parseFloat(this.nota1) + parseFloat(this.nota2)) / 2 
        }
    }

    $scope.alunos = [];
    $scope.resposta = [];

    $scope.calcResultado = function(){
        var resultado = "";
        var texto = "";

        if($scope.optativa >= 6){
            if($scope.nota1 <= 6){
                $scope.nota1 = $scope.optativa;
            } else if($scope.nota2 <= 6){
                $scope.nota2 = $scope.optativa;
            }
        }
    
        var aluno = new Aluno($scope.nome, $scope.nota1, $scope.nota2, $scope.optativa, resultado);
        var mediaSemestre = aluno.media;
    
        if( mediaSemestre >= 6){
            texto = `Parabéns, aprovado!`;
            resultado = "Aprovado";
        } else if(mediaSemestre < 3) {
            texto = `Sinto muito, reprovado!`;
            resultado = "Reprovado";
        } else {
            texto = `Cuidado, em exame!`;
            resultado = "Em exame";
        }

        aluno.resultado = resultado;

        addAluno(aluno);

        $scope.resposta = texto;
    }

    function addAluno(aluno){
        $scope.alunos.push(aluno);
        console.log($scope.alunos)
    }

    $scope.removeAluno = function(index) {
        $scope.alunos.splice(index, 1);
        console.log( $scope.alunos);
    }
});