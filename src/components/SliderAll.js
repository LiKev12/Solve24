import React from 'react';
import { Slider } from 'react-mdl';

class SliderAll extends React.Component {

    constructor() {
        super();
        this.state = {
            'sliderAllValue': 10,
            'sliderAllMax': 20,
            'sliderAllMin': 1,
            'sliderAllInitial': 10,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        e.preventDefault();
        console.log('Slider Value', this.state.sliderAllValue);
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>All Slider</h1>
                {/* Default slider */}
                <div>
                    <Slider min={this.state.sliderAllMin} 
                    max={this.state.sliderAllMax} 
                    defaultValue= {this.state.sliderAllInitial}
                    onChange = {this.handleOnChange}
                    name= 'sliderAllValue'
                    className= 'sliderAll'
                    />
                    d: {this.state.sliderAllValue}
                </div>

            </div>
        )
    };
}

export default SliderAll;