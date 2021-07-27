import React from 'react';
import { render } from 'react-dom';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };
  };

  render() {
    return(
      <div>
        <h1>Tabs</h1>
      </div>
    )
  }
}