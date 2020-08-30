        // Botão calcular
        var btnCalc = document.getElementById("btnCalc");
        btnCalc.onclick = comparar;


        // Função que calcula o rendimento
        function comparar(){

            let numero1 = Number(document.getElementById("numero1").value);
            let numero2 = Number(document.getElementById("numero2").value);
            
            if(numero1 > numero2){
                imprimir(numero1);
            } else {
                imprimir(numero2)
            }

             // Chama a função imprimir
        }

        // Escreve na tela 
        function imprimir(numero){
            document.getElementById("resultado").textContent = `
                O maior número é ${numero}
            `;
        }
        
