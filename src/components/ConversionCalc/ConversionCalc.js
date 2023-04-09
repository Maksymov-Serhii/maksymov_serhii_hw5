import React from "react";

const numberMultiplier = {
  half: '0.5',
  oneTwentieth: '0.05'
}

function multiply(number, multiplier) {
  const correctNumber = isNaN(parseFloat(number)) ? 0 : parseFloat(number);
  return correctNumber * parseFloat(numberMultiplier[multiplier]);
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
    const multiplier = this.props.multiplier;

    return (
      <div className="container">
        <div className="input-block">
          <label htmlFor="firstNumber">Введіть число</label>
          <input type="number" value={enteredNumber} onChange={this.handleChange} name="firstNumber" className="input-field"></input>
        </div>
        <ShowResult number={enteredNumber} multiplier={numberMultiplier[multiplier]} result={ this.props.result } />
      </div>
    )
  }
}

class ConversionCalc extends React.Component {
  constructor() {
    super();
    this.state = { firstNumber: '', secondNumber: '' };
    this.handleHalfChange = this.handleHalfChange.bind(this);
    this.handleOneTwentiethChange = this.handleOneTwentiethChange.bind(this);
  }

  handleHalfChange(value) {
    this.setState({firstNumber: value})
  }

  handleOneTwentiethChange(value) {
    this.setState({secondNumber: value})
  }

  render() {
    const { firstNumber, secondNumber } = this.state;
    const aHalf = multiply(this.state.firstNumber, 'half');
    const oneTwentieth = multiply(this.state.secondNumber, 'oneTwentieth');

    return (
      <div className="container">
        <h3>Якийсь калькулятор</h3>
        <NumberInput multiplier="half" enteredNumber={firstNumber} result={aHalf} onNumberChange={this.handleHalfChange} />
        <NumberInput multiplier="oneTwentieth" enteredNumber={secondNumber} result={oneTwentieth} onNumberChange={ this.handleOneTwentiethChange } />
      </div>
    )
  }
}

export default ConversionCalc;
