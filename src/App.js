import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Nav from "./component/Nav"
import Home from "./component/Home"
import {Api} from "./api/Api"
import PageNot from "./component/PageNot"
import Login from "./component/Login"
function App() {
  return (
    <div className="App">
    
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/detail' element={<Api/>}></Route>
    <Route exact  path='/Login' element={<Login/>}></Route>
    <Route path='*' element={<PageNot/>}></Route>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
