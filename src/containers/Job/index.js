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
                    <div className="job_detail">
                        <h1>{jobs[0].title}</h1>
                        <div className="uk-section">
                            <div className="uk-container uk-container-small">
                                <ReactMarkdown source={jobs[0].location} />

                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    );
};

export default Job;
