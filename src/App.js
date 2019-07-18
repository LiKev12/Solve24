import React, { Component } from 'react';
import './App.css';

import { BodyText, MySolution } from './components/BodyText';
import TopSolns from './components/TopSolns';
import Twenty from './components/Twenty';
// import FindAnswer from './components/FindAnswer';
// import Example from './components/ExampleGame'

import styled from 'styled-components';
import Slider from './components/Slider';
import FindAnswer from './components/FindAnswer';


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
					<TopSolns></TopSolns>
                    <Twenty></Twenty>
                    <FindAnswer></FindAnswer>
                    <Styles><Slider color="0074D9"></Slider></Styles>
                </div>
			</div>
    );
  }
}

// <Styles>
// <div className="App">
// 	<div className="wrapper">
// 		<h1>Color Picker</h1>
// 		<Slider color="#0074D9" />
// 	</div>
// </div>
// </Styles>

export default App;
