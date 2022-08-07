// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Vendedor"] = 0] = "Vendedor";
    Profissao[Profissao["Palestrante"] = 1] = "Palestrante";
    Profissao[Profissao["Professor"] = 2] = "Professor";
    Profissao[Profissao["AssistenteAdministrativo"] = 3] = "AssistenteAdministrativo";
    Profissao[Profissao["Padeiro"] = 4] = "Padeiro";
    Profissao[Profissao["Atriz"] = 5] = "Atriz";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz
};
var pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
var pessoa3 = {
    nome: 'laura',
    idade: '32',
    profissao: Profissao.Atriz
};
var pessoa4 = {
    nome: 'carlos',
    idade: 19,
    profissao: Profissao.Padeiro
};
var pessoa5 = {
    nome: 'carlos',
    idade: 19
};
console.log(pessoa5.idade);
