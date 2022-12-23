import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Navbar/Nav";
import Students from "./pages/students/Students";
import ApplicationForm from "./pages/students/ApplicationForm";
import StudentPending from "./pages/students/StudentPending";
import StudentPast from "./pages/students/StudentPast";
import RegisterStudent from "./pages/RegisterStudent";


function App() {
  return (
    <>
      <Nav />
      {/* <Login /> */}
      {/* <Students /> */}
      {/* <ApplicationForm/> */}
      {/* <StudentPending/> */}
      {/* <StudentPast /> */}
      <RegisterStudent />
      
    </>
  );
}

export default App;
