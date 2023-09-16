import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.link ? (
            <div className="heading-link">
              <a href={props.link}>
                <FontAwesomeIcon icon={faLink} color="black" />
              </a>
            </div>
          ) : (
            <div></div>
          )}
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 65 },
    { skill: 'React JS', ratingPercentage: 45 },
    { skill: 'Redux', ratingPercentage: 45 },
    { skill: 'Express JS', ratingPercentage: 59 },
    { skill: 'Node JS', ratingPercentage: 59 },
    { skill: 'Mongo Db', ratingPercentage: 47 },
    { skill: 'AWS', ratingPercentage: 40 },
    { skill: 'HTML', ratingPercentage: 70 },
    { skill: 'CSS', ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: 'Review Places Website ',
      // duration: { fromDate: '2020', toDate: '2021' },
      link: 'https://github.com/SPDTeeKoo/SPD-Camp.git',
      description:
        'An online review website designed to create, search and review different camping location around the world.',
      subHeading:
        'Technologies Used:  Javascript, HTML, CSS, Bootstrap, Mongo DB, Express Js, Node.js',
    },
    {
      title: 'Stack Overflow Clone ',
      // duration: { fromDate: '2020', toDate: '2021' },
      link: 'https://github.com/SPDTeeKoo/Stack-Overflow-Clone-App-2.git',
      description:
        'The world famous question and answer website for programmers.',
      subHeading:
        'Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Javascript.',
    },
    {
      title: 'E-commerce Website',
      // duration: { fromDate: '2020', toDate: '2021' },
      link: 'https://gold-lonely-chick.cyclic.cloud/',
      description:
        'E-commerce website where you can buy various products as a buyer as well as sell products as a seller',
      subHeading:
        'Technologies Used: React JS, Context API, MongoDB, Node.js, Javascript, Bootsrap',
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'Guvi Geeks Network Pvt. Ltd'}
        subHeading={'Certification for Full Stack Web Developer'}
        fromDate={'2022'}
        toDate={'2023'}
      />

      <ResumeHeading
        heading={'Osmania University, Hyderabad'}
        subHeading={'Masters in Mechanical-Design For Manufacture'}
        fromDate={'2015'}
        toDate={'2018'}
      />
      <ResumeHeading
        heading={'Siksha O Anushandhan University, Bhubaneswar'}
        subHeading={'Bachelors in Mechanical Engineering'}
        fromDate={'2011'}
        toDate={'2015'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={'CSIR-IMMT, Bhubaneswar'}
          subHeading={'Project Associate'}
          fromDate={'February 2021'}
          toDate={'August 2023'}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            Worked as a Design Engineer.
          </span>
        </div> */}
        <div className="experience-description">
          <span className="resume-description-text">
            Collaborated with cross-functional teams to design and optimize
            mechanical systems, enhancing product performance and reducing
            production costs. Utilized programming skills to automate repetitive
            tasks, increasing workflow efficiency. Took initiative to develop a
            web-based dashboard for monitoring and analyzing products and
            workers status data, which significantly improved data accessibility
            and decision-making processes.
          </span>
          {/* <br />
          <span className="resume-description-text">
            - Utilized programming skills to automate repetitive tasks,
            increasing workflow efficiency.{' '}
          </span>
          <br />
          <span className="resume-description-text">
            - Took initiative to develop a web-based dashboard for monitoring
            and analyzing products and workers status data, which significantly
            improved data accessibility and decision-making processes.
          </span>
          <br /> */}
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={'CSIR-CSIO, Chandigarh'}
          subHeading={'Project Associate'}
          fromDate={'December 2018'}
          toDate={'March 2020'}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            Worked as a Design Engineer
          </span>
        </div> */}
        <div className="experience-description">
          <span className="resume-description-text">
            Designed and developed mechanical components and systems for Cold
            Chamber storage applications. Utilized CAD software to create 3D
            models, drawings, and prototypes, reducing design errors by 90%.
            Conducted stress analysis and simulations, optimizing product
            designs for performance and durability. Collaborated with
            manufacturing teams to ensure seamless production and quality
            control.
          </span>
          {/* <br />
          <span className="resume-description-text">
            - Utilized CAD software to create 3D models, drawings, and
            prototypes, reducing design errors by 90%.{' '}
          </span>
          <br />
          <span className="resume-description-text">
            - Conducted stress analysis and simulations, optimizing product
            designs for performance and durability.
          </span>
          <br />
          <span className="resume-description-text">
            - Collaborated with manufacturing teams to ensure seamless
            production and quality control.
          </span>
          <br /> */}
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          link={projectsDetails.link}
          description={projectsDetails.description}
          // fromDate={projectsDetails.duration.fromDate}
          // toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Exploring Places"
        description="Apart from being a tech enthusiast and a code writer, i love to travel and meet new people and adopting myself to new culture."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on. Apart from that i have a hobby of playing instruments especially guitar."
      />
      <ResumeHeading
        heading="Reading Books"
        description="In my leisure time I like reading novels and and keeping myself updated in current trends in Science and Technolgy "
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ''}
    >
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
