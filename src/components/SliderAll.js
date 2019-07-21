import React from 'react';
import { Slider } from 'react-mdl';
import Plotly from 'react-plotly.js';

import allSolns from '../data/allSoln';
import topSoln from '../data/topSoln';

class SliderAll extends React.Component {

    constructor() {
        super();
        this.state = {
            'sliderAllValue': 1,
            'sliderAllMax': 20,
            'sliderAllMin': 1,
            'sliderAllInitial': 1,
            'whichPlot': ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            'whichPlot': 'allSolns.allSoln1'
        })
    }

    handleOnChange(e) {
        e.preventDefault();
        let plotToUse = 'allSolns.allSoln' + String(e.target.value);
        console.log('pname',plotToUse);
        this.setState({
            [e.target.name]: e.target.value,
            'whichPlot': String(plotToUse)
        });
        // console.log(this.state.whichPlot);
    }

    render() {
        // let dataToUse = this.state.whichPlot + '.data';
        // let layoutToUse = this.state.whichPlot + '.layout';

        return (
            <div>
                <h1>All Slider</h1>
                <div>
                    <Slider min={this.state.sliderAllMin} 
                    max={this.state.sliderAllMax} 
                    defaultValue= {this.state.sliderAllInitial}
                    onChange = {this.handleOnChange}
                    name= 'sliderAllValue'
                    />
                    d: {this.state.sliderAllValue}
                </div>

                {this.state.sliderAllValue == 1 &&
                    <Plotly
                    data = {allSolns.allSoln1.data}
                    layout = {allSolns.allSoln1.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 2 &&
                    <Plotly
                    data = {allSolns.allSoln2.data}
                    layout = {allSolns.allSoln2.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 3 &&
                    <Plotly
                    data = {allSolns.allSoln3.data}
                    layout = {allSolns.allSoln3.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 4 &&
                    <Plotly
                    data = {allSolns.allSoln4.data}
                    layout = {allSolns.allSoln4.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 5 &&
                    <Plotly
                    data = {allSolns.allSoln5.data}
                    layout = {allSolns.allSoln5.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 6 &&
                    <Plotly
                    data = {allSolns.allSoln6.data}
                    layout = {allSolns.allSoln6.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 7 &&
                    <Plotly
                    data = {allSolns.allSoln7.data}
                    layout = {allSolns.allSoln7.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 8 &&
                    <Plotly
                    data = {allSolns.allSoln8.data}
                    layout = {allSolns.allSoln8.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 9 &&
                    <Plotly
                    data = {allSolns.allSoln9.data}
                    layout = {allSolns.allSoln9.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 10 &&
                    <Plotly
                    data = {allSolns.allSoln10.data}
                    layout = {allSolns.allSoln10.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 11 &&
                    <Plotly
                    data = {allSolns.allSoln11.data}
                    layout = {allSolns.allSoln11.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 12 &&
                    <Plotly
                    data = {allSolns.allSoln12.data}
                    layout = {allSolns.allSoln12.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 13 &&
                    <Plotly
                    data = {allSolns.allSoln13.data}
                    layout = {allSolns.allSoln13.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 14 &&
                    <Plotly
                    data = {allSolns.allSoln14.data}
                    layout = {allSolns.allSoln14.layout}
                    ></Plotly>}        
                {this.state.sliderAllValue == 15 &&
                    <Plotly
                    data = {allSolns.allSoln15.data}
                    layout = {allSolns.allSoln15.layout}
                    ></Plotly>}        
                {this.state.sliderAllValue == 16 &&
                    <Plotly
                    data = {allSolns.allSoln16.data}
                    layout = {allSolns.allSoln16.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 17 &&
                    <Plotly
                    data = {allSolns.allSoln17.data}
                    layout = {allSolns.allSoln17.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 18 &&
                    <Plotly
                    data = {allSolns.allSoln18.data}
                    layout = {allSolns.allSoln18.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 19 &&
                    <Plotly
                    data = {allSolns.allSoln19.data}
                    layout = {allSolns.allSoln19.layout}
                    ></Plotly>}
                {this.state.sliderAllValue == 20 &&
                    <Plotly
                    data = {allSolns.allSoln20.data}
                    layout = {allSolns.allSoln20.layout}
                    ></Plotly>}

            </div>
        )
    };
}

export default SliderAll;