import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import "../style/navbar.css"

function AppNavbar(args) {
  const [isHomeActive, setHomeActive] = useState(true);
  const [isAboutActive, setAboutActive] = useState(false);
  const [isExperienceActive, setExperienceActive] = useState(false);
  const [isContactActive, setContactActive] = useState(false);
  const [isEducationActive, setEducationActive] = useState(false);
  const [isProjectActive, setProjectActive] = useState(false);
  const [isProject1Active, setProject1Active] = useState(false);


  
  const makeLinkActive = (id) => {
    if(id==="home"){
      setHomeActive(true)
      setAboutActive(false)
      setContactActive(false)
      setExperienceActive(false)
      setEducationActive(false)
      setProjectActive(false)
      setProject1Active(false)
    }
    else if(id==="contact")
    {
      setHomeActive(false)
      setAboutActive(false)
      setContactActive(true)
      setExperienceActive(false)
      setEducationActive(false)
      setProjectActive(false)
      setProject1Active(false)

    }
    else if(id==="about")
    {
      setHomeActive(false)
      setAboutActive(true)
      setContactActive(false)
      setExperienceActive(false)
      setEducationActive(false)
      setProjectActive(false)
      setProject1Active(false)

    }
    else if(id==="experience")
    {
      setHomeActive(false)
      setAboutActive(false)
      setContactActive(false)
      setExperienceActive(true)
      setEducationActive(false)
      setProjectActive(false)
      setProject1Active(false)

    }
    else if(id==="education")
    {
      setHomeActive(false)
      setAboutActive(false)
      setContactActive(false)
      setExperienceActive(false)
      setEducationActive(true)
      setProjectActive(false)
      setProject1Active(false)

    }

    else if(id==="project")
    {
      setHomeActive(false)
      setAboutActive(false)
      setContactActive(false)
      setExperienceActive(false)
      setEducationActive(false)
      setProjectActive(true)
      setProject1Active(false)

    }
    else if(id==="ToDoList")
    {
      setHomeActive(false)
      setAboutActive(false)
      setContactActive(false)
      setExperienceActive(false)
      setEducationActive(false)
      setProjectActive(false)
      setProject1Active(true)

    }
  }
  return (
    <div>
      <Navbar {...args} color='dark' dark style={{position:"absolute", top:0, width: "100%"}}>
          <Nav >
            <NavItem className={isHomeActive? 'active':''}>
              <Link to="/" className='nav-link' onClick={()=>makeLinkActive("home")}>Home</Link>
            </NavItem>
            <NavItem className={isAboutActive? 'active':''}>
              <Link to="/about" className='nav-link' onClick={()=>makeLinkActive("about")}>About</Link>
            </NavItem>
            <NavItem className={isEducationActive? 'active':''}>
              <Link to="/education" className='nav-link' onClick={()=>makeLinkActive("education")}>Education</Link>
            </NavItem>
            <NavItem className={isExperienceActive? 'active':''}>
              <Link to="/experience" className='nav-link' onClick={()=>makeLinkActive("experience")}>Experience</Link>
            </NavItem>
            <NavItem className={isProjectActive? 'active':''}>
              <Link to="/project" className='nav-link' onClick={()=>makeLinkActive("project")}>Projects</Link>
            </NavItem>
            <NavItem className={isContactActive? 'active':''}>
              <Link to="/contact" className='nav-link' onClick={()=>makeLinkActive("contact")}>Contact Me</Link>
            </NavItem>
            <NavItem className={isProject1Active? 'active':''} >
              <Link to="/ToDoList" className='nav-link' onClick={()=>makeLinkActive("ToDoList")}>To Do List</Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  )
}

export default AppNavbar;