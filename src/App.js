import React, { Component } from 'react';
import './App.css';

import BodyText from './components/BodyText';
import MySolution from './components/MySolution';
import MyVisualization from './components/MyVisualization';

class App extends Component {
	render() {
    return (
        <div className="App">
            <div className="AllText">
                <BodyText></BodyText>
                <div id= "mySolution"><MySolution></MySolution></div>
                <div id= "myVisualization"><MyVisualization></MyVisualization></div>
            </div>
        </div>
    );
  }
}

export default App;
