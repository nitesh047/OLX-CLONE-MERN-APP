import Items from "./Components/Items/Items";
import SingleItem from "./Components/SingleItem";
import Topbar from "./Components/Topbar";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { Context } from "./Components/context/Context";
import { useContext } from "react";
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
import Home from "./Components/Home";
import User from "./Components/User";
import Buy from "./Components/Buy";
 



function App() {
// 
  const {user} = useContext(Context);


  return (
     <>
   <Router>
      <Topbar/>
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/all' element={<Items/>}/>
   <Route path='/item/:id' element={<SingleItem/>}/>
   <Route path='/buy/:id' element={user?<Buy/> : <Login/>}/>
   <Route path='/user/:id' element={<User/>} />
   <Route path='/login' element={user ? <Home/> : <Login/>}/>
    <Route path ='/register' element={user ? <Home/> : <Register/>}/>
   </Routes>
    </Router>
     </>
  );
}
export default App;
