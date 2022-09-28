import './Home.scss';
import { SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si';

const Home = () => {
  return (
    <div id="home">
        <div className="container">
            <img src="../../assets/vico memoji.png" alt="" />
            <div className="bio">
                <div className="intro">Hey there, my name is</div>
                <div className="name">Omoniyi Victor</div>
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