import react from '../../assets/react.png';
import node from '../../assets/node.png';
import mongodb from '../../assets/mongodb.png';
import postgres from '../../assets/postgres.jpeg';
import express from '../../assets/express.jpeg';
import nest from '../../assets/nest.png';
import django from '../../assets/django.png';
import springboot from '../../assets/springboot.png';
import javascript from '../../assets/javascript.png';
import sass from '../../assets/sass.png';
import python from '../../assets/python.png';
import typescript from '../../assets/typescript.png';
import golang from '../../assets/golang.png';
import java from '../../assets/java.png';
import aws from '../../assets/aws.png';
import docker from '../../assets/docker.jpeg';
import postman from '../../assets/postman.png';
import github from '../../assets/github.png';



import './Tools.scss';

const Tools = () => {
    const images = [
        react,
        node,
        mongodb,
        postgres,
        express,
        nest,
        springboot,
        javascript,
        sass,
        python,
        typescript,
        java,
        aws,
        docker,
        postman,
        github,
    ];

return(
    <div id="tools">
        <p className='header'>Tools & Technologies</p>
            <div className="images">
                {images.map((image, index) => (
                    <img src={image} alt={index} />
                ))}
            </div>
    </div>
    );
};

export default Tools;