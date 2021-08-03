import React from "react";

class MyComp extends React.Component{
    
    state = {
        somenumber:25
    }

    render = () => {
        return(
        <div>
            <h1>{ this.state.somenumber}</h1>
        </div>
        );
    };
}
  
export default MyComp;