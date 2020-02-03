const PETSHOP = "Petshop DH";

console.log("** " + PETSHOP + " **");

let pets = [{
    nome: "Batman",
    tipo: "cão",
    raca: "vira-lata",
    idade: 2,
    genero: "F",
    vacinado: true,
    servicos: []    
},{
    nome: "Baixinho",
    tipo: "cão",
    raca: "Shnauzer",
    idade: 3,
    genero: "M",
    vacinado: true,
    servicos: ["vacina", "banho", "corte de unha"]
},{
    nome: "Yami",
    tipo: "gato",
    raca: "Sphinx",
    idade: 1,
    genero: "F",
    vacinado: true,
    servicos: ["chip", "banho", "corte de unha"]
},{
    nome: "Galadriel",
    tipo: "gato",
    raca: "Praga do Egito",
    idade: 4,
    genero: "F",
    vacinado: false,
    servicos: ["banho", "lavagem estomacal"]
}, {
    nome: "Reinard",
    tipo: "gato",
    raca: "Amazzo",
    idade: 3,
    genero: "M",
    vacinado: true,
    servicos: ["corte de unha"]
}];

const anoDeNascimento = pet => 2020 - pet.idade;

const vacinarPet = pet => {
    if(!pet.vacinado){
        pet.vacinado = true;
        console.log("Faltava Vacinar, foi feito agora!");
    }else{
        console.log("Ta vacinado");
    }
}

const listarPets = () => {
    console.log(PETSHOP);
    for(i=0; i< pets.length; i++){
        console.log("----------------------------");
        console.log("Nome: " + pets[i].nome);
        console.log("Raça: " + pets[i].raca);
        console.log("Idade: " + pets[i].idade);
        console.log("Genero: " + (pets[i].genero == "F" ? "Femea" : "Macho"));
        console.log("Tipo: " + pets[i].tipo);
        console.log("Vacinado: " + (pets[i].vacinado ? "Sim" : "Não"));
        console.log("Serviços: " + pets[i].servicos);
    }
}

const validarDados = (dadosPet)=>{
    return (
        dadosPet.nome &&
        dadosPet.idade &&
        dadosPet.genero &&
        dadosPet.tipo &&
        dadosPet.raca
    );
}
const adicionarPet = novoPet => {
    if(typeof novoPet == "object" && validarDados(novoPet)){
        novoPet.nome = novoPet.nome.toString();
        novoPet.idade = parseInt(novoPet.idade);

        if(!novoPet.servicos){
            novoPet.servicos = [];
        }

        pets.push(novoPet);
        console.log(novoPet.nome + " Foi adicionado com sucesso!");
    }else{
      console.log(`A entrada não é um objeto, e sim do tipo ${tipoDeEntrada}!`)
    };
};

adicionarPet({
    nome: "Goiabinha",
    tipo: "cão",
    raca: "GoldenRetriever",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["padrão", "banho", "tosa", "corte de unha"]
});

const tosarPet = (pet) =>{
    pet.servicos.push("tosa");
    console.log("Pet tosado!   :)");
};

const darBanhoPet = (pet) =>{
    pet.servicos.push("banho");
    console.log(pet.nome + " Banhado e cheiroso!");
};
const cortarUnhasPet = (pet) => {
    pet.servicos.push("Corte de Unhas");
    console.log( pet.nome + " de unhas Cortadas");
};
// tosarPet(pets[0]);
// darBanhoPet(pets[0]);
// cortarUnhasPet(pets[0]);
// console.log(pets[0]);
let atenderPet = (pet, servicos) => {
    console.log("Bem vindo, " + pet.nome);
    for (let i = 0; i < servicos.length; i++) {
        servicos[i](pet);
    }
    const pagar = () => {
        console.log("Pagamento realizado com sucesso!")
    };

    pagar();
    console.log("Volte sempre!");
};

atenderPet(pets[0], [cortarUnhasPet, darBanhoPet,tosarPet]);
// console.log(pets[0]);

