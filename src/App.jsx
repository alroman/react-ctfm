import React from 'react';
import {render} from 'react-dom';

require('./scss/app.scss')

class App extends React.Component {
  render () {
    return (
      <div>
        it works!
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
