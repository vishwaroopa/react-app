import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import PRODUCTS_QUERY from "../../queries/products/products";
import logo from '../../assets/LearnMore-button_4.png';
const Services = () => {
    return (
        <Query query={PRODUCTS_QUERY} id={null}>
            {({ data: { products } }) => {
                return (
                    <div id='services' className='text-center'>
                        <div className='container'>
                            <div className='section-title'>
                                <h2>Our Products</h2>
                               
                            </div>
                            <div className='row'>
                                {products.map((product, i) => {
                                    return (
                                        <div  className='col-md-4'>
                            {' '}
                                            <i className={product.icons}></i>
                            <div className='service-desc'>
                                                <h3>{product.title}</h3>
                                                <p>{product.description}</p>
                                                <h3><Link to={product.url} className='btn'><img src={logo} alt="LearnMore-button.png" /></Link></h3>
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

export default Services;


