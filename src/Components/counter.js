import React from 'react';

class counter extends React.Component {
    state = {
        counter: 0

    }
    InCounter =() =>{
        this.setState({counter:this.state.counter+1})
    }
    DeCounter = () => {
        this.setState({counter: this.state.counter-1})
    }
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h2>Counter App</h2>
                <h1>{this.state.counter}</h1>
                <button onClick={this.InCounter}> Increment</button>
                <button onClick={this.DeCounter}> Decrement</button>




            </div>
        )
    }

}
export default counter;
