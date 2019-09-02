import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

describe(`Testing entrypoint 'App.js' of react-minimal`, () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
