        // Botão calcular
        var btnCalc = document.getElementById("btnCalc");
        btnCalc.onclick = resultado;


        // Função que calcula o rendimento
        function resultado(){
            let now = new Date();
            let anoNascimento = Number(document.getElementById("anoNascimento").value);
            let idade = now.getFullYear() - anoNascimento;
            console.log(idade)

            if(!(idade < 0 || idade > 120)) {
                if(idade < 16){
                    imprimir("Não")
                } else {
                    imprimir("Sim")
                }
            } else {
                imprimir("Idade inválida")
            }

            

             // Chama a função imprimir
        }

        // Escreve na tela 
        function imprimir(res){
            document.getElementById("resultado").textContent = res;
        }
        
