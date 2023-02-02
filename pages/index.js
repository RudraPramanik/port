import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const Projects = dynamic(() => import('../containers/Projects'));
const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
const GithubProfileCard = dynamic(() =>
  import('../components/GithubProfileCard')
);
import { openSource } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs.jsx';

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <div
        style={{
          backgroundImage: ' linear-gradient(#cf734e, #6032a8)',
          marginTop: '',
        }}
      >
        <Projects />
      </div>
      <div
        style={{
          backgroundImage: ' linear-gradient(#6032a8, #739ade)',
          marginTop: '',
        }}
      >
        <Experience />
      </div>

      {/* <div style={{ backgroundColor: '#6032a8', marginTop: '-50px' }}> */}
      <div
        style={{
          backgroundImage: ' linear-gradient(#739ade , #130936)',
          marginTop: '-50px',
        }}
      >
        <Skills />
      </div>
      <div
        style={{
          backgroundImage: ' linear-gradient(#130936 ,#5478f0)',
          marginTop: '-50px',
        }}
      >
        <Education />
      </div>
      <div>
        <GithubProfileCard prof={githubProfileData} />
      </div>
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
