        // Botão calcular
        var btnCalc = document.getElementById("btnCalc");
        btnCalc.onclick = calcularRendimento;


        // Função que calcula o rendimento
        function calcularRendimento(){
            const valorCombustivel = 4.87;

            let kmOdometroInicial       = Number(document.getElementById("KmOdometroInicial").value);
            let kmOdometroFinal         = Number(document.getElementById("KmOdometroFinal").value);
            let litrosCombustivel       = Number(document.getElementById("litrosCombustivel").value);
            let valorTotalPassageiros   = Number(document.getElementById("valorTotalPassageiros").value);

            let kmRodados           = kmOdometroFinal - kmOdometroInicial;
            let consumoMedio        = kmRodados / litrosCombustivel
            let gastoCombustivel    = litrosCombustivel * valorCombustivel;
            let lucroLiquido        = valorTotalPassageiros - gastoCombustivel;
            
            imprimir(consumoMedio, lucroLiquido); // Chama a função imprimir
        }

        // Escreve na tela 
        function imprimir(consumoMedio, lucroLiquido){
            
            document.getElementById("consumoMedio").textContent = consumoMedio.toFixed(2);
            document.getElementById("lucroLiquido").textContent = String(lucroLiquido.toFixed(2)).replace("." , ",");


            // Torna a tabela visível
            document.getElementById("resultado").style.display = "block";
        }
        
