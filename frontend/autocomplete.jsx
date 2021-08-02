import React from 'react';

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputVal:''
    };
  }

  render() {
    let filtered;

    if(this.state.inputVal === '') {
      filtered = this.props.names;
    }

    let renderProps = filtered.map((name, index) => {
      return (<li key={index}>{name}</li>);
    });

    return(
      <div>
        <h1>Autocomplete</h1>
        <div className="autocomplete">
          <input type="text" className="search-input" placeholder="Enter a name to search..."></input>
          <ul className='autocomplete-results'>
            {renderProps}
          </ul>
        </div>
      </div>
    )
  }
}