// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Classprops from "./Classprops";
import Functionprops from "./Functionprops";

class App extends React.Component{
  render()
  {
    return(
    <div>
      <Classprops name="Ruby" place="Tiruppur"><p>hero Component</p></Classprops>
      <Classprops name="shubha" place="coimbatore"><button>submit</button></Classprops>
      <Classprops name="sathyashree"place="ooty"/>
      <Functionprops name="suki" place="vellakovil"/>
    </div>
    );
  }
}

export default App;