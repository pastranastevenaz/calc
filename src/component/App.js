import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends Component{
  render(){
    return(
      <div>
        <Display
          value="117"
        />
        <ButtonPanel />
      </div>
    );
  }
}
