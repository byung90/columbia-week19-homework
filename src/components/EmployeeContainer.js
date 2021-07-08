import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeContainer = (props) => {
  // console.log(props);
  return (
    <div className="col-10 d-flex flex-wrap">
      {
        props.users.map(user => (
          <EmployeeCard key={user.login.uuid} {...user} />
        ))
      }
    </div>
  )

};

export default EmployeeContainer;