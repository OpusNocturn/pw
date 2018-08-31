// no caso do "multiplica", pode colocar qualquer palavra, é apenas para você saber o que a função faz.

// console.log -> serve para te auxiliar no console do navegador ("console", quando você aperta f5)

/*
function multiplica(a,b){
	console.log("function multiplica(a,b){...");
	var resultado = a*b;
	console.log("imprimindo resultado")
	return a*b;
	}
	var resultadoDaFuncaoMultiplica = multiplica("azul","verde");
	alert( resultadoDaFuncaoMultiplica );

*/	



/*

function divisao(a,b,c,d){
	console.log("printa alguma coisa");
	var resultado1 = a/b;
	console.log("resultado:")
	return a/b;
}
	var resultado = divisao(6,2);
	alert ( resultado );
	//var resultado2 = c/d;

*/



/*
var a = 1;
var b = 1;
var soma = a + b;
console.log(soma);
*/



function mostraCarros(recebeArrayDeCarros){
	var i;
	for(i = 0;i < recebeArrayDeCarros.length;i++){
		console.log(recebeArrayDeCarros[i]);
	}
}
var ArrayDeCarros = ["ford","camaro","fusca",mostraCarros];

mostraCarros(ArrayDeCarros);
console.log("Quantidade de objetos na var ArrayDeCarros : "+ArrayDeCarros.length);