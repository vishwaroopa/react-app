import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import Query from "../Query";
import GLOBAL_QUERY from "../../queries/global/global";
//import emailjs from 'emailjs-com'

const initialState = {
    name: '',
    email: '',
    message: '',
}
const Footer = () => {
        return (
            <Query query={GLOBAL_QUERY} id={null}>
                {({ data: { global } }) => {
                    const imageUrl =
                        process.env.NODE_ENV !== "development"
                            ? global.defaultSeo.shareImage.url
                            : process.env.REACT_APP_BACKEND_URL + global.defaultSeo.shareImage.url;
    return (
        <div>
            <div id='contact'>
                <div className='container'>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='section-title'>
                                <Link to="/"><img src={imageUrl} alt="logo" /></Link>
                                <p>
                                    {global.Footer.content}

                                    <br /><br />{global.Footer.copyright}
                                    <br /><br />Developed in ReactJS and netlyfy
                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-md-3 col-md-offset-1 contact-info'>
                        <div className='contact-item'>
                            <h3>Get in touch</h3>
                            <p>
                                <span>
                                    <i className='fa fa-map-marker'></i>  {global.Footer.address}
                               </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-phone'></i> {global.Footer.number}<br/>

                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-fax'></i> {global.Footer.number1}<br />
                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-envelope-o'></i> <a href="mailto:info@mavininfotech.com">{global.Footer.email}</a>
                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-phone'></i> {global.Footer.duns}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='row' id="contact">
                            <div className='social'>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/pages/Mavin-Infotech/135556656509121" target='_blank'>
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/intent/tweet?text=Web+development+company+%7C+Software+application+development&url=http%3A%2F%2Fwww.mavininfotech.com%2F%23.UoMVYpaX7Y8.twitter&related=" target='_blank'>
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://in.linkedin.com/in/mavininfotech" target='_blank'>
                                            <i className='fa fa-youtube'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer'>
                <div className='container text-center'>
                    <ul>
                        <li>
                            D-U-N-S # 828400320
                        </li>
                        <li>
                            <img src="https://service.ariba.com/an/p/Ariba/badge_180x55.jpg" />
                        </li>
                        <li>
                            <img src="https://service.ariba.com/an/p/Ariba/badge_180x55.jpg" />
                        </li>
                        <li>
                            <img src="https://service.ariba.com/an/p/Ariba/badge_180x55.jpg" />
                        </li>
                        <li>
                            <img src="https://service.ariba.com/an/p/Ariba/badge_180x55.jpg" />
                        </li>
                        <li>
                            <img src="https://service.ariba.com/an/p/Ariba/badge_180x55.jpg" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
                    )
                }}

            </Query>
        )
    }

export default Footer;
