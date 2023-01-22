import React, { Component } from 'react';
import { useState } from 'react';
class DataComponent extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    // Make a GET request to your Node.js backend
    fetch('http://localhost:3000/', {
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the component's state with the received data
        this.setState({ data });
      });
  }

  render() {
    // Display a loading message while the data is being fetched
    if (!this.state.data) {
      return <p>Loading...</p>;
    }
    console.log('hello');
    // Destructure the data from the state
    const result = this.state.data;
    const finalres = {};
    for (let i = 0; i < result.length; i++) {
      Object.assign(finalres, result[i]);
    }
    // console.log(result);
    // const output = JSON.stringify(result);
    const { open, high, low, symbol } = finalres;
    return (
      <div>
        <h1>The market price of share: {symbol}</h1>
        <p>open: {open}</p>
        <p>high: {high}</p>
        <p>low: {low}</p>
        {/* <p>{finalres}</p> */}
      </div>
    );
  }
}

export default DataComponent;
