import { SiGithub } from 'react-icons/si';
import './Project.scss';

const Project = () =>{
    return(
        <div id='projects'>
            <div className="heading">Projects</div>
            <div className="project-container">
                <div className="project">
                    <a href="https://github.com/vicodevv/Library-API">Library API</a>
                    <p className='tech'>Go</p>
                    <p className='info'>This is a BookstoreAPI which performs the basic CRUD operations.</p>
                    <div className="icons">
                        <a href="https://github.com/vicodevv/Library-API">
                            <SiGithub/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/Student-API">Student API</a>
                    <p className='tech'>SpringBoot, MongoDB, Docker</p>
                    <p className='info'>This is an API which is used to get students of a University.</p>
                    <div className="icons">
                        <a href="https://github.com/vicodevv/Student-API">
                        <SiGithub/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/Ticket-API">Ticket API</a>
                    <p className='tech'>NodeJS, ExpressJS, MongoDB</p>
                    <p className='info'>This is an API which is used to create tickets and events.</p>
                    <div className="icons">
                        <a href="https://github.com/vicodevv/Ticket-API">
                        <SiGithub/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/twitter-trends">Twitter Trends</a>
                    <p className='tech'>ReactJS, Twitter API</p>
                    <p className='info'>This is used to get trending topics from a particular location on twitter.</p>
                    <div className="icons">
                        <a href="https://github.com/vicodevv/twitter-trends">
                        <SiGithub/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/netflix-clone">Netflix clone</a>
                    <p className='tech'>ReactJS, Typescript, NodeJS, ExpressJS, MongoDB</p>
                    <p className='info'>This is a full-stack mobile responsive Netflix clone.</p>
                    <div className="icons">
                        <a href="https://github.com/vicodevv/netflix-clone">
                        <SiGithub/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/weather-app">Weather app</a>
                    <p className='tech'>HTML, CSS, Open Weather API</p>
                    <p className='info'>This is a weather app which gives the Temperature, Humidity and Wind speed of a location.</p>
                    <div className="icons">
                        <a href="https://github.com/vicodevv/weather-app">
                        <SiGithub/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;