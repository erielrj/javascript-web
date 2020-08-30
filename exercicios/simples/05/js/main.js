        // Botão calcular
        var btnCalc = document.getElementById("btnCalc");
        btnCalc.onclick = calcBoxes;

        //Registra as saídas
        var results = [];

        // Função que calcula a quantidade de caixas
        function calcBoxes(){
            var comprimento = Number(document.getElementById("comprimento").value);
            var altura = Number(document.getElementById("largura").value);
            var largura = Number(document.getElementById("largura").value);

            var quantBox = (((comprimento*altura) + (largura*altura)) / 1.5) * 2;

            results.push(quantBox.toFixed(2));
            imprimir(); // Chama a função imprimir
        }

        // Escreve na tela 
        function imprimir(){
            var saida = document.getElementById("saida");
            saida.innerHTML = '';

            for(result of results){
                saida.innerHTML += `<li>${result}</li>`;
            }
        }
        
