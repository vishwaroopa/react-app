import { useState } from 'react'
import React from "react";
//import emailjs from 'emailjs-com'

const initialState = {
    name: '',
    email: '',
    message: '',
}
export const Resumes = (props) => {
    const [{ name, email, message }, setState] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({ ...prevState, [name]: value }))
    }
    const clearState = () => setState({ ...initialState })


    return (
        <div>
            <div id='contacts'>

                <div className='container'>

                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='section-title'>
                                <h1>SUBMIT RESUME</h1>

                            </div>
                            <form name='sentMessage' validate >
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                id='name'
                                                name='name'
                                                className='form-control'
                                                placeholder='First Name'
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                id='email'
                                                name='name2'
                                                className='form-control'
                                                placeholder='Last Name'
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='email'
                                                id='email'
                                                name='email'
                                                className='form-control'
                                                placeholder='Email Address'
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                id='number'
                                                name='number'
                                                className='form-control'
                                                placeholder='Contact Number'
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
                                        placeholder='Im good at'
                                        required
                                        onChange={handleChange}
                                    ></textarea>
                                    <p className='help-block text-danger'></p>
                                </div>
                                <div className='form-group'>
                                    Upload Resume<input
                                        type="file"
                                        name='resume'
                                        id='resume'
                                        className='form-control'
                                        rows='4'
                                        placeholder='Upload Resume'
                                        required
                                        onChange={handleChange}
                                    />
                                    <p className='help-block text-danger'></p>
                                </div>
                                <div id='success'></div>
                                <button type='submit' className='btn btn-custom btn-lg'>
                                    Save Appication
                </button>
                            </form><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
