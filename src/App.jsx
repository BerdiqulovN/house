import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Dashboard/>} path="/dashboard"/>
        <Route element={<Login/>} path="/login"/>
        
      </Routes>
    </>
  );
};

export default App;