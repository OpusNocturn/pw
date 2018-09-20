
function validaformulario() {
			
		var nome = document.forms["forma1"]["nome"].value;
		if (nome == ""){
			alert("O campo 'Nome' não pode ficar em branco.");
		}
	
		
		var cidade = document.forms["forma1"]["cidade"].value;
		if(cidade == "") {
			alert("O campo 'Cidade' não pode ficar em branco.");
		}
		
		
		var estado = document.forms["forma1"]["estado"].value;
		if(estado == "") {
			alert("O campo 'Estado' não pode ficar em branco.")
		}
		
		
		
		var uf = document.forms["forma1"]["uf"].value;
		if (uf == "") {
			alert("O campo 'UF' não pode ficar em branco.")
		}
		
		
		
		var cep = document.forms["forma1"]["cep"].value;
		if (cep == "") {
			alert("O campo 'CEP' não pode ficar em branco.")
		}
	
	
	
		var pais = document.forms ["forma1"]["pais"].value;
		if (pais == ""){
			alert("O campo 'PAÍS' não pode ficar em branco.")
		}
		
		var cpf = document.forms ["forma1"]["cpf"].value;
		if (cpf == ""){
			alert("O campo 'CPF' não pode ficar em branco.")
		}
		
		if(cpf.length != 11){
			alert("CPF inválido.")
			forma1.cpf.focus();
			return false;
		}
		
	
		
		
		
}
		
//////////////////
		
	