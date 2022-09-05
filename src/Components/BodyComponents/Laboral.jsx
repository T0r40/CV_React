import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";

const Laboral = () =>{
    const {t, i18n} = useTranslation('common');
        return (
            <Row xs={1} md={1} className="g-4">
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title align="center">{t('Body.Laboral.Sopra.empresa')}</Card.Title>
                        <div align="center">
                            <img src="data:image/png;base64,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" 
                              className="img-thumbnail" alt="Responsive image" width={150}/>
                        </div>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text>
                        <Card>
                        <h4 align="center">{t('Body.Laboral.Sopra.puesto')}</h4>
                        <h5 align="center">{t('Body.Laboral.Sopra.tiempo')}</h5>
                        <hr></hr>
                        <div align="center">
                            <ul style={{listStyleType: "none"}}>
                                <li>{t('Body.Laboral.Sopra.descripcion.des1')}</li>
                                <li>{t('Body.Laboral.Sopra.descripcion.des2')}</li>
                                <li>{t('Body.Laboral.Sopra.descripcion.des3')}</li>
                                <li>{t('Body.Laboral.Sopra.descripcion.des4')}</li>
                                <li>{t('Body.Laboral.Sopra.descripcion.des5')}</li>
                                <li>{t('Body.Laboral.Sopra.descripcion.des6')}</li>
                                <li>{t('Body.Laboral.Sopra.descripcion.des7')}</li>
                            </ul>
                        </div>
                        </Card>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title align="center">{t('Body.Laboral.Atos.empresa')}</Card.Title>
                        <div align="center">
                            <img src="data:image/jpeg;base64,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SRxl0Ue8IFyM7WaAE8SuTiGKyyymClOQjypbMdl1LT3XDWxIK856KuiY9z6r5QMjvmxTww2045r/AN3RV4ay19xKzOcJ+Z0dn8VdUMJezdkGxGcP5dbLsKL7EOJY8uGU5tRcG2g6KUqLUlJpFqZNwTYREXM6hERAeFXHmY5p5tKg9DVmKKoh555XNHge6FPioNiGBSmvZKxp3Zyh+mlt5c+5d6WuUzNenw4nZZQ3orc3R5z6zGuFBW5oBAeLZGtt7lOREAzJyy5fdZQqHZ+UVpeQd3dxB1t5Vx7lNUk08lbYNYx5HttBEWNp2cg3X7wUupx3RZaeMYcJ2ZeBHknVcqnxGohG7fTyTZeD2ZQDz5lVffisdS67knnoxtsPm2Ece9l+1l1pY5/Gob/SP/KtoUktXK2SZhiYy+WN472osdR4gH2rU2jEzqiB0dPI5sLnEkWs67bLpDjEfM5Wc5ljrjwJkzgPUobs4bT1RH/U/OpHFXP3WcwvDgP4emcqL7OGeOoeX00obK93eOWzA597lUgsRkdLHmUTo7CAZKojUmumv67Muu/iH8KT6jvwKjXySaimkfFG6eKZznujjAzCR7rk3PLK0C3itipramoY5jIHwXabmUB2YWtYWPHVRKO6W5dBCW2G1rn39hs6wGnlBNh/8rTwCsnjzRsp3SxgjJI1zGi2p4HXivPCamSnikjmhe0XsHmwadLLOFYFOWbyOURtfqGOa4ubytxXV472ehyi29u3qvfib1FRyz1LZ5ozCGXsxxBJzMynUHwCxi4/fIvWfyLSrpaqiLXukbI03u0MN9LDmerlnFJp3VLJG00rmt1uMut22UJc54xgltYxh5z5kzHD2KH4ef3ia3on8ykrKpxjzmJwNvI0zKKYW+dtS5zqaQNcbXOWw717/YudS4kdbXzE3tkgN5Oee8k/M1SKv/hSf9t34FRuWllppTNDG6Vsmro2jvAl2Y8eGgsvafEKidjo2wPgJae9IGuB0tbQ8dUnHdLK6EQltjtecmdjvJk+t+gUkUT2TZNE50UsTwL33htkOllLFW752Xo+RGURFzOwREQBERAEREAREQBERAEREAREQGlidEJoyx3w1XGpcPromhkcsJa3yczZC72nmpKitGbSwUlWm8kcjwWWV4fVvY8C9mxZmjUa3B9QUiWUUOTkTGCj0MoiKCwREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//Z" 
                              className="img-thumbnail" alt="Responsive image" width={150}/>
                        </div>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text>
                        <Card>
                            <h4 align="center">{t('Body.Laboral.Atos.puesto')}</h4>
                            <h5 align="center">{t('Body.Laboral.Atos.tiempo')}</h5>
                            <hr></hr>
                            <div align="center">
                                <ul style={{listStyleType: "none"}}>
                                    <li>{t('Body.Laboral.Atos.descripcion.des1')}</li>
                                </ul>
                            </div>
                        </Card>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title align="center">{t('Body.Laboral.Deloitte.Becario.empresa')}</Card.Title>
                        <div align="center">
                            <img src="data:image/png;base64,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" 
                              className="img-thumbnail" alt="Responsive image" width={150}/>
                        </div>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text>
                        <Card>
                            <h4 align="center">{t('Body.Laboral.Deloitte.Becario.puesto')}</h4>
                            <h5 align="center">{t('Body.Laboral.Deloitte.Becario.tiempo')}</h5>
                            <hr></hr>
                            <div align="center">
                                <ul style={{listStyleType: "none"}}>
                                    <li>{t('Body.Laboral.Deloitte.Becario.descripcion.des1')}</li>
                                </ul>
                            </div>
                        </Card>
                        <br></br>
                        <Card>
                            <h4 align="center">{t('Body.Laboral.Deloitte.Junior.puesto')}</h4>
                            <h5 align="center">{t('Body.Laboral.Deloitte.Junior.tiempo')}</h5>
                            <hr></hr>
                            <div align="center">
                                <ul style={{listStyleType: "none"}}>
                                    <li>{t('Body.Laboral.Deloitte.Junior.descripcion.des1')}</li>
                                </ul>
                            </div>
                        </Card>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
         </Row>
          );
}

export default Laboral;