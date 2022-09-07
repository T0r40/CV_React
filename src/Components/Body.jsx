import React from "react";
import Card from"react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import PerfilProfesional from "../img/curriculum.png";
import HistorialLaboral from "../img/employee.png";
import Educacion from "../img/school.png";
import AptitudesProfesionales from "../img/ux.png";
import Formacion from "../img/formacion.png";
import Proyectos from "../img/curriculum-vitae-y-cv.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Laboral from "./BodyComponents/Laboral";
import Edu from "./BodyComponents/Educacion";
import Apt from "./BodyComponents/Aptitudes";
import Form from "./BodyComponents/Formacion";
import Proy from "./BodyComponents/Curriculum";

import { useTranslation } from "react-i18next";

const Body = () => {
const {t, i18n} = useTranslation('common');
    return(
    <div className="div-body">
        <CardGroup>
            <br></br>
            <br></br>
            <Row>
                <Col>
                <Card id="Curriculum" border="dark" className="div-header_footer">
                    <Card.Header>
                    <div class="footer-center">
                        <div align="center">
                            <p className="text-light">
                                <h1>{t('Header.trabajos')}</h1>
                            </p>
                            <i class="fa fa-map-marker">
                            <img src={Proyectos} 
                                 className="img-thumbnail" alt="Responsive image" width={100}/>
                            </i>
                        </div>
                    </div>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text className="text-dark">
                        <Proy/>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br></br>
                <br></br>
                <Card id="Perfil" border="dark" className="div-header_footer">
                    <Card.Header>
                    <div class="footer-center">
                        <div align="center">
                            <p className="text-light">
                                <h1>{t('Header.perfil')}</h1>
                            </p>
                            <i class="fa fa-map-marker">
                            <img src={PerfilProfesional} 
                                         className="img-thumbnail" alt="Responsive image" width={100}/>
                            </i>
                        </div>
                    </div>
                    </Card.Header>
                    <Card.Body className="div-header">
                        <Row>
                            <Col >
                            <Card.Text className="div-sub">
                                <div className="p-3 mb-2 bg-light">
                                 <Col className="p-3 mb-2 bg-write text-write">
                                    <img src="data:image/jpeg;base64,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" 
                                        class="mx-auto d-block img-thumbnail" width={200} alt="Responsive image"/>
                                 </Col>
                                    <ul style={{listStyleType: "none"}}>
                                        <li>{t('Body.perfil.li1')}</li>
                                        <br></br>
                                        <li>{t('Body.perfil.li2')}</li>
                                        <br></br>
                                        <li>{t('Body.perfil.li3')}</li>
                                    </ul>
                                </div>
                            </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <br></br>
                <br></br>
                <Card id="Historial" border="dark" className="div-header_footer">
                    <Card.Header>
                    <div class="footer-center">
                        <div align="center">
                            <p className="text-light">
                                <h1>{t('Header.historial')}</h1>
                            </p>
                            <i class="fa fa-map-marker">
                            <img src={HistorialLaboral} 
                                 class="img-thumbnail" alt="Responsive image" width={100}/>
                            </i>
                        </div>
                    </div>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text className="text-dark">
                        <Laboral/>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br></br>
                <br></br>
                <Card id="Educacion" border="dark" className="div-header_footer">
                    <Card.Header>
                    <div class="footer-center">
                        <div align="center">
                            <p className="text-light">
                                <h1>{t('Header.educacion')}</h1>
                            </p>
                            <i class="fa fa-map-marker">
                            <img src={Educacion} 
                                         class="img-thumbnail" alt="Responsive image" width={100}/>
                            </i>
                        </div>
                    </div>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text className="text-dark">
                        <Edu/>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br></br>
                <br></br>
                <Card id="Aptitudes" border="dark" className="div-header_footer">
                    <Card.Header>
                    <div class="footer-center">
                        <div align="center">
                            <p className="text-light">
                                <h1>{t('Header.aptitudes')}</h1>
                            </p>
                            <i class="fa fa-map-marker">
                            <img src={AptitudesProfesionales} 
                                         class="img-thumbnail" alt="Responsive image" width={100}/>
                            </i>
                        </div>
                    </div>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text className="text-dark">
                        <Apt/>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br></br>
                <br></br>
                <Card id="Formacion" border="dark" className="div-header_footer">
                    <Card.Header>
                    <div class="footer-center">
                        <div align="center">
                            <p className="text-light">
                                <h1>{t('Header.formacion')}</h1>
                            </p>
                            <i class="fa fa-map-marker">
                            <img src={Formacion} 
                                         class="img-thumbnail" alt="Responsive image" width={100}/>
                            </i>
                        </div>
                    </div>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text className="text-dark">
                        <Form/>
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    <br></br>
                    <br></br>
                </Col>
            </Row>
        </CardGroup>
    <br></br>
    </div>
    );
}

export default Body;