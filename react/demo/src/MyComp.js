import React from "react";

class MyComp extends React.Component{
    
    state = {
        somenumber : 0
    }

    render = () => {
        return(
        <div>
            <h1>{ this.state.somenumber}</h1>
            <button onClick = { () =>{
                this.setState({somenumber :  this.state.somenumber + 1})
            }}> Increment</button>
            <button onClick = { () =>{
                this.setState({somenumber :  this.state.somenumber - 1})
            }}> Decrement</button>
        </div>
        );
    };
}
  
export default MyComp;