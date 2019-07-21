import React, { Component } from 'react';

import CodeBlock from './CodeBlock';
import FindAnswer from './FindAnswer';
import ExampleAlgo from '../images/ExampleAlgo.png';

class MySolution extends Component {
    
    render() {
      return(
        <div id="MySolution" name="MySolution">
        <h1>My Solution</h1>
  
        <p>I created a program that takes in 4 numbers and tells you whether they can be arranged 
        to form a valid solution to the game of 24. If a valid solution exists, the program also outputs 
        the valid solution, along with the total number of possible solutions for the given input. Considering time 
        and practicality, I made the input range 1 through 20.</p>
        
        <p>A walkthrough of my code is given below:</p>
        
        <h3>Walkthrough</h3>

        <CodeBlock codeSnippet = 
        {`def solveGame(nums,ops,orders):
    permNums = list(permutations(nums))      # 24 possible
    combOps = list(product(ops,repeat=3))    # 64 possible
    permOrder = list(permutations(orders))   # 6 possible
      
    for i in range(len(list(permNums))):
        for j in range(len(list(combOps))):
            for k in range(len(list(permOrder))):`}
        ></CodeBlock>
        <br></br>
        <p>Sets of numbers are generated as permutations of the input, operations are generated 
        as combinations of the 4 standard arithemtic operations, and the order is generated as a permutation. 
        This resolves to 9216 combinations to account for in total, with <b><i>O(1)</i></b> work done for each combination. </p>
        
        <CodeBlock codeSnippet = 
        {`# evaluates first set of operations
first = helperEvaluate(numList[orderList[0]-1],opList[orderList[0]-1],numList[orderList[0]])

numList[orderList[0]-1] = first
numList[orderList[0]] = first
      
# evaluates second set of operations
second = helperEvaluate(numList[orderList[1]-1], opList[orderList[1]-1], numList[orderList[1]])

numList[orderList[1]-1] = second
numList[orderList[1]] = second
numList[orderList[0]-1] = second
numList[orderList[0]] = second

if orderList[2]==2:
    numList[1] = first
    numList[2] = second

# evaluates third set of operations (final answer)
third = helperEvaluate(numList[orderList[2]-1], opList[orderList[2]-1], numList[orderList[2]])

if third==24:
    record[tuple(numListCopy)] += 1`
        }>
        </CodeBlock>
        <br></br>

        <p>This is the core part of the algorithm. Each operation is done stepwise, in the order generated, 
        with the cumulative result carefully stored inside the array itself. A figure is shown below to clarify the process.</p>

        <img src={ExampleAlgo} width="500" height="400" alt="Sample" />
        <br></br>
        <br></br>


        <p>In the figure above, 2 examples are shown. The <span style={{color: '#609ec6'}}><b>input numbers</b></span> with their respective 
        <span style={{color: '#c68360'}}><b> operations</b></span> are resolved in the <span style={{color: '#c6607e'}}><b>order</b></span> given, and the resulting answer is shown at the bottom. It is 
        important to note that while this algorithm works for 4 out of the 6 possible orderings, it needed to be slightly tweaked for the other 2 orderings 
        (<b>1➝3➝2</b> and <b>3➝1➝2</b>), as shown in the code above. I also created a helper function to perform each operation. For the dividing by 0 case, I set the 
        result to some obscenely large value, effectively ruling out such a combination to be a candidate answer.</p>

        <CodeBlock codeSnippet = 
        {`def helperEvaluate(n1,op,n2):
if op == '+':
    return n1 + n2;
elif op == '-':
    return n1 - n2;
elif op == '/':
    if n2 == 0:
    return -90000
    else:
    return n1 / n2
else:
    return n1 * n2`
        }>
        </CodeBlock>
        <br></br>

        <p>The rest of the code in the Python script goes through plotting and exporting data into csv files. 
        If you are interested, it is available to view on my GitHub repo, just look 
        for <b><a href="https://github.com/LiKev12/Solve24/tree/master/src/scripts/solve24.py">solve24.py</a></b>!</p>

        <p>Below is the actual solver, feel free to play around with it, and test yourself!</p>

        <FindAnswer></FindAnswer>
        <br></br>

        <p>While that was fun to make and test, I also visualized the results using the Plotly library, 
        since I thought it would be interesting to see if there were any visible patterns for combinations 
        that had many solutions.</p>
        </div>
      )
    }
}

export default MySolution;