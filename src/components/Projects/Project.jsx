import './Project.scss';

const Project = () =>{
    return(
        <div id='projects'>
            <div className="heading">Projects</div>
            <div className="project-container">
                <div className="project">
                    <a href="https://github.com/vicodevv/Library-API">Library API</a>
                    <p></p>
                    <p className='info'>This is a BookstoreAPI which performs the basic CRUD operations</p>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/Student-API">Student API</a>
                    <p className='info'>This is an API which is used to get students of a University.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/Ticket-API">Ticket API</a>
                    <p className='info'>This is an API which is used to create tickets and events.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/twitter-trends">Twitter Trends</a>
                    <p className='info'>This is used to get trending topics from a particular location on twitter.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/netflix-clone">Netflix clone</a>
                    <p className='info'>Mobile responsive Netflix clone built with ReactJS, Typescript, styled - component, react router, Firebase and context API for state management.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/weather-app">Weather app</a>
                    <p className='info'>A weather app</p>
                </div>
            </div>
        </div>
    )
}
export default Project;