import React, {
  Component,
  PropTypes } from 'react';

export default class Button  extends Component{

  //click event handler
  handleClick = () => {
    console.log('click');
  }

  render(){
    return(
      <button
        onClick={this.handleClick}>
        {this.props.name}
      </button>
    );
  }
}
Button.proptypes = {
  name:PropTypes.string,
};
