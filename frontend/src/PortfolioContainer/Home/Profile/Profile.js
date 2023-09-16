import React from 'react';
// import Typical from 'react-typical';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: [
      'Enthusiastic Dev',
      'Full stack Developer',
      'MERN Stack Dev',
      'React/React Redux',
    ],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 40,
  });
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/Soumya.prakash.dutta">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/spdtiku/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/soumya-prakash-dutta-a19896b7/">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/SPDTeeKoo">
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {' '}
              Hello, I'm <span className="highlighted-text">Soumya</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {' '}
              <h1>
                {/* <Typical
                  loop={Infinity}
                  steps={[
                    'Enthusiastic Dev 😎',
                    1000,
                    'Full stack Developer 💻',
                    1000,
                    'Mern stack Dev 📱',
                    1000,
                    'Cross Platform Dev 🔴',
                    1000,
                    'React/React Native 🌐',
                    1000,
                  ]}
                /> */}
                {typeEffect}
              </h1>
            </span>
            <span className="profile-role-tagline">
              “Work smart. Get things done. No nonsense.”
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {' '}
              Hire Me{' '}
            </button>
            <a href="SoumyaDutta_Resume.pdf" download="SoumyaPrakashDutta.pdf">
              <button className="btn highlighted-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
