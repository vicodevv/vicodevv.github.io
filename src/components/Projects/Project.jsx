import './Project.scss';

const Project = () =>{
    return(
        <div id='projects'>
            <div className="heading">Projects</div>
            <div className="project-container">
                <div className="project">
                    <a href="https://github.com/vicodevv/Library-API"></a>
                    <p></p>
                    <p className='info'>This is a BookstoreAPI which performs the basic CRUD operations</p>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/Student-API"></a>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/Ticket-API"></a>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/twitter-trends"></a>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/netflix-clone"></a>
                </div>
                <div className="project">
                    <a href="https://github.com/vicodevv/weather-app"></a>
                </div>
            </div>
        </div>
    )
}
export default Project;