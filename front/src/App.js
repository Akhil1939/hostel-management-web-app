import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Navbar/Nav";
import Students from "./pages/Students";
import ApplicationForm from "./pages/ApplicationForm";

function App() {
  return (
    <>
      <Nav />
      {/* <Login /> */}
      <Students />
      <ApplicationForm />
    </>
  );
}

export default App;
