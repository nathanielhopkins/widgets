import React from 'react';
import ReactDOM, { render } from 'react-dom';

function Root() {
  return(
    <div>
      <h1>It worked.</h1>
    </div>
  );
}
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root/>, document.getElementById("main"));
});