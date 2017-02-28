import React, {
  Component,
  PropTypes } from 'react';

export default class Display extends Component{
  render(){
    return(
      <div>
        <div>
         {this.props.value}
        </div>
      </div>
    );
  }
}
Display.propTypes = {
  value:PropTypes.string
};
