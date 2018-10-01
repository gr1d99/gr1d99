import React, { Component } from 'react';

import Header from './Header';
import IntroContent from './IntroContent';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <IntroContent/>
      </div>
    );
  }
}

export default App;
