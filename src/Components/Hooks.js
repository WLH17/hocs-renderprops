import React, { Component } from 'react';

class Hooks extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            name: ''
        }
    }

    handleAdd(){
    this.setState({ count: count + 1})
}

    handleInput(value){
     this.setState({name: e.target.value})
}

    render(){
        return(
            <div>
                {this.state.count}
                 <input onChange={(e) => this.handleInput(e.target.value)}/>
            </div>
        )
    }
}

export default Hooks;