import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import {lenguajes} from "../../Modules/Aptitudes.js";
import { softwareErp } from "../../Modules/Aptitudes.js";
import { frameworks } from "../../Modules/Aptitudes.js";
import { contenedores } from "../../Modules/Aptitudes.js";
import {baseDatos} from "../../Modules/Aptitudes.js";
import { useTranslation } from "react-i18next";
import lengu from "../../img/lenguaje-de-codificacion.png";
import erp from "../../img/erp.png";
import frame from "../../img/framework.png";
import docker from "../../img/docker.png";
import langu from "../../img/languages.png";
import bd from "../../img/dato.png";
import Espana from "../../img/espana.png";
import FR from "../../img/francia.png";
import UK from "../../img/reino-unido.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Aptitudes = () =>{
    const {t, i18n} = useTranslation('common');
        return (
        <>
        <CardGroup>
            <Card className="div-ap">
                <Card.Header>
                        <div class="footer-center">
                            <div align="center">
                                <p className="text-dark">
                                    <h3>{t('Body.aptitudes.lenguajes')}</h3>
                                </p>
                                <i class="fa fa-map-marker">
                                <img src={lengu} 
                                            className="img-thumbnail" alt="Responsive image" width={100}/>
                                </i>
                            </div>
                        </div>
                        </Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <Row xs={1} md={2} className="g-4">
                        {lenguajes.map(({nombre}, i) =>(
                        <Col>
                            <Card className="div-sub">
                                <Card.Text>
                                    <ul style={{listStyleType: "none"}}>
                                        <li id={`element${i}`}>
                                            {nombre}
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    </Card.Text>
                    </Card.Body>
            </Card>
         
            </CardGroup>
            <br></br>
            <CardGroup>
            <Card className="div-ap">
                <Card.Header>
                        <div class="footer-center">
                            <div align="center">
                                <p className="text-dark">
                                    <h3>{t('Body.aptitudes.erp')}</h3>
                                </p>
                                <i class="fa fa-map-marker">
                                <img src={erp} 
                                            className="img-thumbnail" alt="Responsive image" width={100}/>
                                </i>
                            </div>
                        </div>
                        </Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <Row xs={1} md={2} className="g-4">
                        {softwareErp.map(({nombre}, i) =>(
                        <Col>
                            <Card className="div-sub">
                                <Card.Text>
                                    <ul style={{listStyleType: "none"}}>
                                        <li id={`element${i}`}>
                                            {nombre}
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    </Card.Text>
                    </Card.Body>
            </Card>
            </CardGroup>
            <br></br>
            <CardGroup>
            <Card className="div-ap">
                <Card.Header>
                        <div class="footer-center">
                            <div align="center">
                                <p className="text-dark">
                                    <h3>{t('Body.aptitudes.frameworks')}</h3>
                                </p>
                                <i class="fa fa-map-marker">
                                <img src={frame} 
                                            className="img-thumbnail" alt="Responsive image" width={100}/>
                                </i>
                            </div>
                        </div>
                        </Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <Row xs={1} md={2} className="g-4">
                        {frameworks.map(({nombre}, i) =>(
                        <Col>
                            <Card className="div-sub">
                                <Card.Text>
                                    <ul style={{listStyleType: "none"}}>
                                        <li id={`element${i}`}>
                                            {nombre}
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    </Card.Text>
                    </Card.Body>
            </Card>
            </CardGroup>
            <br></br>
            <CardGroup>
            <Card className="div-ap">
                <Card.Header>
                        <div class="footer-center">
                            <div align="center">
                                <p className="text-dark">
                                    <h3>{t('Body.aptitudes.contenedores')}</h3>
                                </p>
                                <i class="fa fa-map-marker">
                                <img src={docker} 
                                            className="img-thumbnail" alt="Responsive image" width={100}/>
                                </i>
                            </div>
                        </div>
                        </Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <Row xs={1} md={2} className="g-4">
                        {contenedores.map(({nombre}, i) =>(
                        <Col>
                            <Card className="div-sub">
                                <Card.Text>
                                    <ul style={{listStyleType: "none"}}>
                                        <li id={`element${i}`}>
                                            {nombre}
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    </Card.Text>
                    </Card.Body>
            </Card>
            </CardGroup>
            <br></br>
            <CardGroup>
            <Card className="div-ap">
                <Card.Header>
                        <div class="footer-center">
                            <div align="center">
                                <p className="text-dark">
                                    <h3>{t('Body.aptitudes.bd')}</h3>
                                </p>
                                <i class="fa fa-map-marker">
                                <img src={bd} 
                                     className="img-thumbnail" alt="Responsive image" width={100}/>
                                </i>
                            </div>
                        </div>
                        </Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <Row xs={1} md={2} className="g-4">
                        {baseDatos.map(({nombre}, i) =>(
                        <Col>
                            <Card className="div-sub">
                                <Card.Text>
                                    <ul style={{listStyleType: "none"}}>
                                        <li id={`element${i}`}>
                                            {nombre}
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    </Card.Text>
                    </Card.Body>
            </Card>
            </CardGroup>
            <br></br>
            <CardGroup>
            <Card className="div-ap">
                <Card.Header>
                        <div class="footer-center">
                            <div align="center">
                                <p className="text-dark">
                                    <h3>{t('Body.aptitudes.idiomas')}</h3>
                                </p>
                                <i class="fa fa-map-marker">
                                <img src={langu} 
                                            className="img-thumbnail" alt="Responsive image" width={100}/>
                                </i>
                            </div>
                        </div>
                        </Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card className="div-sub">
                                <Card.Text>
                                    <ul style={{listStyleType: "none"}}>
                                        <li>
                                        <img src={UK} 
                                             className="img-thumbnail" alt="Responsive image" width={50}/>
                                             {t('Body.idiomas.ingles')}
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="div-sub">
                                <Card.Text>
                                    <ul style={{listStyleType: "none"}}>
                                        <li>
                                        <img src={Espana} 
                                             className="img-thumbnail" alt="Responsive image" width={50}/>
                                             {t('Body.idiomas.espanol')}
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="div-sub">
                                <Card.Text>
                                    <ul style={{listStyleType: "none"}}>
                                        <li>
                                        <img src={FR} 
                                             className="img-thumbnail" alt="Responsive image" width={50}/>
                                             {t('Body.idiomas.frances')}
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                    </Card.Text>
                    </Card.Body>
            </Card>
            </CardGroup>
            </>        
          );
}

export default Aptitudes;