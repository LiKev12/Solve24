import React, { Component } from 'react';
import Plotly from 'react-plotly.js';

// var Plotly = require('plotly')('LiKevin12', 'kiVsTvzqaindbLbzGHmc');

class TopSolns extends Component {
    
  render() {
    return(
      <div>
        <h1>Top 100 Solutions</h1>
            <Plotly
            data={[
                {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
            ></Plotly>
      </div>
    )
  }
}


export default TopSolns;

