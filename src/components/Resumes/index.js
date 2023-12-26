import React from 'react'
//import Swal from 'sweetalert2'
import axios, { post } from 'axios';

class Resumes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            name: '',
            name2: '',
            email: '',
            number: '',
            mailSent: false,
            error: null,
            file: null,
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e) {
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file, this.state.name, this.state.feedback, this.state.name2, this.state.email, this.state.number).then((response) => {
            console.log(response.data);
            this.setState({
                mailSent: response.data.sent,
            })
        })
    }
    // saves the user's name entered to state
    nameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    name2Change = (event) => {
        this.setState({ name2: event.target.value })
    }
    // saves the user's email entered to state
    emailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    // saves the user's message entered to state
    messageChange = (event) => {
        this.setState({ feedback: event.target.value })
    }
    // saves the user's message entered to state
    resumeChange = (event) => {
        this.setState({ resume: event.target.value })
    }
    numberChange = (event) => {
        this.setState({ number: event.target.value })
    }
    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }
    //onSubmit of email form

    fileUpload(file, name, feedback, name2, email, number) {
        const url = 'https://backyard.laautospot.com/mavin/resume1.php';
        const formData = new FormData();
        formData.append('file', file)
        formData.append('name', name)
        formData.append('feedback', feedback)
        formData.append('name2', name2)
        formData.append('email', email)
        formData.append('number', number)
        const config = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }
        return post(url, formData, config)
    }
    render() {
        return (
            <div>
                <div id='contacts'>

                    <div className='container'>

                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='section-title'>
                                    <h1>SUBMIT RESUME</h1>

                                </div>
                                <form name='sentMessage' onSubmit={this.onFormSubmit} >
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
                                                    onChange={this.nameChange}
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
                                                    onChange={this.name2Change}
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
                                                    onChange={this.emailChange}
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
                                                    onChange={this.numberChange}
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
                                            onChange={this.messageChange}
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
                                            onChange={this.onChange}
                                        />
                                        <p className='help-block text-danger'></p>
                                    </div>
                                    <button type='submit' className='btn btn-custom btn-lg'>
                                        Save Appication
                </button>
                                    <div>
                                        {this.state.mailSent &&
                                            <div id='success'>Thank you for submitting resume. Our team will be reaching out to you shortly...</div>
                                        }
                                    </div>
                                </form><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resumes
