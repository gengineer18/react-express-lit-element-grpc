import React from 'react';
import ReactDOM from 'react-dom';
import './components/button';
import './components/infobox';

fetch('/api/').then(response => {
  console.log(response.json());
})

export const Index = () => {
  return (
    <>
      <div>Hello React!</div>
      <action-button foo="bar"></action-button>
      <text-box id="info" content="Hello"></text-box>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
