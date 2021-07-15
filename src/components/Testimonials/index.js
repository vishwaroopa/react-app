import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import TESTIMONIALS_QUERY from "../../queries/testimonials/testimonials";
const Testimonials = () => {
    return (
        <Query query={TESTIMONIALS_QUERY} id={null}>
            {({ data: { testimonials } }) => {
                return (
                    <div id='testimonials'>
                        <div className='container'>
                            <div className='section-title text-center'>
                                <h2>What our clients say</h2>
                            </div>
                            <div className='row'>
                                {testimonials.map((testimonial, i) => {
                                    const imageUrl = process.env.NODE_ENV !== "development"
                                            ? testimonial.image.url
                                            : process.env.REACT_APP_BACKEND_URL + testimonial.image.url;
                                    return (
                                        <div  className='col-md-4'>
                                            <div className='testimonial'>
                                                <div className='testimonial-image'>
                                                    {' '}
                                                    <img src={imageUrl} alt='' />{' '}
                                                </div>
                                                <div className='testimonial-content'>
                                                    <p>"{testimonial.description}"</p>
                                                    <div className='testimonial-meta'> - {testimonial.title} </div>
                                                    <div className='testimonial-meta'> - {testimonial.designation} </div>
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

export default Testimonials;




