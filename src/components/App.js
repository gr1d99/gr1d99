import React, { Component } from 'react';

import Header from './Header';
import SocialMedia from './SocialMedia';
import Skills from './Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Skills/>
          <SocialMedia/>
      </div>
    );
  }
}

export default App;
