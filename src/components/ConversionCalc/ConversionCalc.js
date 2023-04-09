import React from "react";

const numberMultiplier = {
  firstMultiplier: 0.5,
  secondMultiplier: 0.05
}

function multiply(number, multiplier) {
  const correctNumber = isNaN(parseFloat(number)) ? 0 : parseFloat(number);
  const result = correctNumber * multiplier;
  const roundedResult = Math.round(result * 1000) / 1000;
  return roundedResult;
}

class ShowResult extends React.Component {
  render() {
    const { number, multiplier, result } = this.props;
    return (
      <div>
        {number === '' ? 0 : number} x {multiplier} = {result}
      </div>
    )
  }
}

class NumberInput extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.props.onNumberChange(value);
  }

  render() {
    const enteredNumber = isNaN(parseFloat(this.props.enteredNumber)) ? '' : parseFloat(this.props.enteredNumber);

    return (
      <div className="input-block">
        <label htmlFor="inputNumber">Введіть число:</label>
        <input type="number" value={enteredNumber} onChange={this.handleChange} name="inputNumber" className="input-field"></input>
      </div>
    )
  }
}

class ConversionCalc extends React.Component {
  constructor() {
    super();
    this.state = { firstNumber: '', secondNumber: '' };
    this.handleFirstInputChange = this.handleFirstInputChange.bind(this);
    this.handleSecondInputChange = this.handleSecondInputChange.bind(this);
  }

  handleFirstInputChange(value) {
    this.setState({firstNumber: value})
  }

  handleSecondInputChange(value) {
    this.setState({secondNumber: value})
  }

  render() {
    const { firstNumber, secondNumber } = this.state;
    const { firstMultiplier, secondMultiplier } = numberMultiplier;
    const firstInputResult = multiply(firstNumber, firstMultiplier);
    const secondInputResult = multiply(secondNumber, secondMultiplier);

    return (
      <div className="container">
        <h3>Якийсь калькулятор</h3>
        <div className="calc-block">
          <NumberInput enteredNumber={ firstNumber } result={ firstInputResult } onNumberChange={ this.handleFirstInputChange } />
          <ShowResult number={ firstNumber } multiplier={ firstMultiplier } result={ firstInputResult } />
        </div>
        <div className="calc-block">
          <NumberInput enteredNumber={ secondNumber } result={ secondInputResult } onNumberChange={ this.handleSecondInputChange } />
          <ShowResult number={ secondNumber } multiplier={ secondMultiplier } result={ secondInputResult } />
        </div>        
      </div>
    )
  }
}

export default ConversionCalc;
