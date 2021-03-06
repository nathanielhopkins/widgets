import React from 'react';
import ReactDOM, { render } from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import AutoComplete from './autocomplete';

let tabs = [
  { 'title': 'tab1', 'content': 'this is the first tab' },
  { 'title': 'tab2', 'content': 'this is the second tab' },
  { 'title': 'tab3', 'content': 'this is the third tab' }
];

let names = [
  'Dick Chiclets',
  'Mic Flair',
  'Nancy Drew',
  'Thomas Dwayne',
  'Xavier Valentine',
  'Kirk Jerkims',
  'Dick Dastardly'
]

function Root() {
  return(
    <div>
      <Clock />
      <Weather />
      <div className="interactive">
        <Tabs tabs={tabs}/>
        <AutoComplete names={names}/>
      </div>
    </div>
  );
}
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root/>, document.getElementById("main"));
});