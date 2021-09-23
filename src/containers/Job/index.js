import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import JOB_QUERY from "../../queries/jobs/job";

const Job = () => {
    let { id } = useParams();
    return (
        <Query query={JOB_QUERY} slug={id}>
            {({ data: { jobs } }) => {
                return (
                    <div className="uk-section container job_detail">
                        <h1>{jobs[0].title}</h1>
                        <div className="container">
                            <div class="recruit-job-job-ref">
                                <div class="job-ref-label">Title:</div>
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
                                <div class="job-ref-label">Job Description:</div>
                                <ReactMarkdown source={jobs[0].Responsibilities} />
                            </div>
                            <div class="recruit-job-job-ref">
                                <div class="job-ref-label">Job Description:</div>
                                <ReactMarkdown source={jobs[0].skillsRequired} />
                            </div>
                            <div class="recruit-job-job-ref">
                                <div class="job-ref-label">Job Description:</div>
                                <ReactMarkdown source={jobs[0].skillsDesired} />
                            </div>
                            <div class="recruit-job-job-ref">
                                <div class="job-ref-label">Education:</div>
                                {jobs[0].education}
                            </div>
                            <div class="recruit-job-job-ref">
                                <div class="job-ref-label">Primary Skill Set:</div>
                                {jobs[0].education}
                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    );
};

export default Job;
