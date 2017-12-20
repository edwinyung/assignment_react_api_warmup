import React, { Component } from "react";
import App from "../components/App";
import serialize from "form-serialize";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isFetching: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("https://reqres.in/api/users?delay=3")
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json.data,
          isFetching: false
        });
      });
  }

  // New add user action
  onAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, { hash: true });

    // Create headers to set the content type to json
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    // Set options, and stringify the body to JSON
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(body)
    };

    // Before performing the fetch, set isFetching to true
    this.setState({ isFetching: true });

    fetch("https://reqres.in/api/users", options)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        // Otherwise, extract the response into json
        return response.json();
      })
      .then(json => {
        // Update the user list and isFetching.
        // Reset the form in a callback after state is set.
        this.setState(
          {
            isFetching: false,
            users: [...this.state.users, json]
          },
          () => {
            form.reset();
          }
        );
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };


  onDeleteUser = e => {

  onDeleteUser = event => {
    event.preventDefault();
    const options = {
      method: "DELETE"
    };

    this.setState({ isFetching: true });
    const url = `https://reqres.in/api/users${id}`;


    fetch("https://reqres.in/api/users", options)
      .then(response => {
        //if response is empty, throw error
        if (!(response.status >= 200 && response.status < 300)) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        let result = this.state.users.filter(user => {
          return user.id != id;
        });
        return result;
      })
      .then(result => {
        // Update the user list and isFetching.
        let newUsers = this.state.users.filter(elem => {
          console.log(elem.id, id);
          return elem.id != id;
        });
        this.setState({
          isFetching: false,
          users: newUsers

        });
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
    //this is because we are over-riding anchor tag default behaviour
    return false;
  };

  render() {
    return (
      <App
        onAddUser={this.onAddUser}
        {...this.state}
        onDeleteUser={this.onDeleteUser}
        {...this.state}
      />
    );
  }
}

export default AppContainer;
