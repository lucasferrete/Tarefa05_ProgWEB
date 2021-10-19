import React from "react";

class Retangulo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comprimento: 8,
            largura: 5
        };
    }

    mudarLargura = () => {
        this.setState({largura: 6});
    }

    render(){
        return(
            <div>
                <h1>A área do triângulo é: {this.state.comprimento * this.state.largura}</h1>
                <button type="button" onClick={this.mudarLargura}>Mudar largura</button>
            </div>
        )
    }
}

export default Retangulo;