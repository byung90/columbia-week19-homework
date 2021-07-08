import React, { Component } from 'react';
import API from '../utils/API';
import LeftBar from './LeftBar';
import EmployeeContainer from './EmployeeContainer';

class EntireContainer extends Component {
  state = {
    users: [],
    filteredUsers: [],
    countries: [],
    genders: [],
    filteredCountries: [],
    filteredGender: []
  };

  filterByGender = event => {
    const gender = event.target.value;
    let tempList = this.state.filteredGender;
    const index = tempList.indexOf(gender);
    if (index > -1) {
      tempList.splice(index, 1);
    }
    else {
      tempList.push(gender);
    }
    this.setState({
      filteredGender: tempList
    })
    if (tempList.length > 0) {
      this.setState({
        filteredUsers: this.state.users.filter(user => (
          tempList.includes(user.gender)
        ))
      })
    }
    else {
      this.setState({
        filteredUsers: this.state.users
      })
    }
  }

  filterByCountry = event => {
    const country = event.target.value;
    let tempList = this.state.filteredCountries;
    const index = tempList.indexOf(country);
    if (index > -1) {
      tempList.splice(index, 1);
    }
    else {
      tempList.push(country);
    }
    this.setState({
      filteredCountries: tempList
    })
    if (tempList.length > 0) {
      this.setState({
        filteredUsers: this.state.users.filter(user => (
          tempList.includes(user.location.country)
        ))
      })
    }
    else {
      this.setState({
        filteredUsers: this.state.users
      })
    }
  }

  sortByFirstName = event => {
    const sortOrder = event.target.value;
    const tempList = this.state.filteredUsers;
    if (sortOrder === "ascending") {
      this.setState({
        filteredUsers: tempList.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
      })
      console.log(this.state.filteredUsers)
    }
    else {
      this.setState({
        filteredUsers: tempList.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1)
      })
      console.log(this.state.filteredUsers)
    }

  }

  componentDidMount() {
    this.getRandomUsers();
  }

  getRandomUsers = () => {
    API.getUsers()
      .then(res => {
        const results = res.data.results;
        this.setState({
          users: results,
          filteredUsers: results,
          countries: [
            ...new Set(
              results.map(user => user.location.country
              )
            ),
          ],
          genders: [
            ...new Set(
              results.map(user => user.gender
              )
            ),
          ]
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <LeftBar
            countries={this.state.countries}
            genders={this.state.genders}
            filterByCountry={this.filterByCountry}
            filterByGender={this.filterByGender}
            sortBy={this.sortByFirstName}
          />
          <EmployeeContainer users={this.state.filteredUsers} />
        </div>
      </div>
    )
  }
};

export default EntireContainer;