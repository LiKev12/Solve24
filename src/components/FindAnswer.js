import React, { Component } from 'react';
import Papa from 'papaparse';
import Combinatorics from 'js-combinatorics';


class FindAnswer extends Component {

    constructor(props) {
      // Call super class
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
          retainOrder: false
      };
  
      // Bind this to function updateData (This eliminates the error)
      this.updateData = this.updateData.bind(this);
      this.handleSolve = this.handleSolve.bind(this);
      this.findPermutations = this.findPermutations.bind(this);
    }

    // componentDidMount() {
    //     this.setState({
    //         inputNums: '1,1,4,3',
    //     })
    // }
  
    componentWillMount() {
      // Your parse code, but not seperated in a function
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
        
        // console.log('inputNums',this.state.inputNums);
        // this.setState({
        //     'inputNums': this.state.a + ',' + this.state.b + ',' + this.state.c + ',' + this.state.d,
        //     // 'permArr': this.setState(this.findPermutations(this.state.inputNums))
        // })
        let inputNums = String(this.state.a) + ',' + String(this.state.b) + ',' + String(this.state.c) + ',' + String(this.state.d);
        inputNums = inputNums.split(',');
        for (let i = 0; i < inputNums.length; i++) {
            inputNums[i] = parseInt(inputNums[i]);
        }
        // inputNums.forEach( (singleNum) => {
        //     singleNum = parseInt(singleNum);
        // })
        console.log('final',inputNums);
        // console.log('again',String(inputNums));

        // console.log('findPerm',this.findPermutations(this.state.inputNums.split(',')));

        let cmb = Combinatorics.permutation(inputNums);
        cmb = cmb.toArray()
        // console.log('cmb',cmb);
        // console.log(inputNums.split(','))

        let arrCombos = [];
        let arrNumSolns = [];
        let arrOneSoln = [];
        let foundMatch = false;
        let originalSoln = '';
        let allSolns = [];
        let retainOrder = this.state.retainOrder;
        console.log('retainOrder set to', retainOrder);

        data.forEach( (dataItem) => {
            arrCombos.push(dataItem.combo);
            arrNumSolns.push(dataItem.numSolns);
            arrOneSoln.push(dataItem.oneSoln);
        });
        // console.log('inputNums',inputNums);
        inputNums = '[' + String(inputNums) + ']';
        // console.log(inputNums);
        cmb.forEach((singleArr) => {
            let chosen = '[' + String(singleArr) + ']';
            // console.log(chosen);
            for (let i = 0; i < data.length; i++) {
                let userInput = String(arrCombos[i]).replace(/\s/g, '');
                if (userInput===chosen) {
                    foundMatch = true;

                    if (arrNumSolns[i] !== '0') {
                        // console.log("Answer:",arrOneSoln[i]);
                        allSolns.push(arrOneSoln[i]);
                        if (chosen === inputNums) {
                            originalSoln += arrOneSoln[i];
                            // console.log("Original Soln:", arrOneSoln[i]);
                        }
                    }

                }
            }
        });   
        if (retainOrder) {
            if (!originalSoln) {
                console.log('Solution in given order not found');
            } else {
                console.log('Solution in given order found:', originalSoln);
            }
        } else {
            let length = allSolns.length;
            if (length !== 0) {
                if (length === 1) {
                    console.log("1 Solution Exists:", allSolns[0]);
                } else {
                    console.log(`${length} solutions found! One such solution:`, allSolns[Math.floor(Math.random() * allSolns.length)]);
                }
            }
        }

        if (!foundMatch) {
            console.log('Could not find match. Each value can be from 1 to 20, separated by a comma.')
        }
        // console.log(this.state.a,this.state.b,this.state.c,this.state.d);
    }

    updateData(result) {
      const data = result.data;
      this.setState({data: data});
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    findPermutations(inputNums) {
        if (this.state.permArr.length>25) {
            this.setState({
                permArr: []
            })
        }
        let permArr = this.state.permArr;
        let usedChars = this.state.usedChars;
        var i, ch;
        if (permArr.length>25) {
            permArr = [];
        }
        for (i = 0; i < inputNums.length; i++) {
          ch = inputNums.splice(i, 1)[0];
          usedChars.push(ch);
          if (inputNums.length === 0) {
            if (permArr.length<= 25) {
                permArr.push(usedChars.slice());
            }
          }
          this.findPermutations(inputNums);
          inputNums.splice(i, 0, ch);
          usedChars.pop();
        }
        return permArr;
      };



    render() {
      const {data, a, b, c, d } = this.state;
      return (
          <div>
            <h1>Forms and Inputs</h1>
            <p>Input is: {a},{b},{c},{d}</p>
            <form onSubmit={this.handleSubmit}>
                <p><input type='text' 
                placeholder='2'
                value={a} 
                name='a' 
                onChange={this.handleInputChange}/></p>
                <p><input type='text' 
                value={b} 
                name='b' 
                onChange={this.handleInputChange}/></p>
                <p><input type='text' 
                value={c} 
                name='c' 
                onChange={this.handleInputChange}/></p>
                <p><input type='text' 
                value={d} 
                name='d' 
                onChange={this.handleInputChange}/></p>
                <p><button onClick={() => this.handleSolve(data)}>Find Answer</button></p>
            </form>
          </div>
      )
    }
  }
  
  export default FindAnswer;
