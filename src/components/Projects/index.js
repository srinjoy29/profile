import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, SeeMoreButton } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6); // State to control the number of visible projects

  const handleSeeMore = () => {
    setVisibleCount(visibleCount + 6); // Increase the count by 6 on "See More"
  };

  const filteredProjects = toggle === 'all'
    ? projects
    : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to Machine Learning and Web3. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? 
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton> 
            : 
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ? 
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton> 
            : 
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Web3' ? 
            <ToggleButton active value="Web3" onClick={() => setToggle('Web3')}>Web3</ToggleButton> 
            : 
            <ToggleButton value="Web3" onClick={() => setToggle('Web3')}>Web3</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ? 
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton> 
            : 
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup>

        <CardContainer>
          {/* Display projects based on the selected category */}
          {filteredProjects
            .slice(0, visibleCount) // Limit the number of projects displayed
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>

        {/* Show "See More" button if there are more projects to display */}
        {visibleCount < filteredProjects.length && (
          <SeeMoreButton onClick={handleSeeMore}>See More</SeeMoreButton>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
