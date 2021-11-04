import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/HooksCommponents/Components/NoteApp";
import * as serviceWorker from "./serviceWorker";

// const App = (props) => {
//   const [count, setCount] = useState(props.count ? props.count : 0);
//   const [text, setText] = useState("hahah"); 

//   useEffect(()=>{
//     console.log(" i will run just one time only ");
//   },[])

//   useEffect(()=>{ 
//     document.title=count;
//     console.log("im runnning ");
//   },[count])
//   return (
//     <div>
//       <h1> Current  {text || "countsss"} :  {count}</h1>
//       <button onClick={() => setCount(count + 1)} > +1  </button>
//       <button onClick={() => setCount(count - 1)} >-1</button>
//       <button onClick={() => setCount(0)}  >reset </button>
//       <input value={text}
//         onChange={(e) => {
//           setText(e.target.value)
//         }}
//       />
//     </div>
//   )
// }
// ReactDOM.render(  <App  count={101}/> ,   document.getElementById("root"));


ReactDOM.render(<App />, document.getElementById("root"))









// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
