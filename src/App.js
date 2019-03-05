import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";


class App extends Component{

  componentDidMount(){
    // console.log(tf.tensor([1, 2, 3, 4]).print());
    // tf.tensor([1, 2, 3, 4]).print();
  }

  render(){
    return(
      <div className="App">
        <h1> Hello world! </h1>
      </div>
    );
  }
}

export default hot(module)(App);