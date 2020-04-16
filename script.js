function calcular(){

    var num1 = document.querySelector('input#txtn');
    var txt = document.getElementById('txt');
    
    if(num1.value.length == 0){
        alert("Por favor digite um Número!");
    }else{
        var numero = Number(num1.value);
        let c = 1;
        txt.innerText = '';

        while(c<=10){
            let item = document.createElement('option');
            item.text = `${numero} X ${c} = ${numero*c}`;
            item.value = `txt${c}`;
            txt.appendChild(item);
            c++;
        }
        
    }

}

function contar(){

    var inicio =  document.getElementById('inicio');
    var fim = document.querySelector('input#fim');
    var passo = document.getElementById('passo');
    var contagem = document.querySelector('div#contagem');
    var controle = Number(inicio.value);
    var j = Number(passo.value);

    var num1 = Number(inicio.value); 
    var num2 = Number(fim.value);
    var passoNum = Number(passo.value);

    if (num1 == '' || num2 == ''){
        contagem.innerText = 'Impossivel contar!';
    }

    if(passoNum == ''){
        alert('[ERRO] Passo invalido. Considerando Passo 1');

    }
            for(controle; controle <=num2; passo++){

                contagem.innerHTML += controle + ' ' + String.fromCodePoint(0x1F449);;
                controle = controle + j;
                passo += passo;
            }
            contagem.innerHTML += `\u{1f3c1}`

}