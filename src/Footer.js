import React from 'react';
import footerImg from './img/dd1.jpg';

function Footer() {
    return (
        <div className="footer d__flex align__items__center justify__content__space__between pz-10">
            <img src={footerImg} alt="" className="footer__img pointer" />
            <span className="copyright" style={{"color":"#c6c9d8","fontSize":"14px","opacity":"0.75"}}>Copyright @ 2021 Programmer Divesh Dwivedi. All Rights Reserved. </span>
        </div>
    )
}

export default Footer
;