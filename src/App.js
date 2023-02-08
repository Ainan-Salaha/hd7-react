import Navbar from "./Components/Navbar";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./Featurs/Home";
import ContactUs from "./Featurs/ContactUs";
import StudentsPage from "./Featurs/StudentDetaills/StudentsPage";
import EditStudent from "./Featurs/StudentDetaills/EditStudent";

import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/student" element={<StudentsPage/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/studentpage" element={<EditStudent/>} />
      <Route path="studentpage/:id" element={<EditStudent/>} />

    </Routes>
    </>
  );
}

export default App;
