import { useState } from 'react'
import React from "react";
//import emailjs from 'emailjs-com'

const initialState = {
    name: '',
    email: '',
    message: '',
}
export const Contact = (props) => {
    const [{ name, email, message }, setState] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({ ...prevState, [name]: value }))
    }
    const clearState = () => setState({ ...initialState })


    return (
        <div>
            <div id='contacts'>
                <div className='col-md-12'>
                    <iframe frameborder="0" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3236222837354!2d78.38882757669889!3d17.444217998136647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915e148b1e5f%3A0x46546dd9b6691d!2sMavin+Infotech!5e0!3m2!1sen!2sin!4v1413445956436"></iframe>
                </div>
                <div className='container'>

                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='section-title'>
                                <h1>Get In Touch</h1>
                                <h4>
                                    Please fill out the form below to send us an email and we will
                                    get back to you as soon as possible.
                </h4>
                            </div>
                            <form name='sentMessage' validate >
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                id='name'
                                                name='name'
                                                className='form-control'
                                                placeholder='Your Name'
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='form-group'>
                                            <input
                                                type='email'
                                                id='email'
                                                name='email'
                                                className='form-control'
                                                placeholder='Your E-mail Address'
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                id='subject'
                                                name='subject'
                                                className='form-control'
                                                placeholder='Subject'
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <textarea
                                        name='message'
                                        id='message'
                                        className='form-control'
                                        rows='4'
                                        placeholder='Message'
                                        required
                                        onChange={handleChange}
                                    ></textarea>
                                    <p className='help-block text-danger'></p>
                                </div>
                                <div id='success'></div>
                                <button type='submit' className='btn btn-custom btn-lg'>
                                    Send Message
                </button>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-5 col-md-offset-1 contact-info'>
                        <h1>We'd Love To Hear From You</h1>
                        <h4>India Office and Development Center:</h4>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-map-marker'></i>   Block # 304 & 305, Bhanu Arcade, Opp. Hi-Tech theater, Madhapur, Hyderabad-500081, Telangana, India.
                                    </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-phone'></i> +91-40-40056734<br />

                                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-fax'></i> +91-40-40056734<br />
                                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-envelope-o'></i>  info@mavininfotech.com
                                    </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-phone'></i> D-U-N-S # 828400320
                                    </span>
                            </p>
                        </div>
                        <p className='dashed-item'></p>
                        <h4>Bangalore Office and Development Center:</h4>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-map-marker'></i>   CoWrks, RMZ Ecoworld, Building 6A, The Bay, Outer Ring Road, Bellandur, Bengaluru-560103, Karnataka, India.
                                    </span>
                            </p>
                        </div>
                        <p className='dashed-item'></p>
                        <h4> Sales & Support:</h4>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    Augustine R.
                                    </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-phone'></i> +91-9963-197111<br />

                                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-fax'></i> +1 (312) 265 6214<br />
                                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-envelope-o'></i>  augustine@mavininfotech.com
                                    </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-envelope-o'></i> jessica@mavininfotech.com
                                    </span>
                            </p>
                        </div>
                        <p className='dashed-item'></p>
                        <h4> Australia Office:</h4>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    Garfield Vijay (Project Manager)
                                    </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-map-marker'></i> 10 Anderson ct Endeavour hills Vic-3802.<br />

                                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-fax'></i> +61 448278886<br />
                                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-envelope-o'></i>  vijay.garfield@mavininfotech.com
                                    </span>
                            </p>
                        </div>
                        <p className='dashed-item'></p>
                        <h4> Kenya Office:</h4>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    T.Veera Chary
                                    </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-map-marker'></i> Flat No:5, Natasha Apartments, South 'E', Nairobi, Kenya.<br />

                                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-fax'></i> +254 734 800010<br />
                                </span>
                            </p>
                        </div>




                        <h3>Links</h3>
                        <div className='row' id="contact">
                            <div className='social'>
                                <ul>
                                    <li>
                                        <a href={props.data ? props.data.facebook : '/'}>
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.twitter : '/'}>
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.youtube : '/'}>
                                            <i className='fa fa-youtube'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
