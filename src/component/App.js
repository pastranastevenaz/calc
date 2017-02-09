import React from 'react';
import Display from './Display';
import ButtonPanel from './ButttonPanel';

export default class App extends Component{
  render(){
    return(
      <div>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
