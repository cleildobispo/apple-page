const imagemVisualizacao = document.getElementById('imagem-visualizacao');

const verdeCipreste ={ 
nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};


const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
    
};


const MeiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = { 
    nome: "Estelar",
    pasta: "imagens-estelar"
};

const RosaClaro = { 
    nome: "Rosa-claro",
    patsa: "imagens-rosa-claro"
};



const opcoesCores = [ verdeCipreste, azulInverno, MeiaNoite, estelar , RosaClaro]

let imagemSelecionada = 1; 

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked') .id ;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-"+ imagemSelecionada + ".jpeg" ;

}