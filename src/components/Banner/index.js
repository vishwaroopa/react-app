import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import Query from "../Query";
import HOMEPAGE_QUERY from "../../queries/homepage/homepage";

const Banner = () => {
    return (
        <Query query={HOMEPAGE_QUERY} id={null}>
            {({ data: { homepage } }) => {
                const imageUrl =
                    process.env.NODE_ENV !== "development"
                        ? homepage.banner1.image.url
                        : process.env.REACT_APP_BACKEND_URL + homepage.banner1.image.url;
                return (
                    <section class="red-bg">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="features-14">
                                        <h1 class="heading">{homepage.banner1.title}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    )
            }}

        </Query>
    )
}

export default Banner;