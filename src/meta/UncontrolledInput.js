import React from 'react';

export default class UncontrolledInput extends React.Component {
  handleClick = () => {
    const inputNode = document.getElementById('input');
    console.log(inputNode.value);
  }

  render() {
    return (
      <div>
        <input id="input" />
        <button onClick={this.handleClick}>Print verdi</button>
      </div>
    )
  }
}
