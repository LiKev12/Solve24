import React, { Component } from 'react';
import './App.css';

import BodyText from './components/BodyText';
import MySolution from './components/MySolution';
import MyVisualization from './components/MyVisualization';

import TopSolns from './components/TopSolns';
import Twenty from './components/Twenty';
import SliderAll from './components/SliderAll';
import SliderTop from './components/SliderTop';

class App extends Component {
	render() {
    return (
        <div className="App">
            <div className="AllText">
                <BodyText></BodyText>
                <div id= "mySolution"><MySolution></MySolution></div>
                <div id= "myVisualization"><MyVisualization></MyVisualization></div>
                <Twenty></Twenty>
                <TopSolns></TopSolns>
                <SliderAll></SliderAll>
                <SliderTop></SliderTop>
            </div>
        </div>
    );
  }
}

export default App;
