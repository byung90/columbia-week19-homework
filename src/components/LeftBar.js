import React from 'react';

const LeftBar = (props) => {
  const countries = props.countries.map((country) => (
    <div className="form-group form-check" key={country}>
      <input type="checkbox" className="form-check-input" name={country} value={country}
        onChange={props.filterByCountry} />
      <label className="form-check-label" htmlFor="filter">{country}</label>
    </div>
  ));

  const genders = props.genders.map((gender) => (
    <div className="form-group form-check" key={gender}>
      <input type="checkbox" className="form-check-input" name={gender} value={gender}
        onChange={props.filterByGender} />
      <label className="form-check-label" htmlFor="filter">{gender}</label>
    </div>
  ));

  const sortName = (
    <select className="form-select" onChange={props.sortBy}>
      <option value="ascending">A to Z by First Name</option>
      <option value="descending">Z to A by First Name</option>
    </select>
  )

  return (
    <div className="col-2">

      <h3>Sorting Options</h3>
      {sortName}
      <br />
      <form>
        <h3>Filters</h3>
        <h5>Countries</h5>
        {countries}
        <br />
        <h5>Gender</h5>
        {genders}
      </form>
    </div>
  )
}

export default LeftBar;