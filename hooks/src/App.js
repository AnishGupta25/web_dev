import {useState} from "react";
let App = ()=> {

  let [count , setCount] = useState(0);
  return (
    <div className="App">
      <button onClick = {() => {
        setCount(count + 1);
      }}>+</button>
      <p>{count}</p>
      <button onClick = {() => {
        setCount(count - 1);
      }}>-</button>
    </div>
  );
}

export default App;
