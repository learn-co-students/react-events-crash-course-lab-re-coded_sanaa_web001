import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'



export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const coOrdinateX = event.clientX;
    const coOrdinateY = event.clientY;
    drawChromeBoiAtCoords(coOrdinateX, coOrdinateY);     
  }
  
  handleClick = () => {
    toggleCycling();
  }
  


  handleKey = (event) => {
    if (event.key === "a"){
      resize("+")
    }
    else if (event.key ==="s"){
      resize("-")
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyDown={this.handleKey}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}