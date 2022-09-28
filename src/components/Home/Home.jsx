import './Home.scss';
import { SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si';
import Vico from '../../assets/vico.png';

const Home = () => {
  return (
    <div id="home">
        <div className="container">
            <img src={Vico} alt="face" />
            <div className="bio">
                <div className="intro">Hey there, my name is</div>
                <div className="name">Omoniyi Victor</div>
                <p className='subText'>
                    I'm a Software Engineer who is currently working on building simple tools and backend REST APIs using SpringBoot, Golang and Express
                </p>
                <div className="social">
                    <a href="https://github.com/vicodevv">
                        <SiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/victor-omoniyi-56a65218b/">
                        <SiLinkedin />
                    </a>
                    <a href="https://twitter.com/vicodev_">
                        <SiTwitter />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;