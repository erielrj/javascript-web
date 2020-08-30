        // Botão calcular
        var btnCalc = document.getElementById("btnCalc");
        btnCalc.onclick = resultado;


        // Função que calcula o rendimento
        function resultado(){
            let qtdMacas = Number(document.getElementById("qtdMacas").value)

            if (qtdMacas < 12){
                imprimir(qtdMacas * 0.30);
            } else {
                imprimir(qtdMacas * 0.25)
            }

             // Chama a função imprimir
        }

        // Escreve na tela 
        function imprimir(res){
            document.getElementById("resultado").textContent = `
            Valor total: R$ ${String(res.toFixed(2)).replace('.',',')}
            `;
        }
        
