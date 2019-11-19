import React,{Component} from "react";
import "./style.css"; 
import { Row, Col } from "react-bootstrap"
import View from "../../components/Grid";
class Projects extends Component {
    state ={
        projects : [{
            name : "5chan",
            link : "1",
            git : "https://github.com/Nova-Xue/5chan",
            preview : "1"
        },{
            name : "InstaPic",
            link : "2",
            git : "https://github.com/Nova-Xue/InstaPic",
            preview : "/img/InstaPic Preview.png"
        },{
            name : "Bamazon",
            git : "https://github.com/Nova-Xue/Bamazon",
            link : "https://drive.google.com/file/d/11mUSBvL6qgXq7dm2SDcfahVat6B8hNTZ/view",
            preview : "/img/Bamazon Preview.png"
        },{
            name : "Lori-Node",
            git : "https://github.com/Nova-Xue/Lori-Node-App",
            link : "https://drive.google.com/file/d/1vxXlhZV3CoezzIImQ22miiKr2JsQHpZO/view",
            preview : "/img/Lori Preview.png"
        },{
            name : "I Love Ice Cream",
            git : "https://github.com/Nova-Xue/I-Love-Icecream",
            link : "https://nova-xue.github.io/I-Love-Icecream/",
            preview : "/img/Ice Preview.png"
        },]
    }
    render() {
        return(
            <View>
            <Row>
            {
                this.state.projects.map(project => (
                    <Col md={4} className="flex-colum border p-2">
                        <h3>{project.name}</h3>
                        <div className="link">

                        <a href={project.git}>{project.git}</a>
                        </div>
                        <div><a href={project.link} target="_blank"><img src={project.preview} alt="preview"></img></a></div>
                        
                    </Col>
                    )
                )
            }
            </Row>
        </View>
        )

    }
        
    
}

export default Projects;