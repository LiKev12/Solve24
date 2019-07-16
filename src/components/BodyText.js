import React, { Component } from 'react';
import Example from './ExampleGame';
import CodeBlock from './CodeBlock';

class BodyText extends Component {
  render() {
    return(
      <div id="BodyText">
        <h1>The Game of 24</h1>

        <a href="#mySolution">Already know the game? See my work!</a>

        <p> <b>Rules</b>: You are given 4 numbers and are tasked with manipulating the numbers 
        to produce the desired result, 24. Any arithmetic operation is fair game 
        (add, subtract, multiply, and divide), but you have to use all 4 numbers. 
        The orders of operation are also up to you, as in, you may perform operations 
        in any sequence, provided you follow the stated rules. </p>

        <p>There may be 0 or more solutions per any given 4 numbers.</p>

        <p>Let's look at an example.</p>

        <div>        
            <Example inputNums = "1, 2, 3, 4" answer = "2 · (3 + 4 + 5)"></Example>
        </div>

        <p>Seems simple, right? Well, if that was easy for you, try this one.</p>

        <div>        
            <Example inputNums = "2, 4, 8, 13" answer = "13 · 2 - 8 / 4"></Example>
        </div>

        <p>Still too easy? Try these:</p>

        <div>        
            <Example id= "Example" inputNums = "1, 3, 4, 6" answer = "6 / (1 - 3 / 4)"></Example>
        </div>

        <div>        
            <Example inputNums = "2, 2, 13, 13" answer = "(2 - 2 / 13) · 13"></Example>
        </div>
        
        <p>If you’re like me, you probably got stuck on at least one of these, 
        but also thought to yourself “I shoulda known that!” after 
        prematurely clicking the “See Solution” button.</p>

        <p>This game is actually pretty popular amongst elementary school kids, 
        as a way to make mental math fun. But you might be wondering, 
        just how hard is this game really, and how is it relevant to computation?</p>

        <p>We are given 7 blanks, each blank representing either a number or an operation. </p>

        <p>There are 4 possible numbers in the 1st number slot, 3 possible numbers 
        in the 2nd number slot, 2 possible numbers in the 3rd number slot, and only 
        1 possible number to be placed in the 4th number slot. This results in 4 · 3 · 2 · 1 = 24 ways 
        that the numbers can be arranged.</p>

        <p>As for operations, there are 3 slots, and 4 operations (add, subtract, multiply, divide) 
        for each slot. Therefore, we have 4 · 4 · 4 = 64 ways that the operations can be arranged.</p>

        <p>But that’s not all. There are 6 possible orders for the operations. 
        This may be slightly trickier to understand, but think of each operation as fixed in place. 
        From the diagram above, the first operation binds the 1st and 2nd numbers, 
        the second operation binds the 2nd and 3rd numbers, and the third operation binds 
        the 3rd and 4th numbers. We can therefore choose which order to perform the operations in, 
        giving us 6 possible combinations of orders: (1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), and (3,2,1).</p>

        <p>All in all, we have 24 · 64 · 6 combinations for EACH input of 4 numbers, 
        giving us <b>9,216</b> combinations total. With the rules clearly defined, I created a program to solve this game.</p>



      </div>
    )
  }
}

class MySolution extends Component {
    
    render() {
      return(
        <div id="BodyText">
        <h1>My Solution</h1>
  
        <p>I created a program that takes in 4 numbers and tells you whether they can be arranged 
        to form a valid solution to the game of 24. If a valid solution exists, the program also outputs 
        the valid solution, along with the total number of possible solutions for the given input.</p>
        
        <p>A walkthrough of my code is given below:</p>
        
        <p><b>WALKTHROUGH</b></p>

        <CodeBlock></CodeBlock>
        
        <p>While that was fun to make and test, I also visualized the results using the Plotly library, 
        since I thought it would be interesting to see if there were any visible patterns for combinations 
        that had many solutions.</p>
        
        <h1>Visualizations</h1>
        
        <p>I used a range of 1 through 20 as possible values for input values <b><i>(a,b,c,d)</i></b>, where <b><i>f(a,b,c,d) = n</i></b> and <b><i>n = number of solutions </i></b>. 
        Since I could only display 4 dimensions at once without compromising readability and clarity, I displayed <b><i>(a,b,c)</i></b> as <b><i>(x,y,z)</i></b> axis values, 
        used color and size to represent <b><i>n</i></b>, and produced a graph for each cross-section value <b><i>d</i></b>.</p>
        
        <p>Use the slider to scroll through the solutions at various d values. As a note, 
        I instituted a “cut-off” value to make the graph cleaner, since I am mostly interested in the 
        combinations that have many solutions.</p>
        
        <p><b>GRAPH 1</b></p>
        
        <p>I also made another plot showing the top 100 combinations with the highest number of solutions. Enjoy!</p>
        
        <p><b>GRAPH 2</b></p>
        </div>
      )
    }
  }

export { BodyText, MySolution };
