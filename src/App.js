// import { useState } from 'react'
// import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
// import Nav from '/src/components/Nav'


// const App = () => {


//   return (
//     <>
//     <Nav />
//       <Routes>
//         <Route path="/" />
//         <Route path="/menu" />
//         <Route path="/coupons" />
//         <Route path="/cart" />
//         <Route path="/signup" />
//         <Route path="/login" />
//       </Routes>
//     </>
//   )
// }

// export default App;


// import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import NavBar from './components/Nav';
import Menu from './pages/Menu';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Menu />
    </div>
  );
}

export default App;
