import React, { Component } from 'react';
import Prism from 'prismjs';
import '../styles/prism.css';
import '../styles/pythonHighlight';

class CodeBlock extends Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {

    return(
      <div className="CodeBlock">
            <pre>
                <code className="language-python">
                    {this.props.codeSnippet}
                </code>
            </pre>
      </div>
    )
  }
}

export default CodeBlock;
