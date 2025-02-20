/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import eventHandlers from './eventHandlers.jsx';
import Button from './button.jsx';
//import '../styles.scss'; // Pretty sure we don't need to import this here anymore

const Board = (props) => {

  // passing in some intial state
  const board = props.state.board;
  const grid = [];

  // creates a for loop to go through every poperty on the board (all the nodes)
  for (const property in board) {
  // a new name assignment for each property to id
    const id = property;
    let className = '';
    // conditional check to see if the onFire array has this node and the onFire array is not empty
    if (
      props.state.onFire.includes(property) &&
        props.state.onFire.length !== 0
    ) {
      // if the node is in the onFire array then push it into the grid array as a button with several properties
      // give the button an id passing in the id variable, and a className by concatenating a string with the index of the property
      className = 'onFire' + ' ' + 'anim-delay-' + props.state.onFire.indexOf(property);
    }
      
    // IF we are NOT currently on Fire (aka not searching for the destination)
    // ... but the current grid-square is contained within the found path array ...
    else if (props.state.path.includes(property)) {
    // Push a .path button to the grid
      className = 'path' + ' ' + 'anim-delay-2-' + props.state.path.indexOf(property);
    // IF we are NOT currently on Fire (aka not searching for the destination)
    // ... but we are looking at the starting square
    } else if (property === props.state.headPosition) {
    // push a .head square to the grid
      className = 'head';
    } else if (property === props.state.targetPosition) {
      // push a .target square to the grid
      className = 'target';
    } else if (board[property].wall === true) {
    // push a .wallGrid square to the grid
      className = 'wallGrid';
    } else {
    // push a .regularGrid square to the grid.
      className = 'regularGrid';
    }

    // This is the one .push Button to rule them all
    grid.push(
      <Button
        id={id}
        key={id}
        className={className}
        onMouseDown={() => { eventHandlers.handleMouseDown(property, props.state, props.setState); }}
        onMouseOver={() => { eventHandlers.handleMouseEnter(property, props.state, props.setState); }}
        onMouseUp={() => { eventHandlers.handleMouseUp(props.state, props.setState); }}
        onClick={() => {
          eventHandlers.handleHead(property, props.state, props.setState);
          eventHandlers.handleTarget(property, props.state, props.setState);
        }}
      />
    );
  }
  console.log(grid);
  //console.log(Array.isArray(grid));
  return(
    <>
      {grid}
    </>
  );

};

export default Board;