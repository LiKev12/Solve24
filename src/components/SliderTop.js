import React from 'react';
import { Slider } from 'react-mdl';
import Plotly from 'react-plotly.js';

import topSolns from '../data/topSoln';

class sliderTop extends React.Component {

    constructor() {
        super();
        this.state = {
            'sliderTopValue': 1,
            'sliderTopMax': 20,
            'sliderTopMin': 1,
            'sliderTopInitial': 1,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Slider min={this.state.sliderTopMin} 
                    max={this.state.sliderTopMax} 
                    defaultValue= {this.state.sliderTopInitial}
                    onChange = {this.handleOnChange}
                    name= 'sliderTopValue'
                    />
                    <br></br>
                    <span style={{color: '#d0a7e2', fontSize: '32px', align: 'center', font: 'bold'}}>d = {this.state.sliderTopValue}</span>
                </div>

                {parseInt(this.state.sliderTopValue) === 1 &&
                    <Plotly
                    data = {topSolns.topSoln1.data}
                    layout = {topSolns.topSoln1.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 2 &&
                    <Plotly
                    data = {topSolns.topSoln2.data}
                    layout = {topSolns.topSoln2.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 3 &&
                    <Plotly
                    data = {topSolns.topSoln3.data}
                    layout = {topSolns.topSoln3.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 4 &&
                    <Plotly
                    data = {topSolns.topSoln4.data}
                    layout = {topSolns.topSoln4.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 5 &&
                    <Plotly
                    data = {topSolns.topSoln5.data}
                    layout = {topSolns.topSoln5.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 6 &&
                    <Plotly
                    data = {topSolns.topSoln6.data}
                    layout = {topSolns.topSoln6.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 7 &&
                    <Plotly
                    data = {topSolns.topSoln7.data}
                    layout = {topSolns.topSoln7.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 8 &&
                    <Plotly
                    data = {topSolns.topSoln8.data}
                    layout = {topSolns.topSoln8.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 9 &&
                    <Plotly
                    data = {topSolns.topSoln9.data}
                    layout = {topSolns.topSoln9.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 10 &&
                    <Plotly
                    data = {topSolns.topSoln10.data}
                    layout = {topSolns.topSoln10.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 11 &&
                    <Plotly
                    data = {topSolns.topSoln11.data}
                    layout = {topSolns.topSoln11.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 12 &&
                    <Plotly
                    data = {topSolns.topSoln12.data}
                    layout = {topSolns.topSoln12.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 13 &&
                    <Plotly
                    data = {topSolns.topSoln13.data}
                    layout = {topSolns.topSoln13.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 14 &&
                    <Plotly
                    data = {topSolns.topSoln14.data}
                    layout = {topSolns.topSoln14.layout}
                    ></Plotly>}        
                {parseInt(this.state.sliderTopValue) === 15 &&
                    <Plotly
                    data = {topSolns.topSoln15.data}
                    layout = {topSolns.topSoln15.layout}
                    ></Plotly>}        
                {parseInt(this.state.sliderTopValue) === 16 &&
                    <Plotly
                    data = {topSolns.topSoln16.data}
                    layout = {topSolns.topSoln16.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 17 &&
                    <Plotly
                    data = {topSolns.topSoln17.data}
                    layout = {topSolns.topSoln17.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 18 &&
                    <Plotly
                    data = {topSolns.topSoln18.data}
                    layout = {topSolns.topSoln18.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 19 &&
                    <Plotly
                    data = {topSolns.topSoln19.data}
                    layout = {topSolns.topSoln19.layout}
                    ></Plotly>}
                {parseInt(this.state.sliderTopValue) === 20 &&
                    <Plotly
                    data = {topSolns.topSoln20.data}
                    layout = {topSolns.topSoln20.layout}
                    ></Plotly>}

            </div>
        )
    };
}

export default sliderTop;