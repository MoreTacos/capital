import React from 'react';
import capital from '../apis/capital';
import InputBar from './InputBar';

class TestCard extends React.Component {
  state = { current: {}, score: 0 };
  plusScore = () => {
    this.setState({ score: this.state.score + 1 });
    this.newCountry();
  };
  newCountry = async () => {
    let data = await capital.get();
    data = data.data.map(country => {
      return country;
    });
    let current = data[Math.floor(Math.random() * data.length)];
    this.setState({
      current
    });
  };
  componentDidMount() {
    this.newCountry();
  }

  render() {
    return (
      <div id="card">
        <div id="button">
          <button onClick={this.newCountry}>Get Country</button>
        </div>
        <div id="score">
          <span>>Score:</span> {this.state.score}
        </div>
        <div id="input-bar">
          <InputBar current={this.state.current} newCountry={this.plusScore} />
        </div>
        <div id="country-name">{this.state.current.name}</div>
      </div>
    );
  }
}

export default TestCard;
