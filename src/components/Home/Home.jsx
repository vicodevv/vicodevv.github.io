import './Home.scss';
import { SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si';
import { FaChevronDown } from 'react-icons/fa';
import Vico from '../../assets/vico.png';
import Typewriter from 'typewriter-effect';

const Home = () => {
    const scrollDown = () => {
		const scrollTo = document.querySelector('#tools')
		scrollTo.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
	};
  return (
    <div id="home">
        <div className="container">
            <img src={Vico} alt="face" />
            <div className="bio">
                <div className="intro">Hey there, my name is</div>
                <div className="name">Omoniyi Victor</div>
                <p className='subText'>
                <Typewriter
                    options={{
                    strings: ['I`m a Software Engineer who is currently working on building simple tools and backend REST APIs using SpringBoot, Golang and Express',
                            'I have experience working with engineering teams. I`m also a strong problem-solver who understands the principles of computer science, such as algorithms and data structures.',
                            'I love watching and playing football during my free time, and I also enjoy listening to music and playing video games.'],
                    autoStart: true,
                    loop: true,
                }}
                />      
                </p>
                <div className="social">
                    <a href="https://github.com/vicodevv">
                        <SiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/victor-omoniyi-56a65218b/">
                        <SiLinkedin />
                    </a>
                </div>
                <div className="scrollDown">
                    <FaChevronDown onClick={() => scrollDown()} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;