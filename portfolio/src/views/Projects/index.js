import React,{Component} from "react";
import "./style.css"; 
import { Row, Col } from "react-bootstrap"
import View from "../../components/Grid";
class Projects extends Component {
    state ={
        projects : [{
            name : "1",
            link : "1",
            preview : "1"
        },{
            name : "2",
            link : "2",
            preview : "2"
        },{
            name : "1",
            link : "1",
            preview : "1"
        },{
            name : "1",
            link : "1",
            preview : "1"
        },{
            name : "1",
            link : "1",
            preview : "1"
        },{
            name : "1",
            link : "1",
            preview : "1"
        }]
    }
    render() {
        return(
            <View>
            <Row>
            {
                this.state.projects.map(project => (
                    <Col md={4}>
                        name: {project.name}
                        link : {project.link}
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