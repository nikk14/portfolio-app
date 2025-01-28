// import './App.css'
import { Routes, Route, Navigate } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import College from "./components/Collage";
import Students from "./components/Students";
import Department from "./components/Department";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/college" element={<College />}>
          <Route path="students" element={<Students />} />
          <Route path="departments" element={<Department />} />
          <Route path="college-details" element={<Details />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path='/*' element={<Navigate to='/login'/>} /> */}
      </Routes>
    </>
  );
}

export default App;
