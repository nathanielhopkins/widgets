import React from 'react';
import ReactDOM, { render } from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

let tabs = [
  { 'title': 'tab1', 'content': 'this is the first tab' },
  { 'title': 'tab2', 'content': 'this is the second tab' },
  { 'title': 'tab3', 'content': 'this is the third tab' }
];

function Root() {
  return(
    <div>
      <Clock />
      <Tabs tabs={tabs}/>
    </div>
  );
}
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root/>, document.getElementById("main"));
});