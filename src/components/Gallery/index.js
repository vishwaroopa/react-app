import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import PROJECTS_QUERY from "../../queries/projects/projects";
const Projects = () => {
    return (
        <Query query={PROJECTS_QUERY} id={null}>
            {({ data: { projects } }) => {
                return (
                    <div id='portfolio' className='text-center'>
                        <div className='container'>
                            <div className='section-title'>
                                <h2>LATEST PROJECTS/CLIENTS</h2>
                               
                            </div>
                 <div className='row'>
                   <div className='portfolio-items'>
                                    {projects.map((project, i) => {
                         const imageUrl =
                                            process.env.NODE_ENV !== "development"
                                 ? project.image.url
                                                : process.env.REACT_APP_BACKEND_URL + project.image.url;
                        return (

                        <div className='col-sm-6 col-md-4 col-lg-4'>
                            <div className='portfolio-item'>
                                <div className='hover-bg'>
                                    {' '}
                                    <a
                                         href={project.url}
                                         title={project.title}
                                        data-lightbox-gallery='gallery1'
                                    >
                                        <div className='hover-text'>
                                                <h4>{project.title}</h4>
                                                <p>{project.description}</p>
                                        </div>
                                        <img
                                                src={imageUrl}
                                            className='img-responsive'
                                            alt='Project Title'
                                        />{' '}
                                    </a>{' '}
                                </div>
                            </div>
                        </div>
                                        
                     );
                     })}

                   </div>
                            </div>
                        </div>
                        </div>
                  );
            }}
                            
        </Query>
    )
}

export default Projects;


