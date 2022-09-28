import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import mongodb from '../../assets/mongodb.png';
import postgresql from '../../assets/postgresql.png';
import golang from '../../assets/golang.png';
import springboot from '../../assets/springboot.png';
import docker from '../../assets/docker.png';
import kubernetes from '../../assets/kubernetes.png';

const Tools = () => {
    return(
        div id="tools">
            <><p className='header'>Tools & Technologies</p><div className="images">
                <img src={react} alt="react" />
                <img src={redux} alt="redux" />
                <img src={node} alt="node" />
                <img src={express} alt="express" />
                <img src={mongodb} alt="mongodb" />
                <img src={postgresql} alt="postgresql" />
                <img src={golang} alt="golang" />
                <img src={springboot} alt="springboot" />
                <img src={docker} alt="docker" />
                <img src={kubernetes} alt="kubernetes" />
            </div></>
        </div>
    )
}