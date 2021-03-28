import React from 'react';
import { StyledSection, StyledContents } from './styles';
import { projects } from './copy';
import { ProjectCard, Wrapper } from '../../ui-components';
import Slider from 'react-slick';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <StyledSection id="projects">
      <Wrapper>
        <h1>Projects</h1>
        <StyledContents>
          <Slider {...settings}>
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={projects.indexOf(project)}
                  project={project}
                />
              );
            })}
          </Slider>
        </StyledContents>
      </Wrapper>
    </StyledSection>
  );
};

export default Projects;
