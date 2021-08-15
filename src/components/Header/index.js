import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import SLIDERS_QUERY from "../../queries/sliders/sliders";
const Sliders = () => {
    return (
        <Query query={SLIDERS_QUERY} id={null}>
            {({ data: { sliders } }) => {
                return (
                    <header id='header'>
                        <div className='intro'>
                            <div className='overlay'>

                                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        {sliders.map((slider, i) => {
                                            const imageUrl =
                                                process.env.NODE_ENV !== "development"
                                                    ? slider.bimage.url
                                                    : process.env.REACT_APP_BACKEND_URL + slider.bimage.url;
                                            const classname =
                                                slider.id != 1
                                                    ? "inactive"
                                                    : "active";
                                            return (
                                                <div class={`item ${classname}`}>
                                                    <img src={slider.bimage.url} alt="Chania" class="item_sub" />
                                                    <div class="carousel-caption">
                                                        <div className='col-md-6'>
                                                            <h1>
                                                                {slider.title}
                                                            </h1>
                                                            <p>{slider.subtitle}</p>
                                                            <ReactMarkdown source={slider.description} />
                                                            <Link to={slider.url} className='btn btn-custom btn-lg page-scroll'>
                                                                Learn More
                </Link>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <img src={slider.simage.url} alt="Chania" />
                                                        </div>


                                                    </div>
                                                </div>

                                            );
                                        })}
                                    </div>


                                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                        <span class="fa fa-chevron-circle-left"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                        <span class="fa fa-chevron-circle-right"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div></div></div></header>
                );
            }}
        </Query>
    )
}

export default Sliders;
