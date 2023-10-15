import { CardTitle, CardText, CardBody, Card  } from "reactstrap";
import "../style/project.css"


function Project(){
    return(
        <div className="project-bg">
            <div className="container" id="project-box">
                <div id="heading-el">
                    <h1>Projects</h1>
                </div>
                <div className="projects">
                <Card id="card"style={{width: '18rem'}}>
                        <div id="LIFI-img" />
                        <CardBody>
                            <CardTitle tag="h5">
                                Data Transmission using LIFI
                            </CardTitle>
                            <CardText> 
                                Designed and implemented a prototype module of a Li-Fi system and transmit and receive data (text) using light as a carrier. 
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card id="card" style={{width: '18rem'}}>
                        <div id="ArtPage-img" />
                        <CardBody>
                            <CardTitle tag="h5">
                                Art Page Portfolio Website
                            </CardTitle>
                            <CardText> 
                                Designed a multipage responsive website using HTML and CSS. 
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card id="card" style={{width: '20rem'}}>
                        <div id="solar-tracker-img" />
                        <CardBody>
                            <CardTitle tag="h5">
                                Solar Tracker Based Smart Irrigation system
                            </CardTitle>
                            <CardText> 
                            Designed and implemented a prototype module which was a combination of two separate systems i.e. single axis solar tracker to take maximum input from sunlight and produce solar energy along with a smart irrigation system to automatically optimize use of water for irrigation.
                            </CardText>
                        </CardBody>
                    </Card>
                    
                    <Card id="card" style={{width: '20rem'}}>
                        <div id="todoapp-img" />
                        <CardBody>
                            <CardTitle tag="h5">
                                To Do List
                            </CardTitle>
                            <CardText> 
                                Designed a ToDo App using HTML, CSS, and Javascript. This app may help you prioritize your work and personal tasks. This allows you to organize and complete the most crucial tasks first. Eventually increases productivity.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default Project;