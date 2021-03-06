import React, { Component, useState } from 'react';
import PotentialMatch from '../PotentialMatches/potentialMatch'
import './potentials.css'

export default function Potentials(props) {

  const matches = props.matches
  const uniqueMatches = matches
    .filter((object, index) => index === matches
      .findIndex(obj => JSON.stringify(obj) === JSON.stringify(object)));

  return (
    <div>
      <div className="header-text">
        <h3 className="potential-matches-header">Potential Matches:</h3>
        <p>Anyone who pins one of the same locations on the same day will show up below.</p>
      </div>
      <div className="scrollable">
        {(props.pinsRemaining <= 0)
          ? uniqueMatches.map((potentialMatch, i) => {
            if (potentialMatch && potentialMatch.connectedStatus <= 3) {
              return <PotentialMatch key={i} potentialMatch={potentialMatch} changeStatus={props.changeStatus}> </PotentialMatch>
            }
          }) 
          : <h3 className="potentials-empty-view">Use your Remaining (x5) Pins to View your Potential Matches. </h3>
        }
      </div>
    </div>

  )
}

Potentials.defaultProps = {
  matches: []
}