import React from 'react';

const EmployeeCard = (props) => {
  return (
    <div className="card col-3">
      <div className="card-body">
        <img src={props.picture.large} className="card-img-top" alt={props.name.first} />
        <h5 className="card-title">{props.name.first} {props.name.last}</h5>
      </div>
    </div>
  )
}

export default EmployeeCard;
