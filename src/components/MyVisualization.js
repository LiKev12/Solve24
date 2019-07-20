import React, { Component } from 'react';

import CodeBlock from './CodeBlock';
import FindAnswer from './FindAnswer';

class MyVisualization extends Component {

    render() {
        return (
            <div id="MyVisualization" className="MyVisualization">
                <h1>My Visualizations</h1>
            
                <p>I used a range of 1 through 20 as possible values for input values <b><i>(a,b,c,d)</i></b>, where <b><i>f(a,b,c,d) = n</i></b> and <b><i>n = number of solutions </i></b>. 
                Since I could only display 4 dimensions at once without compromising readability and clarity, I displayed <b><i>(a,b,c)</i></b> as <b><i>(x,y,z)</i></b> axis values, 
                used color and size to represent <b><i>n</i></b>, and produced a graph for each cross-section value <b><i>d</i></b>.</p>
                
                <p>Use the slider to scroll through the solutions at various <b><i>d</i></b> values. As a note, 
                I instituted a “cut-off” value to make the graph cleaner, since I am mostly interested in the 
                combinations that have many solutions.</p>
                
                <p><b>GRAPH 1</b></p>
                
                <p>I also made another plot showing the top 100 combinations with the highest number of solutions. Enjoy!</p>
                
                <p><b>GRAPH 2</b></p>
            </div>
        );
    }
}

export default MyVisualization;