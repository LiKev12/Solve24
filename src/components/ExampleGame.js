import React, { Component } from 'react';

class Example extends Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        }
    };
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            };
        })
    };
    render() {
        return (
            <div className= "Example">
                <h1>Example</h1>
                <p><b>Given: </b> ({ this.props.inputNums })</p>
                <button onClick = {this.handleToggleVisibility}>{this.state.visibility ? 'Hide Answer' : 'Show Answer'}</button>
                {this.state.visibility && (
                    <div>
                        <p><b>Answer: </b>{ this.props.answer }</p>
                    </div>
                )}
            </div>
        )
    };
}


// <h1>
// Example {this.props.inputNums}
// </h1>
// <p>{this.props.answer}</p>

export default Example;