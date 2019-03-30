import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch,NavLink,Link} from "react-router-dom"

class App extends Component {
  constructor(props){
    super(props)
    this.textInput = React.createRef()
  }
  render() {
    return (
      <div className="App">
        <CustomComponent forwardedRef = {(el)=>{this.textInput=el}}></CustomComponent>
       
      </div>
    );
  }
}

export default App;

class CustomComponent extends Component{
  constructor(props){
    super(props)
    console.log("props",props)
  }
  render(){
    let { forwardedRef} = this.props
    return (
      <div>
        <input ref={forwardedRef} type="text"/>
        123132
    </div>
    )
  }
}

