import React from 'react';

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputVal:''
    };

    this.handleClick = this.handleClick.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({inputVal: event.target.textContent})
  }

  inputChange(event) {
    event.preventDefault();
    this.setState({inputVal: event.target.value});
  } 

  render() {
    let filtered;

    if(this.state.inputVal === '') {
      filtered = this.props.names;
    } else {
      filtered = this.props.names.filter((name) => name.toLowerCase().startsWith(this.state.inputVal.toLowerCase()));
    }

    let renderProps = filtered.map((name, index) => {
      return (<li key={index} onClick={this.handleClick}>{name}</li>);
    });

    return(
      <div>
        <h1>Autocomplete</h1>
        <div className="autocomplete">
          <input 
            value={this.state.inputVal} 
            onChange={this.inputChange} 
            type="text" 
            className="search-input" 
            placeholder="Enter a name to search..."
            ></input>
          <ul className='autocomplete-results'>
            {renderProps}
          </ul>
        </div>
      </div>
    )
  }
}