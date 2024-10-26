import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Palindrome from './Components/Palindrome';
import FlattenArray from './Components/FlattenArray';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} >
                <Route path="palindrome" element={<Palindrome />} />
                <Route path="flattenarray" element={<FlattenArray/>}></Route>
            </Route>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
