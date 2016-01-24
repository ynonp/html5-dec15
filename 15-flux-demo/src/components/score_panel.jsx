import React from 'react';


export default function ScorePanel(props) {
  return <p>
    {props.score}
  </p>
}

ScorePanel.propTypes = {
  score: React.PropTypes.number
};
