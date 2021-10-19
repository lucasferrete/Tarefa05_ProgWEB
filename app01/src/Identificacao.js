import React from 'react';

class Identificacao extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nome: "Lucas",
            sobrenome: "Ferrete",
            idade: 19
        };
    }
    render() {
        return (
            <div>
                <h1>Olá, meu nome é {this.state.nome} {this.state.sobrenome}</h1>
                <h1>Eu tenho {this.state.idade} anos</h1>
            </div>
        );
    }
}

export default Identificacao;