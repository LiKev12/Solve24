import React from 'react';

class Twenty extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }
    handleToggleVisibility() {
        console.log('hi');
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            };
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Some deets for ya!</p>
                    </div>
                )}
            </div>
        )
    };
}

export default Twenty;