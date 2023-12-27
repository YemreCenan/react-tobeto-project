import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Detail from './pages/Detail/Detail';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
  axios.get("https://dummyjson.com/products")
  .then(response =>{
    setData(response.data);
  
  }).catch(error => console.log(error))
 
  }, []);




  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage data = {data}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:productId' element={<Detail data ={data}/>}/>
        <Route path="*" element={<p>Not Found</p>}></Route>
      </Routes>
    </>
  )
}


export default App;
