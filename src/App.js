import React,{useEffect} from "react";
import "./App.css";
import Excel from './components/Excel'
import Navbar from "./components/Excel/Navbar";
import DataLoaderBtn from './components/Excel/DataLoaderBtn'
import axios from 'axios';
import SearchComponent from './SearchComponent'
function App() {

  useEffect(() => {
  axios.get('/latestblock&cros=true',{
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  }).then(res => console.log(res))
  },[]);
  return (
    <div className="App">
      <Navbar/>
      <DataLoaderBtn/>
      {/* <SearchComponent/> */}
    </div>
  );
}

export default App;
