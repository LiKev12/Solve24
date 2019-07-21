import React, { Component } from 'react';
import Example from './ExampleGame';

class BodyText extends Component {
  render() {
    return(
      <div id="BodyText">
        <h1>The Game of 24</h1>

        <a href="https://github.com/LiKev12/Solve24"><b>My GitHub</b></a>
        <br></br>
        <br></br>
        <a href="#mySolution"><b>Already know the game? See my solution!</b></a><br></br>
        <a href="#myVisualization"><b>Know the solution and just want to see pretty graphs?</b></a>
        <br></br>
        <br></br>


        <p><b>Rules</b>: You are given 4 numbers and are tasked with manipulating the numbers 
        to produce the desired result, 24. Any arithmetic operation is fair game 
        (add, subtract, multiply, and divide), but you have to use all 4 numbers. 
        The orders of operation are also up to you, as in, you may perform operations 
        in any sequence, provided you follow the stated rules.</p>

        <p><i>There may be 0 or more solutions per any given 4 numbers.</i></p>

        <p>Let's look at an example.</p>

        <div>        
            <Example inputNums = "2, 3, 4, 5" answer = "2 · (3 + 4 + 5)"></Example>
        </div>

        <br></br>
        <p>Seems simple, right? Well, if that was easy for you, try this one.</p>

        <div>        
            <Example inputNums = "2, 4, 8, 13" answer = "13 · 2 - 8 / 4"></Example>
        </div>

        <br></br>
        <p>Still too easy? Try these:</p>

        <div>        
            <Example id= "Example" inputNums = "1, 3, 4, 6" answer = "6 / (1 - 3 / 4)"></Example>
        </div>

        <br></br>

        <div>        
            <Example inputNums = "2, 2, 13, 13" answer = "(2 - 2 / 13) · 13"></Example>
        </div>

        <br></br>
        <p>If you’re like me, you probably got stuck on at least one of these, 
        but also thought to yourself “I shoulda known that!” after 
        prematurely clicking the “See Solution” button.</p>

        <p>This game is actually pretty popular amongst elementary school kids, 
        as a way to make mental math fun. But you might be wondering, 
        just how hard is this game really, and how is it relevant to computation?</p>

        <p>To answer both of these questions, let's break down the problem.</p>

        <p>We are given 7 blanks, each blank representing either a number or an operation. 
        There are 4 possible numbers in the 1st number slot, 3 possible numbers 
        in the 2nd number slot, 2 possible numbers in the 3rd number slot, and only 
        1 possible number to be placed in the 4th number slot. This results in 4 · 3 · 2 · 1 = 24 ways 
        that the numbers can be arranged. As for operations, there are 3 slots, and 4 operations (add, subtract, multiply, divide) 
        for each slot. Therefore, we have 4 · 4 · 4 = 64 ways that the operations can be arranged.</p>

        <p>But that’s not all. There are 6 possible orders for the operations. 
        This may be slightly trickier to understand, but think of each operation as fixed in place, as in, 
        the first operation binds the 1st and 2nd numbers, 
        the second operation binds the 2nd and 3rd numbers, and the third operation binds 
        the 3rd and 4th numbers. We can therefore choose which order to perform the operations in, 
        giving us 6 possible combinations of orders: (1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), and (3,2,1).</p>

        <p>All in all, we have 24 · 64 · 6 combinations, 
        giving us <b>9,216</b> combinations total for EACH input of 4 numbers. 
        With the rules clearly defined, I created a program to solve this game.</p>
      </div>
    )
  }
}

export default BodyText;
