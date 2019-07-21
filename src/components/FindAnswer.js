import React, { Component } from 'react';

import Papa from 'papaparse';
import Combinatorics from 'js-combinatorics';

class FindAnswer extends Component {

    constructor(props) {
      super(props);
      this.state = {
          data: '',
          arrCombos: '',
          arrNumSolns: '',
          arrOneSoln: '',
          answer: '',
          a: '',
          b: '',
          c: '',
          d: '',
          permArr: [],
          usedChars: [],
          retainOrder: false,
          printedAnswer: ''
      };
      this.updateData = this.updateData.bind(this);
      this.handleSolve = this.handleSolve.bind(this);
      this.handleToggleOrder = this.handleToggleOrder.bind(this);
    }

    componentWillMount() {
      // Start parse
      var csvFilePath = require("../data/testcsv.csv");
      Papa.parse(csvFilePath, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: this.updateData
      });
    }
  

    handleSolve(data, arrCombos, arrNumSolns, arrOneSoln) {
        let inputNums = String(this.state.a) + ',' + String(this.state.b) + ',' + String(this.state.c) + ',' + String(this.state.d);
        inputNums = inputNums.split(',').map(function(item) {
            return parseInt(item, 10);
        });

        let originalInput = '[' + String(inputNums) + ']';
        let cmb = Combinatorics.permutation(inputNums).toArray();

        // removes duplicate combinations
        cmb = Array.from(new Set(cmb.map(JSON.stringify)), JSON.parse);

        let foundMatch = false;
        let originalSoln = '';
        let allSolns = [];
        let retainOrder = this.state.retainOrder;

        // tracks total number of solutions
        let origTotal = 0;
        let allTotal = 0;

        inputNums = '[' + String(inputNums) + ']';
        cmb.forEach((singleArr) => {
            let chosen = '[' + String(singleArr) + ']';
            for (let i = 0; i < data.length; i++) {
                let userInput = String(arrCombos[i]).replace(/\s/g, '');
                if (userInput===chosen) {
                    // at least one solution found
                    foundMatch = true;

                    // only if matches original input
                    if (chosen === originalInput) {
                        origTotal = parseInt(arrNumSolns[i]);
                    }

                    // all combinations included
                    allTotal += parseInt(arrNumSolns[i]);

                    if (arrNumSolns[i] !== '0') {
                        allSolns.push(arrOneSoln[i]);
                        if (chosen === inputNums) {
                            if (!originalSoln) {
                                originalSoln += arrOneSoln[i];
                            }
                        }
                    }

                }
            }
        });   
        let answerToShow = ''
        if (retainOrder) {
            if (!originalSoln) {
                answerToShow = 'Solution in given order not found :(';
            } else {
                answerToShow = `${origTotal} solutions in given order found. One such solution: ${originalSoln}`;
            }
        } else {
            let length = allSolns.length;
            if (length !== 0) {
                if (length === 1) {
                    if (allTotal === 1) {
                        answerToShow = `Solution (${allTotal}) exists only for one given order: ${allSolns[0]}`
                    } else {
                        answerToShow = `Solutions (${allTotal}) exist only for one given order: ${allSolns[0]}`
                    }
                } else {
                    answerToShow = `${allTotal} solutions found! One such solution: ${allSolns[Math.floor(Math.random() * allSolns.length)]}`;
                }
            } else {
                answerToShow = 'No solutions exist :(';
            }
        }

        if (!foundMatch) {
            answerToShow = 'Could not find match. Each value can be from 1 to 20, separated by a comma.';
        }
        this.setState({
            printedAnswer: answerToShow
        })
    }

    updateData = (result) => {
      const data = result.data;

      let arrCombos = [];
      let arrNumSolns = [];
      let arrOneSoln = [];

      // populates separate arrays for combinations, number of solutions, and example solutions
      data.forEach( (dataItem) => {
        arrCombos.push(dataItem.combo);
        arrNumSolns.push(dataItem.numSolns);
        arrOneSoln.push(dataItem.oneSoln);
      });

      this.setState({
        data: data,
        arrCombos: arrCombos,
        arrNumSolns: arrNumSolns,
        arrOneSoln: arrOneSoln
      });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleInputChange = (e) => {
        e.preventDefault();

        if (!e.target.value || e.target.value.match(/^[0-9]{1,2}?$/)) {
            this.setState({
                [e.target.name]: e.target.value,
            })
        }
    }

    handleToggleOrder = () => {
        this.setState((prevState) => {
            return {
                retainOrder : !prevState.retainOrder
            };
        })
    }



    render() {
      const {data, arrCombos, arrNumSolns, arrOneSoln, a, b, c, d } = this.state;
      return (
          <div className="solverDemo">
            <h1>24 Solver</h1>
            <form onSubmit={this.handleSubmit}>
                <div className='inputNumbersWrap'>
                    <input type='text'
                    className='inputNumbersText' 
                    placeholder='2'
                    value={a} 
                    name='a' 
                    onChange={this.handleInputChange}/>

                    <input type='text' 
                    className='inputNumbersText' 
                    value={b} 
                    name='b' 
                    onChange={this.handleInputChange}/>
                    
                    <input type='text' 
                    className='inputNumbersText' 
                    value={c} 
                    name='c' 
                    onChange={this.handleInputChange}/>

                    <input type='text' 
                    className='inputNumbersText' 
                    value={d} 
                    name='d' 
                    onChange={this.handleInputChange}/>
                </div>

                <h3>Order:</h3>

                <div className="onoffswitch">
                    <input type="checkbox" 
                    name="onoffswitch" 
                    className="onoffswitch-checkbox" 
                    id="myonoffswitch" 
                    defaultChecked
                    onClick = {this.handleToggleOrder}
                    ></input>
                    <label className="onoffswitch-label" htmlFor="myonoffswitch">
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                    </label>
                </div>
                <br></br>
                <p><button 
                onClick={() => this.handleSolve(data, arrCombos, arrNumSolns, arrOneSoln)}
                className="buttonPurple">
                Find Answer
                </button></p>
                <span style={{"fontSize": "18px"}}><b>{this.state.printedAnswer}</b></span>
            </form>
          </div>
      )
    }
  }
  
  export default FindAnswer;