import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import HOMEPAGE_QUERY from "../../queries/homepage/homepage";
const homepage = () => {
    return (
        <Query query={HOMEPAGE_QUERY} id={null}>
            {({ data: { homepage } }) => {
                return (
                    <div id='about'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xs-12 col-md-6 aboutus'>
                                    <div className='list-style'>
                                        
                                        <h3>{homepage.info.title}</h3>
                                            <ReactMarkdown source={homepage.info.description} />
                                                
                                         
                                        
                                    </div>
                                </div>
                                <div className='col-xs-12 col-md-6'>
                                    <div className='about-text'>
                                        <h2> {homepage.Aboutus.title}</h2>
                                        <ReactMarkdown source={homepage.Aboutus.description} />  
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    )
}

export default homepage;


