import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import FEATURES_QUERY from "../../queries/features/features";
import logo from '../../assets/LearnMore-button_4.png';
const Features = () => {
    return (
            <Query query={FEATURES_QUERY} id={null}>
                {({ data: { features } }) => {
                return (
        <div id='features' className='text-center'>
            <div className='container'>
                <div className='col-md-10 col-md-offset-1 section-title'>
                    <h2>Features</h2>
                </div>
                                <div className='row'>
                                    {features.map((feature, i) => {
                                        return (
                                            <div  className='col-xs-6 col-md-3'>
                                                {' '}
                                                <i className={feature.icons}></i>
                                                <h3>{feature.Title}</h3>
                                                <p>{feature.Description}</p>
                                                <h3><img src={logo} alt="LearnMore-button.png" /></h3>
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

export default Features;


