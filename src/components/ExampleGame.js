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
                <p><b>Given: </b> ({ this.props.inputNums })</p>
                <button 
                onClick = {this.handleToggleVisibility}
                className = "buttonExample"
                >
                {this.state.visibility ? 'Hide Answer' : 'Show Answer'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p><b>Answer: </b>{ this.props.answer }</p>
                    </div>
                )}
            </div>
        )
    };
}

export default Example;