import React from 'react';

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputVal = ''
    }
  }

  render() {
    return(
      <div>
        <h1>Autocomplete</h1>
        <div className="autocomplete">

        </div>
      </div>
    )
  }
}