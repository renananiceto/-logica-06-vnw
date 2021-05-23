// Crie um objeto que receba ao menos três propriedades sobre você.

let renan ={
    propriedades:'Mussum Ipsum, cacilds vidis litro abertis',
    propriedades2:'Mussum Ipsum, cacilds vidis litro abertis',
    propriedades3:'Mussum Ipsum, cacilds vidis litro abertis'
}


// Adicione uma nova propriedade sem alterar seu objeto inicial.

renan.propriedades4 = 'Mussum Ipsum, cacilds vidis litro abertis'


// Remova uma propriedade desse objeto.

delete renan.propriedades4;

//Mostre no console todas as propriedades desse objeto.

console.log(renan)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro =[{
    nome : 'Rengar',
    Telefone : '(11) 11111-1111',
    amigos : ['amigo','amigo1','amigo2','amigo3','amigo4','amigo5'],
    idade : 18
},
{
    nome : 'Miss fortune',
    Telefone : '(22) 22222-2222',
    amigos : ['amigo','amigo1','amigo2','amigo3','amigo4','amigo5'],
    idade : 19
},
{
    nome : 'Garen',
    Telefone : '(33) 33333-3333',
    amigos : ['amigo','amigo1','amigo2','amigo3','amigo4','amigo5'],
    idade : 16
},
{
    nome : 'yasuo',
    Telefone : '(44) 44444-4444',
    amigos : ['amigo','amigo1','amigo2','amigo3','amigo4','amigo5'],
    idade : 17
},
{
    nome : 'Vi',
    Telefone : '(55) 55555-5555',
    amigos : ['amigo','amigo1','amigo2','amigo3','amigo4','amigo5'],
    idade : 18
},

]

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos [1] )
console.log(cadastro[0].amigos [2] )
console.log(cadastro[0].amigos [3] )
console.log(cadastro[0].amigos [4] )
console.log(cadastro[0].amigos [5] )

// console.log(cadastro.map( item =>item.amigos ) )