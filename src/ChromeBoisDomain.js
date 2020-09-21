import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
      let X = event.clientX;
      let Y = event.clientY;
   return drawChromeBoiAtCoords(X,Y);
  }
  clicked(){
    return toggleCycling();
  }
  pressed(e){
    if(e.key === "a")
    return resize('+');
    else if(e.key === "s")
    return resize('-');
  }
  render() {
    return (
      <canvas
        onClick={this.clicked}
        onKeyPress={this.pressed}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
