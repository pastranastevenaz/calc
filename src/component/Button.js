import React, {
  Component,
  PropTypes } from 'react';

export default class Button  extends Component{
  render(){
    return(
      <button>
        {this.props.name}
      </button>
    );
  }
}
Button.proptypes = {
  name:PropTypes.string,
};
