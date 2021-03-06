import React, { Component } from 'react';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import connect from '../libs/connect';

import uuid from 'uuid';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


const App = ({LaneActions, lanes}) => {
    const addLane = () => {
        LaneActions.create({
            id: uuid.v4(),
            name: 'New lane'
        });
    };

    return (
        <div>
            <button className="add-lane" onClick={addLane}>+</button>
            <Lanes lanes={lanes} />
        </div>
    );
}

export default compose(
    DragDropContext(HTML5Backend),
    connect(
      ({lanes}) => ({lanes}),
      {LaneActions}
    )
  )(App)