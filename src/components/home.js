import "../style/home.css"
import {Button} from "reactstrap"
function Home(){
    return(
        <div className="home-bg">
        <div className="container">
           <span> <img alt="" src="../images/photo.jpeg"/>
            <h1>Hi! I'm Raksha Tripathi</h1></span>
            <p>An enthusiastic and highly motivated individual looking for a responsible role in a reputed organization where I can use my skills and knowledge for the growth of the organization and grow along with it.</p>
            <div className="btn-ele">
            <Button color="info" > <i class="fa-solid fa-arrow-down" style={{marginRight:"5px"}}></i>Resume</Button>
            </div>
        </div>
        </div>
    )
}

export default Home;