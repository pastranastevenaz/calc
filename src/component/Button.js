import React, {
  Component,
  PropTypes } from 'react';

export default class Button  extends Component{

  //click event handler
  handleClick = () => {
    this.props.clickHandler(this.props.name);
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
Button.propTypes = {
  name:PropTypes.string,
  clickHandler: React.PropTypes.func,
};
