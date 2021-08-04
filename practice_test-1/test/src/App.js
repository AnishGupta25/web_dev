import React from "react";
import './App.css';
import Button from "./button";
import Input from "./Input";
import * as math from "mathjs";

class App extends React.Component {

  state = {
    result:"",
    equation:"",
  }

  addnums = (val) =>{
    this.setState({
      equation: [...this.state.equation,val+" "]
    })
  }

  reset = (e) =>{
    this.setState({
      equation: "",
      result: "",
    })
  }

  equate = () =>{
    let input = this.state.equation.join("");
    this.setState({
      result: math.evaluate(input)
    })
  }

  render = () => {
    return (
      <div className = "App">
        <div className = "wrapper">
        <Input Result = {this.state.result} Equation = {this.state.equation}/>
          <div className = "row">
          <Button symbol= "7" click = {this.addnums}/>
          <Button symbol= "8" click = {this.addnums}/>
          <Button symbol= "9" click = {this.addnums}/>
          <Button symbol= "/" color = "#e67e22" click = {this.addnums}/>
          </div>
          <div className = "row">
          <Button symbol= "4" click = {this.addnums}/>
          <Button symbol= "5" click = {this.addnums}/>
          <Button symbol= "6" click = {this.addnums}/>
          <Button symbol= "*" color = "#e67e22" click = {this.addnums}/>
          </div>
          <div className = "row">
          <Button symbol= "1" click = {this.addnums}/>
          <Button symbol= "2" click = {this.addnums}/>
          <Button symbol= "3" click = {this.addnums}/>
          <Button symbol= "+" color = "#e67e22" click = {this.addnums}/>
          </div>
          <div className = "row">
          <Button symbol= "0" click = {this.addnums}/>
          <Button symbol= "." click = {this.addnums}/>
          <Button symbol= "=" color = "#d35400" click = {this.equate}/>
          <Button symbol= "-" color = "#e67e22" click = {this.addnums}/>
          </div>
          <Button symbol= "Clear" color = "#e67e22" click = {this.reset}/>
        </div>
      </div>
    )
  }
}

export default App;
