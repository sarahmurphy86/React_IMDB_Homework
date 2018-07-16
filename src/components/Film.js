import React from 'react';

const Film = (props) => {

  return(
    <div className="film">
      <h3>{props.title}</h3>
      <h4>{props.time}</h4>
    </div>
    )
}

export default Film;
