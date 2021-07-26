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
  
  render() {
    return(
      <div>
        <h1>Clock</h1>
      </div>
    );
  }
};
