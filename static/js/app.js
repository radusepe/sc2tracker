import React from 'react';

require('../css/app.css');

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <div className='main-header'>
          <h1 className='site-title'>sc2tracker v2</h1>
        </div>
        <div className='main'>
        </div>
      </div>
    );
  }
}
