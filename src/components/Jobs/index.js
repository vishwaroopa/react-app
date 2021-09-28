import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import JOBS_QUERY from "../../queries/jobs/jobs";
import axios from 'axios';
class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            skill: '',
            mailSent: false,
            error: null
        };
    }
    // saves the user's name entered to state
    titleChange = (event) => {
        this.setState({ title: event.target.value })
    }

    // saves the user's email entered to state
    skillChange = (event) => {
        this.setState({ skill: event.target.value })
    }
    //onSubmit of email form
    handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'post',
            url: 'https://admin.mavininfotech.com/api/contact.php',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: this.state
        })
            .then(result => {
                console.log(result.data)
                this.setState({
                    mailSent: result.data.sent,
                })
                console.log(this.state)
            })
            .catch(error => this.setState({
                error: error.message
            }));
    }
    render() {
        return (
            <Query query={JOBS_QUERY} id={null}>
                {({ data: { jobs } }) => {
                    return (
                        <div id='testimonials23'>
                            <div className='container'>
                                <form name='sentMessage' id="apply_resume" onSubmit={this.onFormSubmit} >
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    id='title'
                                                    name='title'
                                                    className='form-control'
                                                    placeholder='Search by Job Title'
                                                    required
                                                    onChange={this.titleChange}
                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    id='skill'
                                                    name='skill'
                                                    className='form-control'
                                                    placeholder='Search by Skill Set'
                                                    required
                                                    onChange={this.skillChange}
                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <button type='submit' className='btn btn-custom btn-lg'>
                                                    Find Jobs</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div className='row'>
                                    {jobs.map((job, i) => {

                                        return (
                                            <div className='col-md-4'>
                                                <div className='testimonial'>

                                                    <div className='testimonial-content'>

                                                        <div className='testimonial-meta'> <h4>{job.company} </h4></div>
                                                        <Link to={`/jobs/${job.slug}`} className="uk-link-reset">
                                                            <div className='testimonial-meta'> <h1>{job.title} - {job.jobReference} </h1></div>
                                                        </Link>
                                                        <div className='testimonial-meta'> <h4>{job.location} </h4></div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                </div>
                            </div>
                        </div>

                    );
                }}
            </Query>
        )
    }
}

export default Jobs;