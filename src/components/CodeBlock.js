import React, { Component } from 'react';

class CodeBlock extends Component {
  render() {
    return(
      <div className="CodeBlock">
        <pre>
            Code goes here
        </pre>
      </div>
    )
  }
}

//<pre style="margin: 0; line-height: 125%">    i <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">12345</span>
// <span style="color: #008800; font-weight: bold">def</span> <span style="color: #0066BB; font-weight: bold">f</span>(<span style="color: #007020">self</span>):
// <span style="color: #008800; font-weight: bold">return</span> <span style="background-color: #fff0f0">&#39;hello world&#39;</span>
// </pre></div>

export default CodeBlock;
