
import './App.css';
import Login from './Components/Login';
import Password from './Components/Password';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Login/>
      {/* <Password/> */}
      <Routes>
      {/* <Route path="/" element={Login}/> */}
      <Route path="/password" element={Password}/> 
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
