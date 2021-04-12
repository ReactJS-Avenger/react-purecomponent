import React from 'react';

export default class PureComponentjs extends React.PureComponent{
    constructor(props){
        super(props);

        this.state={
            count: 0
        }
    }

    handleClick=()=>{
        this.setState({count: 0})
    }

    render(){
        console.log("Pure Component render")
        return(
            <div>
                <h1>Pure Component</h1>
                {this.state.count}<br/>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}