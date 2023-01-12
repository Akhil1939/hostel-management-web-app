import { useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login.jsx";
import Nav from "./components/Navbar/Nav";
import Student from "./pages/students/Student";
import Warden from "./pages/warden/Warden";


//router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { UserContext } from './context/UserContext';



function App() {
  const [userName, setUserName] = useState("")
  const [role, setRole] = useState("")
  const [erNo, setErNo] = useState("")
  const [user, setUser] = useState(true) 
  const [student, setStudent] = useState()
  return (
    <>
    <UserContext.Provider value={{userName, setUserName, role, setRole, erNo, setErNo}}>
      <BrowserRouter>
        <Nav user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home setStudent = {setStudent}/>}  />
          <Route path="/login" element={<Login student={student} user={user} setUser={setUser} />} />

          <Route path="/student" element={user?<Student/>:<Login/>} />
          <Route path="/warden" element={user?<Warden/>:<Login/>} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  ); 
}

export default App;
