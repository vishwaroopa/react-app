import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import { useParams } from "react-router";
import Articles from "../../components/Articles";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";
import CATEGORIES_QUERY from "../../queries/category/categories";
import GLOBAL_QUERY from "../../queries/global/global";
import logo from '../../assets/logo.png';

const Nav = () => {
    return (
        <div>
            <Query query={CATEGORIES_QUERY} id={null}>
                {({ data: { categories } }) => {
                    return (

                        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
                            <div className='container'>
                                <div className='navbar-header'>
                                    <button
                                        type='button'
                                        className='navbar-toggle collapsed'
                                        data-toggle='collapse'
                                        data-target='#bs-example-navbar-collapse-1'
                                    >
                                        {' '}
                                        <span className='sr-only'>Toggle navigation</span>{' '}
                                        <span className='icon-bar'></span>{' '}
                                        <span className='icon-bar'></span>{' '}
                                        <span className='icon-bar'></span>{' '}
                                    </button>
                                    <Link to="/"><img src={logo} /></Link>
                                </div>

                                <div
                                    className='collapse navbar-collapse'
                                    id='bs-example-navbar-collapse-1'
                                >
                                    <ul className='nav navbar-nav navbar-right'>
                                        {categories.map((category, i) => {
                                            return (
                                                <li class="nav-item dropdown" key={category.slug}>
                                                    
                                                        {category.name}
                                                    
                                                    <ul class="dropdown-menu">
                                                        {category.articles.map(function (articles, i) {
                                                            return <li> <Link
                                                                to={`/content/${articles.slug}`}
                                                                className="dropdown-item"
                                                            >{articles.title}</Link></li>
                                                        })}
                                                    </ul>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    );
                }}
            </Query>
        </div>
    );
};

export default Nav;
