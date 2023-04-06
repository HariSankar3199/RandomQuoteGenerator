import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes,Route} from 'react-router-dom';

import Bookmark from './Components/Bookmark';

function App() {
  return (
   <>
   <Routes>
    <Route path="/quotes/:id" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/Bookmark" element={<Bookmark/>}/>
   
 
 </Routes>
   </>
  );
}

export default App;
