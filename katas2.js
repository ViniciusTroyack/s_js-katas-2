// comece a criar a sua função add na linha abaixo

function add(num1, num2){
    return num1 + num2;
}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply(num1, num2){
    let resultado = 0;
    for(let i = 1; i <= num2; i++){
        resultado += add(num1, 0);
    }
return resultado;
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(x, n){
    let resultado = x;

    for(let i = 1; i < n; i++){
        resultado *= multiply(x, 1);
        }
    return resultado;
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(num1){
    let resultado = 1

    for(let i = 1; i <= num1; i++){
        resultado *= multiply(i, 1);
    }
    return resultado;
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
 function fibonacci(nun1){
    let resultado = 0;
    let aux1 = 0
    let aux2 = 1

    if(nun1 <= 2){
        resultado = nun1 - 1;
    }else{
        for(let i = 3; i <=nun1; i++){
            resultado = add(aux2, aux1);
            aux1 = aux2;
            aux2 = resultado;
     }
    return resultado;
    }

 }
// descomente a linha seguinte para testar sua função
console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
