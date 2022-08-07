// Como podemos melhorar o esse código usando TS? 

enum Profissao {
    Vendedor,
    Palestrante,
    Professor,
    AssistenteAdministrativo,
    Padeiro,
    Atriz
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao?: Profissao
}

let pessoa1 = {
  nome : 'maria',
  idade : 29,
  profissao: Profissao.Atriz
};


let pessoa2 = {
  nome : 'roberto',
  idade : 19,
  profissao: Profissao.Padeiro,
}


let pessoa3 = {
    nome: 'laura',
    idade: '32',
    profissao: Profissao.Atriz
};

let pessoa4 = {
    nome : 'carlos',
    idade : 19,
    profissao: Profissao.Padeiro
}

let pessoa5 = {
  nome : 'carlos',
  idade : 19,
}