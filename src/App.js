import React, { Component } from 'react';
import './App.css';

import { BodyText, MySolution, MyVisualization } from './components/BodyText';
import TopSolns from './components/TopSolns';
import Twenty from './components/Twenty';

import styled from 'styled-components';
import Slider from './components/Slider';

const Styles = styled.div`
  .App {
    display: flex;
    justify-content: center;
  }
  .wrapper {
    margin-top: 20vh;
    width: 50%;
  }
`;

class App extends Component {
	render() {
    return (
			<div className="App">
				<div className="BodyText">
                    <BodyText></BodyText>
                    <MySolution></MySolution>
                    <MyVisualization></MyVisualization>
                    <Twenty></Twenty>
                    <TopSolns></TopSolns>
                </div>
			</div>
    );
  }
}
//                    <Styles><Slider color="0074D9"></Slider></Styles>


export default App;
