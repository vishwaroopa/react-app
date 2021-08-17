import React from 'react'
//import Swal from 'sweetalert2'

class Resumes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            name: '',
            email: '',
            subject: ''
        };
    }
    // saves the user's name entered to state
    nameChange = (event) => {
        this.setState({ name: event.target.value })
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
    subjectChange = (event) => {
        this.setState({ subject: event.target.value })
    }
    //onSubmit of email form
    handleSubmit = (event) => {
        event.preventDefault();

        //This templateId is created in EmailJS.com
        const templateId = 'template_50ndavb';

        //This is a custom method from EmailJS that takes the information 
        //from the form and sends the email with the information gathered 
        //and formats the email based on the templateID provided.
        this.sendFeedback(templateId, {
            message: this.state.feedback,
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject
        }
        )

    }

    //Custom EmailJS method
    sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'service_sx3mkzo', templateId,
            variables
        ).then(res => {
            // Email successfully sent alert

        })
            // Email Failed to send Error alert
            .catch(err => {

                console.error('Email Error:', err)
            })
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
}

export default Resumes