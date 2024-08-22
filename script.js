document.addEventListener("DOMContentLoaded", function() {
    const inputTexto = document.querySelector("#mensagem");
    const resposta = document.querySelector("#resposta");

    document.querySelector("#btn-encriptar").addEventListener("click", btnEncriptar);
    document.querySelector("#btn-desencriptar").addEventListener("click", btnDesencriptar);
    document.querySelector("#btn-copiar").addEventListener("click", btnCopiar);

    function btnEncriptar() {
        const textoE = codificar(inputTexto.value);
        resposta.value = textoE;
        resposta.classList.add("background-none");
    }

    function codificar(textoCodificado) {
        const matriz = [
            ["e", "enter"], 
            ["i", "imes"], 
            ["a", "ai"], 
            ["o", "ober"], 
            ["u", "ufat"]
        ];
                        
        textoCodificado = textoCodificado.toLowerCase();
    
        for (let i = 0; i < matriz.length; i++) {
            if (textoCodificado.includes(matriz[i][0])) {
                textoCodificado = textoCodificado.replaceAll(matriz[i][0], matriz[i][1]);
            }
        }
        return textoCodificado;
    }

    function btnDesencriptar() {
        const textoD = decodificar(inputTexto.value);
        resposta.value = textoD;
    }

    function decodificar(textoDecodificado) {
        const matriz = [
            ["e", "enter"], 
            ["i", "imes"], 
            ["a", "ai"], 
            ["o", "ober"], 
            ["u", "ufat"]
        ];
                        
        textoDecodificado = textoDecodificado.toLowerCase();
    
        for (let i = 0; i < matriz.length; i++) {
            if (textoDecodificado.includes(matriz[i][1])) {
                textoDecodificado = textoDecodificado.replaceAll(matriz[i][1], matriz[i][0]);
            }
        }
        return textoDecodificado;
    }

    async function btnCopiar() {
        try {
            await navigator.clipboard.writeText(resposta.value);
            alert("Texto copiado para a área de transferência!");
        } catch (err) {
            console.error("Erro ao copiar texto: ", err);
        }
    }
});
