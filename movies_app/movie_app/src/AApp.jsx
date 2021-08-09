import React from "react";
import Child from "./Child";

class AApp extends React.Component {
  state = {
    child: true,
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            if (this.state.child) {
              this.setState({ child: false });
            } else {
              this.setState({ child: true });
            }
          }}
        >
          child toggle
        </button>

        {this.state.child ? <Child /> : ""}

        
      </div>
    );
  }
}

export default AApp;