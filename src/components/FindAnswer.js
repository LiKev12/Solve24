import React, { Component } from 'react';
import Papa from 'papaparse';
import Combinatorics from 'js-combinatorics';


class FindAnswer extends Component {

    constructor(props) {
      super(props);
      this.state = {
          data: '',
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
        // Here this is also available. So we can call our custom class method
        complete: this.updateData
      });
    }
  

    handleSolve(data) {
        let inputNums = String(this.state.a) + ',' + String(this.state.b) + ',' + String(this.state.c) + ',' + String(this.state.d);
        inputNums = inputNums.split(',');
        for (let i = 0; i < inputNums.length; i++) {
            inputNums[i] = parseInt(inputNums[i]);
        }
        let cmb = Combinatorics.permutation(inputNums);
        cmb = cmb.toArray()

        let arrCombos = [];
        let arrNumSolns = [];
        let arrOneSoln = [];
        let foundMatch = false;
        let originalSoln = '';
        let allSolns = [];
        let retainOrder = this.state.retainOrder;

        data.forEach( (dataItem) => {
            arrCombos.push(dataItem.combo);
            arrNumSolns.push(dataItem.numSolns);
            arrOneSoln.push(dataItem.oneSoln);
        });
        inputNums = '[' + String(inputNums) + ']';
        cmb.forEach((singleArr) => {
            let chosen = '[' + String(singleArr) + ']';
            for (let i = 0; i < data.length; i++) {
                let userInput = String(arrCombos[i]).replace(/\s/g, '');
                if (userInput===chosen) {
                    foundMatch = true;

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
                // console.log('Solution in given order not found');
                answerToShow = 'Solution in given order not found';
            } else {
                // console.log('Solution in given order found:', originalSoln);
                answerToShow = 'Solution in given order found: ' +  originalSoln;
            }
        } else {
            let length = allSolns.length;
            if (length !== 0) {
                if (length === 1) {
                    // console.log("1 Solution Exists:", allSolns[0]);
                    answerToShow = 'Solution in given order found: ' +  allSolns[0];
                } else {
                    // console.log(`${length} solutions found! One such solution:`, allSolns[Math.floor(Math.random() * allSolns.length)]);
                    answerToShow = `${length} solutions found! One such solution: ` + allSolns[Math.floor(Math.random() * allSolns.length)];
                }
            } else {
                // console.log('No solutions exist');
                answerToShow = 'No solutions exist';
            }
        }

        if (!foundMatch) {
            // console.log('Could not find match. Each value can be from 1 to 20, separated by a comma.')
            answerToShow = 'Could not find match. Each value can be from 1 to 20, separated by a comma.';
        }
        this.setState({
            printedAnswer: answerToShow
        })
    }

    updateData = (result) => {
      const data = result.data;
      this.setState({data: data});
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
        // this.setState({
        //     [e.target.name]: e.target.value,
        // })
    }

    handleToggleOrder = () => {
        this.setState((prevState) => {
            return {
                retainOrder : !prevState.retainOrder
            };
        })
    }



    render() {
      const {data, a, b, c, d } = this.state;
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
                onClick={() => this.handleSolve(data)}
                className="buttonPurple">
                Find Answer
                </button></p>
                <span><b>{this.state.printedAnswer}</b></span>
            </form>
          </div>
      )
    }
  }
  
  export default FindAnswer;