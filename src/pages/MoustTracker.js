import React from 'react';



const MoustTracker = (props) => {
  return (
    <>
      <h1>Move the mouse around!</h1>
      <p>The current mouse position is ({props.x}, {props.y})</p>
      { props.render(props) }
    </>
  );
};

export default MoustTracker;
