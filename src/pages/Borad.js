import React, { Component } from 'react';
import MoustTracker from './MoustTracker';
import cat from './cat.jpg';
import moust from './moust.jpg';

const Mouse = (props) => (
    <img src={moust} alt="Mouse" width="200" style={{ position: 'absolute', left: props.x, top: props.y }} />
  );

  const Cat=({x,y})=>(
    <img src={cat} alt="cat" width="200" style={{ position: 'absolute', left:x, top:y }} />
  )
  

class Board extends Component { 
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <MoustTracker {...this.state} 
        render={position => {
            return (<Cat {...position }/>)
        }}
        />
      </div>
    );
  }
}

export default Board;
