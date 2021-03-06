import {useState , useEffect} from "react";
let App = ()=> {
      //  var   fun()
  let [count , setCount] = useState(0);

  console.log("render was called");

  // useEffect ek hook hai to functional component ke ander hi use hota hai
  //it takes 2 arguments=> function, arr [optional]
  // based on you have passed the arr or not
  // we have 3 cases

  //case 1:
  // you have passed a function and an empty arr
  // then useEffect calls the passed function only once, after first render 
  // so it works like componentDidMount
  useEffect(() => {
    console.log("Case 1: use effect was called");
  }, []);

  // case 2: 
  // in this case you only give a function and no arr
  // useEffect will execute your function after every render, that is after first render and every re-render
  useEffect(() => {
    console.log("Case 2: use effect was called");
  });


  useEffect(() => {
    console.log("Case 3: use effect was called");
  } , []);

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
//  on re-render whole function re-runs