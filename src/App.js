import './App.css';
import Leftbar from "./component/Leftbar";
import Navbar from "./component/Navbar";
import Main from './component/Main';


function App() {
  return (
    <div>
      <Navbar></Navbar>
       <Leftbar></Leftbar>
      <Main/>
    </div>
  );
}

export default App;
