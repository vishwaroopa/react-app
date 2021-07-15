import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import SLIDERS_QUERY from "../../queries/sliders/sliders";
const Sliders = () => {
    return (
        <Query query={SLIDERS_QUERY} id={null}>
            {({ data: { sliders } }) => {
                return (
                    <header id='header'>
                        <div className='intro'>
                            <div className='overlay'>
                                <div className='container'>
                                    <div className='row'>
                           
                                        {sliders.map((slider, i) => {
                                    return (
                                        <div className='col-md-8 col-md-offset-2 intro-text'>
                                <h1>
                                                {slider.title}
                                    <span></span>
                                </h1>
                                            <p>{slider.subtitle}</p>
                                            <p>{slider.description}</p>
                                <a
                                    href='#features'
                                    className='btn btn-custom btn-lg page-scroll'>
                                                Learn More
                </a>
                            </div>



                                    );
                                })}

                            </div>
                        </div>
                    </div>
</div></header>
                );
            }}
        </Query>
    )
}

export default Sliders;


