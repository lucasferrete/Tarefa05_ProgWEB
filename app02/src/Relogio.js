import React from 'react';

class Relogio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    
    render(){

        var mostrarHora = this.state.date.getHours("00") + ':' + this.state.date.getMinutes("00") + ':' + this.state.date.getSeconds("00");

        return (
            <div>
                <h1>Olá, React!</h1>
                 <h1>Agora é {mostrarHora}</h1>
            </div>
        );
    }
}

export default Relogio;