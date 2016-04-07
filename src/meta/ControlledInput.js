import React from 'react';

export default class ControlledInput extends React.Component {
  state = {value: ''}

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleClick = () => {
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Print verdi</button>
      </div>
    );
  }
}
