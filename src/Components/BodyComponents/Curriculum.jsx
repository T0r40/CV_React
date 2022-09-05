import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Espana from "../../img/espana.png";
import UK from "../../img/reino-unido.png";
import { Col } from "react-bootstrap";
import {Row}  from "react-bootstrap";
const Curriculum = () =>{
        return (
        <CardGroup>
            <Card>
                <Card.Body>
                <Card.Text>
                    <Row>
                        <Col>
                            <div align="center">
                                <Button href="https://drive.google.com/file/d/1qiBxP4RarDL-HQo_wn2LvLkmXzWM7XIf/view?usp=sharing"
                                            target="_black"
                                            variant="outline-primary">
                                    <img src={Espana} 
                                        className="img-thumbnail" width={100} alt="Responsive image"/>
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <div align="center">
                                <Button href="https://drive.google.com/file/d/1XRLHuAcMVLvglNwD75rhS904ISHPgkH-/view?usp=sharing"
                                        variant="outline-primary"
                                        target="_black">
                                    <img src={UK} 
                                        className="img-thumbnail" width={100} alt="Responsive image"/>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
          );
}
export default Curriculum;