import React from 'react';
import Linkedin from '../img/linkedin.png';
import Instagram from '../img/instagram.png';
import Github from '../img/github.png';
import Twitter from '../img/gorjeo.png';
import Email from '../img/email.png';
import Direccion from '../img/direccion.png';
import Telefono from '../img/llamada-telefonica.png';
import { useTranslation } from "react-i18next";

const Footer = () => {
const {t, i18n} = useTranslation('common');
  return (
        <div id="Yo" class ="footer-distributed">
                    <div class="footer-left">
                        <h3>{t('Footer.titulo')}</h3>
                    </div>
                    <div class="footer-center">
                        <div>
                            <i class="fa fa-map-marker">
                            <img src={Direccion} 
                                         class="img-thumbnail" alt="Responsive image" width={30}/>
                            </i>
                            <p>{t('Footer.direccion')}</p>
                        </div>
                        <div>
                            <i class="fa fa-phone">
                            <img src={Telefono} 
                                         class="img-thumbnail" alt="Responsive image" width={30}/>
                            </i>
                            <p>{t('Footer.telefono')}</p>
                        </div>
                        <div>
                            <i class="fa fa-phone">
                            <img src={Email} 
                                         class="img-thumbnail" alt="Responsive image" width={30}/>
                            </i>
                            <p>{t('Footer.email')}</p>
                        </div>
                    </div>
                    <div class="footer-right">
                        <p class="footer-company-about">
                            <span>{t('Footer.redes')}</span>
                        </p>
                        <div class="footer-icons">
                            <a href="https://www.instagram.com/torao1265/" target='_blank'>
                                    <img src={Instagram} 
                                         class="img-thumbnail" alt="Responsive image"/>
                            </a>
                            <a href="https://github.com/T0r40" target='_blank'>
                                    <img src={Github} 
                                         class="img-thumbnail" alt="Responsive image"/>
                            </a>
                            <a href="https://twitter.com/T0R40_mel0" target='_blank'>
                                    <img src={Twitter} 
                                         class="img-thumbnail" alt="Responsive image"/>
                            </a>
                            <a href="https://www.linkedin.com/in/norlivaalonso" target='_blank'>
                                    <img src={Linkedin} 
                                         class="img-thumbnail" alt="Responsive image"/>
                            </a>

                        </div>
                    </div>
                </div>
  );
};

export default Footer;