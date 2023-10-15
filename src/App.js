import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AppNavbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Education from "./components/education"
import Experience from "./components/experience";
import Contact from "./components/contact";
import Project from "./components/project";


function App() {
  return (
    <Router>
    <div className="App">
      <AppNavbar />
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route path='/about' element={< About />}></Route>
      <Route path='/education' element={< Education />}></Route>
      <Route path='/experience' element={< Experience />}></Route>
      <Route path='/project' element={< Project />}></Route>
      <Route path='/contact' element={< Contact />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
