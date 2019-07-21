import React, { Component } from 'react';

import SliderAll from './SliderAll';
import SliderTop from './SliderTop';

class MyVisualization extends Component {

    render() {
        return (
            <div id="MyVisualization" className="MyVisualization">
                <h1>My Visualizations</h1>
            
                <p>I used a range of 1 to 20 as possible input values <b><i>(a,b,c,d)</i></b>, where <b><i>f (a,b,c,d) = n</i></b> and <b><i>n = number of solutions</i></b>. 
                Since I could only display 4 dimensions at once without compromising readability and clarity, I displayed <b><i>(a,b,c)</i></b> as <b><i>(x,y,z)</i></b> axis values, 
                represented  <b><i>n</i></b> using color and size, and produced a graph for each cross-section value <b><i>d</i></b>.</p>
                
                <h3><b>GRAPH 1</b>: All Solutions</h3>

                <p>For ease of viewing, I instituted a "cut-off" value to make the graph uncluttered, 
                since I am mostly interested in the combinations that have many solutions. Use the slider 
                to scroll through the solutions at various <b><i>d</i></b> values, 
                and use the built-in Plotly tooltip to play around!</p>

                <SliderAll></SliderAll>
                
                <h3><b>GRAPH 2</b>: Top 100 Solutions</h3>

                <p>I also made another plot showing the top 100 combinations with the highest number of solutions. Enjoy!</p>
            
                <SliderTop></SliderTop>
                
            </div>
        );
    }
}

export default MyVisualization;