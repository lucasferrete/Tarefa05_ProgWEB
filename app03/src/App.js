import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        contador: 0
    };
  }

  incrementar = () => {
    this.setState({contador: this.state.contador + 1});
  }

  decrementar = () => {
    this.setState({contador: this.state.contador - 1});
  }
  
  zerar = () => {
    this.setState({contador: 0});
  }

  render() {
    return(
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button type="button" onClick={this.incrementar}>Incrementa</button>||
        <button type="button" onClick={this.decrementar}>Decrementa</button>||
        <button type="button" onClick={this.zerar}>Zerar contador</button>
      </div>
    )
  }
}

export default App;