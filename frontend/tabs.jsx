import React from 'react';
import { render } from 'react-dom';

class Headers extends React.Component {
  render() {
    let selectedTab = this.props.selectedTab;
    let tabs = this.props.tabs;
    let headers = tabs.map((tab,index) => {
      let title = tab.title;
      let isSelected = index === selectedTab ? 'selected' : '';

      return (
        <li 
          key = {index}
          className = {isSelected}>
          {title}
        </li>
      )
    });

    return(
      <ul className="tab-headers">
        {headers}
      </ul>
    );
  }
}


export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.selectTab.bind(this);
    this.state = {
      selected: 0
    };
  };

  selectTab(num) {
    this.setState({selected: num});
  }

  render() {
    let selectedTab = this.props.tabs[this.state.selected];
    return(
      <div>
        <h1>Tabs</h1>
        <div className="tabs">
         <Headers
          selectedTab = {this.state.selected}
          onTabClick = {this.selectTab}
          tabs = {this.props.tabs}>  
          </Headers>
        </div>
        <div className='tab-content'>
          <p>{selectedTab.content}</p>
        </div>
      </div>
    )
  }
}
