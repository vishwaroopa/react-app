import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import axios, { post } from 'axios';

import JOB_QUERY from "../../queries/jobs/job";
import { Link } from "react-router-dom";
function BlogPost() {
    let { id } = useParams();
    return <div>Now showing post {id}</div>;
}
function showAlert7() {
    document.getElementById("apply_resume").style.display = "block";
    document.getElementById("button_resume").style.display = "none";
}
class Job extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
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
        this.fileUpload(this.state.file, this.state.name, this.state.email, this.state.number).then((response) => {
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

    // saves the user's email entered to state
    emailChange = (event) => {
        this.setState({ email: event.target.value })
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

    fileUpload(file, name, email, number) {
        const url = 'http://admin.mavininfotech.com/api/resume3.php';
        const formData = new FormData();
        formData.append('file', file)
        formData.append('name', name)
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
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        return (
            <Query query={JOB_QUERY} slug={id}>
                {({ data: { jobs } }) => {
                    const jobs_url = "/content/jobs";
                    return (
                        <div className="uk-section container job_detail">
                            <h1><span>{jobs[0].title}</span><span class="title_right"> <Link
                                to={jobs_url}
                                className="uk-link-reset"
                            >View all Vacancies</Link></span></h1>
                            <div className="container">
                                <div class="recruit-job-job-ref">
                                    <div class="job-ref-label">Role:</div>
                                    {jobs[0].title}
                                </div>
                                <div class="recruit-job-job-ref">
                                    <div class="job-ref-label">Location:</div>
                                    {jobs[0].location}
                                </div>
                                <div class="recruit-job-job-ref">
                                    <div class="job-ref-label">Experience:</div>
                                    {jobs[0].experience}
                                </div>
                                <div class="recruit-job-job-ref">
                                    <div class="job-ref-label">Job Description:</div>
                                    <ReactMarkdown source={jobs[0].jobdescription} />
                                </div>
                                <div class="recruit-job-job-ref">
                                    <div class="job-ref-label">Responsibilities:</div>
                                    <ReactMarkdown source={jobs[0].Responsibilities} />
                                </div>
                                <div class="recruit-job-job-ref">
                                    <div class="job-ref-label">Skills Required:</div>
                                    <ReactMarkdown source={jobs[0].skillsRequired} />
                                </div>
                                <div class="recruit-job-job-ref">
                                    <div class="job-ref-label">Skill Desired:</div>
                                    <ReactMarkdown source={jobs[0].skillsDesired} />
                                </div>
                                <div class="recruit-job-job-ref">
                                    <div class="job-ref-label">Education:</div>
                                    {jobs[0].education}
                                </div>
                                <div class="recruit-job-job-ref">
                                    <div class="job-ref-label">Primary Skill Set:</div>
                                    {jobs[0].primarySkillset}
                                </div>
                            </div>
                            <div class="recruit-job-job-ref">
                                <button type="submit" id="button_resume" onClick={showAlert7} class="btn btn-custom btn-lg">Apply</button>
                            </div>
                            <form name='sentMessage' id="apply_resume" onSubmit={this.onFormSubmit} >
                                <input type='hidden' name="title" value={jobs[0].title} />
                                <input type='hidden' name="location" value={jobs[0].location} />
                                <input type='hidden' name="experience" value={jobs[0].experience} />
                                <input type='hidden' name="jobdescription" value={jobs[0].jobdescription} />
                                <input type='hidden' name="responsibilities" value={jobs[0].Responsibilities} />
                                <input type='hidden' name="skillsrequired" value={jobs[0].skillsRequired} />
                                <input type='hidden' name="skillsdesired" value={jobs[0].skillsDesired} />
                                <input type='hidden' name="education" value={jobs[0].education} />
                                <input type='hidden' name="primaryskillset" value={jobs[0].primarySkillset} />
                                <input type='hidden' name="jobReference" value={jobs[0].jobReference} />
                                <input type='hidden' name="goodtohaveskills" value={jobs[0].goodtohaveskills} />
                                <input type='hidden' name="slug" value={jobs[0].slug} />
                                
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                id='name'
                                                name='name'
                                                className='form-control'
                                                placeholder='Name'
                                                required
                                                onChange={this.nameChange}
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
                                        <div id='success'>Thank you for submitting resume with us. We will check and get back to you soon..</div>
                                    }
                                </div>
                            </form>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default Job;
