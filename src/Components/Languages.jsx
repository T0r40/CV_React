import React from "react";
import { useTranslation } from "react-i18next";
import Espana from "../img/espana.png";
import UK from "../img/reino-unido.png";
const Languages = () => {
    const [t, i18n] = useTranslation('common');
    return(
    <div>
        <button className="btn btn-default" onClick={() => i18n.changeLanguage('en')}>
            <img src={UK} width="20"/>
        </button>
        <button className="btn btn-default" onClick={() => i18n.changeLanguage('es')}>
            <img src={Espana} width="20"/>
        </button>
    </div>
    );
}

export default Languages;