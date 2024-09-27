function exibirArray() {
    let fruits = ["maçã", "banana", "laranja", "manga"];
    let output = "<strong>Array de Frutas:</strong><br>";
    output += "Total de Frutas: " + fruits.length + "<br>";
    
    fruits.forEach(function(fruit, index) {
        output += (index + 1) + ". " + fruit + "<br>";
    });
    
    document.getElementById("arrayOutput").innerHTML = output; // Corrigido "ducument" para "document"
}

// Função para mostrar objeto

function exibirObjeto() {
    let pessoa = {nome: "Maria", idade: 30, profissão: "Engenharia"}; // Corrigido "Idade" para "idade"
    
    let output = "<strong>Objeto Pessoa:</strong><br>";
    output += "Nome: " + pessoa.nome + "<br>";
    output += "Idade: " + pessoa.idade + "<br>";
    output += "Profissão: " + pessoa.profissão + "<br>";
    
    document.getElementById("objectOutput").innerHTML = output; // Corrigido espaço extra
}


  