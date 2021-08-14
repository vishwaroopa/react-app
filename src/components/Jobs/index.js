import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import JOBS_QUERY from "../../queries/jobs/jobs";
const Jobs = () => {
    return (
        <Query query={JOBS_QUERY} id={null}>
            {({ data: { jobs } }) => {
                return (
                    <div id='testimonials'>
                        <div className='container'>
                            <div className='section-title text-center'>
                                <h2>What our clients say</h2>
                            </div>
                            <div className='row'>
                                {jobs.map((job, i) => {

                                    return (
                                        <div className='col-md-4'>
                                            <div className='testimonial'>

                                                <div className='testimonial-content'>

                                                    <div className='testimonial-meta'> <h4>{job.jobtype} </h4></div>
                                                    <Link to={`/jobs/${job.slug}`} className="uk-link-reset">
                                                        <div className='testimonial-meta'> <h1>{job.tit} </h1></div>
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

export default Jobs;