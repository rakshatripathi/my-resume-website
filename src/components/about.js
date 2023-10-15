import "../style/about.css"
function About(){
    return(
       <div className="about-bg">
         <div className="about-section">
             <h1>About Me</h1>
             <span><section className="photo"></section><p>I am an athlete at heart with an entrepreneurial spirit, a knack for online security, and a passion for coding. Born in a small town in Northern BC, I made my move to Victoria where I work as a full stack developer for Instant Domains, alongside my many ongoing projects.<br/>Outside of work I am an avid motorcyclist, soccer player and Muay Thai fighter. I love to travel and lead a fairly nomadic lifestyle. I built much of my early portfolio from beaches of Southeast Asia and dream of taking my work with me while traveling the world.</p></span>             
             <ul>
                 <li>Location: Delhi, India</li>
                 <li>Nationality: Indian</li>
                 <li>Study: GGSIPU</li>
                 <li>Interests: Motorcycles, Muay Thai, Banjos</li>
             </ul>
         </div>
         {/* <div className="photo">
            
         </div> */}
       </div>
    )
}

export default About;