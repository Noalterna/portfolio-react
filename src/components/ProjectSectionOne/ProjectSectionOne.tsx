import React from 'react';
import {ProjectSectionOneContainer, Arrow} from './ProjectSectionOneElements';
import { expand, shrink } from '../../cursor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


const ProjectSectionOne = () => {

    return (
        <>
            <ProjectSectionOneContainer id="projectOne">
                <h1>HELLO PROJECT</h1>
            </ProjectSectionOneContainer>
            <Arrow href="#hero" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><FontAwesomeIcon icon={faChevronUp} size='3x' /></Arrow>
        </>


    )
}

export default ProjectSectionOne;