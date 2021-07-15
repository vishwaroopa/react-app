import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import CLIENTS_QUERY from "../../queries/clients/clients";
const Clients = () => {
    return (
        <Query query={CLIENTS_QUERY} id={null}>
            {({ data: { clients } }) => {
                return (
                    <div id = 'team' className = 'text-center' >
                        <div className='container'>
                            <div className='col-md-8 col-md-offset-2 section-title'>
                                <h2>Clients</h2>
                                
                            </div>
                            <div id='row'>
                                {clients.map((client, i) => {
                                    const imageUrl =
                                        process.env.NODE_ENV !== "development"
                                            ? client.image.url
                                            : process.env.REACT_APP_BACKEND_URL + client.image.url;
                                    return (
                                        <div  className='col-md-3 col-sm-6 team'>
                                            <div className='thumbnail'>
                                                {' '}
                                                <img src={imageUrl} alt='...' className='team-img' />
                                                <div className='caption'>
                                                    <h4>{client.title}</h4>
                                                    
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

export default Clients;


