import React from "react";
import Query from "Query";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import CATEGORIES_QUERY from "../../queries/category/categories";
import GLOBAL_QUERY from "../../queries/global/global";
const Image = () => {
    return (
        <Query query={GLOBAL_QUERY} id={null}>
            {({ data: { global } }) => {
                const imageUrl =
                    process.env.NODE_ENV !== "development"
                        ? global.defaultSeo.shareImage.url
                        : process.env.REACT_APP_BACKEND_URL + global.defaultSeo.shareImage.url;
                return (
                    <img
                        src={imageUrl}
                    />
                )
            }}

        </Query>
    )
}

export default Image;