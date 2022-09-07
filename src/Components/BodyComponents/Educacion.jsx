import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useTranslation } from "react-i18next";
import {educacion} from "../../Modules/Educacion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Educacion = () =>{
    const {t, i18n} = useTranslation('common');
    return (
         <Row xs={1} md={1} className="g-4">
            <Col>
                <Card className="div-ap">
                    <Card.Header>
                        <Card.Title align="center">{t('Body.educacion.DAM.nombre')}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text>
                        <h5 align="center">{t('Body.educacion.DAM.entidad')}</h5>
                        <p  align="center">{t('Body.educacion.DAM.fecha')}</p>
                        <p  align="center">{t('Body.educacion.DAM.proyecto')}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="div-ap">
                    <Card.Header>
                        <Card.Title align="center">{t('Body.educacion.Bachillerato.nombre')}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text>
                        <h5 align="center">{t('Body.educacion.Bachillerato.entidad')}</h5>
                        <p  align="center">{t('Body.educacion.Bachillerato.fecha')}</p>
                        <p  align="center">{t('Body.educacion.Bachillerato.proyecto')}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
         </Row>
      );
}

export default Educacion;