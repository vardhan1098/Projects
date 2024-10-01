import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({title,image}) => {
    return (
        <div className='card'>
            <img src={image} />
            <h2>{title}</h2>
            <button className='btn-view'>View</button>
        </div>
    );
};

export default ProjectCard;