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
    idade : '(11) 11111-1111',
    amigos : "kha'zix", 
},
{
    nome : 'Miss fortune',
    idade : '(22) 22222-2222',
    amigos : 'graves', 
},
{
    nome : 'Garen',
    idade : '(33) 33333-3333',
    amigos : 'katarina', 
},
{
    nome : 'yasuo',
    idade : '(44) 44444-4444',
    amigos : "Riven", 
},
{
    nome : 'Vi',
    idade : '(55) 55555-5555',
    amigos : 'jinx', 
},

]

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos )
console.log(cadastro[1].amigos )
console.log(cadastro[2].amigos )
console.log(cadastro[3].amigos )
console.log(cadastro[4].amigos )

console.log(cadastro.map( item =>item.amigos ) )