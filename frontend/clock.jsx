import React from 'react';
import { ProgressPlugin } from 'webpack';

export default class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    return(
      <div>
        <h1>Clock</h1>
      </div>
    );
  }
};
