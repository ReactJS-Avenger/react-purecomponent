import React from 'react';

export default class NormalComponent extends React.Component{
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
        console.log("Normal conponent render")
        return(
            <div>
                <h1>Normal Component</h1>
                {this.state.count}<br/>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}