import React, { Component } from 'react'

class Greet extends Component {
    constructor(){
        super()
        this.state = { count: 'Zero' } 
    }
    startCounter = () => {
        if(this.state.count === 'Zero'){
            this.setState({count: 1});
            return;
        }
        if(this.state.count === 10){
            this.setState({count: 'Zero'});
            return;
        }
        this.setState({count: this.state.count + 1})
    }
    render() { 
        return (
            <div>
                <label htmlFor="">{this.state.count}</label>
                <button onClick={this.startCounter}>Counter</button>
            </div>
        );
    }
}
 
export default Greet;

