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

                                    <br /><br />{global.Footer.copyright} - D-U-N-S # 828400320
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
                        <li className='duns'>
D-U-N-S # 828400320                        </li>
                        <li>
                            <img className='arabia' src="https://res.cloudinary.com/mavin-infotech/image/upload/v1629384287/1_d895b97892.jpg?1530162.5" />
                        </li>
                        <li>
                            <img className='iso' src="https://res.cloudinary.com/mavin-infotech/image/upload/v1629384287/2_93f1b09334.png?1530161" />
                        </li>
                        <li>
                            <img className='msme' src="https://res.cloudinary.com/mavin-infotech/image/upload/v1629384287/3_1bf3f3d7c2.png?1530163.699999988" />
                        </li>
                        <li>
                            <img className='we' src="https://res.cloudinary.com/mavin-infotech/image/upload/v1629384287/4_e5b2219c14.png?1530161.699999988" />
                        </li>
                        <li>
                            <img className='small' src="https://res.cloudinary.com/mavin-infotech/image/upload/v1629384287/5_e384dd8a05.png?1530159.800000012" />
                        </li>
                    </ul>
                </div>
                
                <button type="button" class="btn login-icon" data-toggle="modal" data-target="#exampleModal">
                    <img src="https://res.cloudinary.com/mavin-infotech/image/upload/v1629469934/login_icon_aefbe2860f.png?7671780.100000024" />
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div id="light" class="white_content" >
                                    <div class="accordion-inner" id="login_inner">
                                        <form action="https://email.secureserver.net/login.php" method="post" name="login_form" id="login_form">
                                            <h5>Webmail Login</h5>
                                            <table cellpadding="0" cellspacing="0" width="100%" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="content">
                                                            <input type="text" name="username" class="txtfield" size="26" placeholder="Username" required />
                                                            <input type="hidden" name="domain" value="mavininfotech.com" />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="content">
                                                            <input type="password" name="password" class="txtfield" size="26" required placeholder="Password" />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td colspan="2">
                                                            <input name="button" type="submit" class="btn" id="button" value="Submit" onclick="javascript: return form_login();" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>
                                    </div>

                                    <div class="accordion-inner timesheetlog" id="login_inner">
                                        <form method="post" action="https://admin.mavininfotech.com/emplogin/processlogin.php" name="timesheet">
                                            <h5>Employee System Login</h5>
                                            <table cellpadding="0" cellspacing="0" width="100%" align="center">
                                                <tbody>


                                                    <tr>
                                                        <td class="content">
                                                            <input type="text" name="formlogin" class="txtfield" size="26" required placeholder="Username" />
                                                            <input type="hidden" name="domain" value="mavininfotech.com" />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="content">
                                                            <input type="password" name="formpassword" class="txtfield" size="26" required placeholder="Password" />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td colspan="2">
                                                            <input name="button" type="submit" class="btn" id="button" value="Submit" onclick="javascript: return validate();" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2"><a href="javascript:void(0)" data-toggle="modal" data-target="#exampleModal1" onclick="createloginbox()">Forgot Password</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>
                                    </div>
                                    <div class="accordion-inner">
                                        <form action="https://admin.mavininfotech.com/emplogin/client/logincheck.php?ok=1" method="post" name="login_form" id="login_form">
                                            <h5>Client Login</h5>
                                            <table cellpadding="0" cellspacing="0" width="100%" align="center">
                                                <tbody>


                                                    <tr>
                                                        <td class="content">
                                                            <input type="text" name="username" class="txtfield" size="26" required placeholder="Username" />
                                                            <input type="hidden" name="domain" value="mavininfotech.com" />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="content">
                                                            <input type="password" name="password" class="txtfield" size="26" required placeholder="Password" />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td colspan="2">
                                                            <input name="button" type="submit" class="btn" id="button" value="Submit" onclick="javascript: return validate();" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2"><a href="javascript:void(0)" data-toggle="modal" data-target="#exampleModal1" onclick="createloginbox()">Forgot Password</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table><tbody><tr>  <td width="100%" id="td_cls"><a href="but.html"> <img src="https://res.cloudinary.com/mavin-infotech/image/upload/v1631434335/AM_mc_vs_dc_ae_lvwqbd.jpg" border="0" alt="PayPal Acceptance Mark" width="100%" /></a></td></tr></tbody></table>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div id="light1" class="white_content" >

                                    <div class="accordion-inner accordion-inner-login" id="login_inner">
                                        <form name="form1" method="post" action="https://admin.mavininfotech.com/emplogin/mailpassword.php">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" id="close_table">

                                                <tbody><tr>

                                                    <td>

                                                        <div align="center"><b>Email Address :</b> &nbsp;&nbsp;
                          <input type="text" class="txtfield" name="formemail" id="txtToMail" placeholder="Email" required /></div>

                                                    </td>

                                                </tr>

                                                </tbody></table>

                                            <div align="center">

                                                <input type="submit" name="button" id="btnEmPwd" value="Email my Password" />

                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    )
                }}

            </Query>
        )
    }

export default Footer;
