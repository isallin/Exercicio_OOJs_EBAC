class Funcionario{
    constructor(empresa,salario){
        this.empresa = empresa;
        this.salario = salario;
    }

    infoFuncionario() {
        return `Empresa:${this.empresa}
        R$${this.salario}`;
    }
}

class Devs extends Funcionario{
    constructor(empresa,salario,senioridade){
        super(empresa,salario);
        this.senioridade=senioridade;
    }

    infoDevs(){
        return `Desenvolvedor:
        Nível:${this.senioridade}
        ${this.infoFuncionario()}`;
    }
}

class Estag extends Funcionario{
    constructor(empresa,salario,area){
        super(empresa,salario);
        this.area=area;
    }

    infoEstag(){
        return `Estagiário
        Área:${this.area}
        ${this.infoFuncionario()}`;
    }
}

const dev1 = new Devs("Google", 6000, "Júnior");
const estag1 = new Estag("Microsoft", 3500, "Marketing");
const estag2 = new Estag("Oracle", 3000, "Operacional");

console.log(dev1.infoDevs());
console.log(estag1.infoEstag());
console.log(estag2.infoEstag());