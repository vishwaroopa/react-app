import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Query from "../Query";
import { Link } from "react-router-dom";
import { Card, Input } from 'semantic-ui-react'
export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get('https://strapi-image-mavin.herokuapp.com/jobs')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(APIData)
        }
    }

    return (
        <div id='testimonials23'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>&nbsp;</div>
                        <div className='col-md-4'>
                        <div className='form-group'>
                            <div class="main">
  <div class="form-group has-search">
                                    <span class="fa fa-search form-control-feedback"></span>
                                    <input type='text' className='search_input form-control'
                                        placeholder='Search by Job Title or Location or skill set'
                                        onChange={(e) => searchItems(e.target.value)}
                                    />
  </div>
                                </div>
                            
                            </div>
                    </div>
                    <div className='row'>
                    <div className='col-md-4'>&nbsp;</div></div>
                       {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <div className='col-md-4'>
                                <div className='testimonial'>

                                    <div className='testimonial-content'>

                                        <div className='testimonial-meta'> <h4>{item.jobtype} </h4></div>
                                        <Link to={`/jobs/${item.slug}`} className="uk-link-reset">
                                            <div className='testimonial-meta'> <h1>{item.title} - {item.jobReference} </h1></div>
                                        </Link>
                                        <div className='testimonial-meta'> <h4>{item.location} </h4></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <div className='col-md-4'>
                                <div className='testimonial'>

                                    <div className='testimonial-content'>

                                        <div className='testimonial-meta'> <h4>{item.jobtype} </h4></div>
                                        <Link to={`/jobs/${item.slug}`} className="uk-link-reset">
                                            <div className='testimonial-meta'> <h1>{item.title} - {item.jobReference} </h1></div>
                                        </Link>
                                        <div className='testimonial-meta'> <h4>{item.location} </h4></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
        </div>
                </div>
            </div>
    )
}