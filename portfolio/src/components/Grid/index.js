import React from "react";
import { Row,Col } from "react-bootstrap";
import "./style.css";
export default function View(props){
    return (
        <Row>
            <Col md={{offset:3,span:6}} id="viewContainer">
                {props.children}
            </Col>
        </Row>
    )

}