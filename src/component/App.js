import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends Component{

  handleClick = (buttonName) => {
    console.log('click', buttonName);
  }

  render(){
    return(
      <div>
        <Display
          value="117"
        />
        <ButtonPanel
          clickHandler={this.handleClick}/>
      </div>
    );
  }
}
