import React from 'react';
import { experience } from '../portfolio';
import { Container, Row } from 'reactstrap';

import { Fade } from 'react-reveal';

import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  return (
    experience && (
      <section className="section section-lg">
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 40 2560 90"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Experience</h4>
            </div>
          </div>
          <Row className="row-grid align-items-start">
            {experience.map((data, i) => {
              return <ExperienceCard key={i} data={data} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Experience;
