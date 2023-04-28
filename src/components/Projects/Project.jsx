import { SiGithub } from 'react-icons/si';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsLink45Deg } from 'react-icons/bs';

import './Project.scss';

const Project = () =>{
    return(
        <div id='projects'>
            <div className="heading">Projects</div>
            <div className="project-container">
                 
            <div className="project-image">
                <LazyLoadImage src={"https://user-images.githubusercontent.com/55485439/234602249-c5487928-ebf4-42e7-96f8-19d4b7736886.png"} alt="Library Store" PlaceholderSrc={"https://user-images.githubusercontent.com/55485439/235265482-a0a27dd4-8e63-42a4-bbce-7341990a69fc.jpg"}/>
            </div>
            <div className="project">
                <a href="https://github.com/vicodevv/library-store">Library Store</a>
                <p className='tech'>Angular, Typescript, SpringBoot, Java, MySQL</p>
                <p className='info'>A Spring boot and Angular web application for managing a small library. The application has a frontend interface and a backend (admin) interface. Library Managers can add books to the library's collection via the admin interface. Customers can browse for books, borrow and return the books via the frontend interface. They can see past books they have borrowed.</p>
                <div className="icons">
                    <a href="https://github.com/vicodevv/library-store">
                        <SiGithub/>
                    </a>
                </div>
            </div>

            
            <div className="project">
                <a href="https://github.com/devs-22/Kupon-V2">Kupon</a>
                <p className='tech'>ReactJS, NodeJS, ExpressJS, Typescript, MongoDB</p>
                <p className='info'>An Express and React web application that helps users send invoices to your customers globally, Get to provide details of your goods in seconds. Users can create an account and sign in, draft up an invoice for their customers in just few minutes and immediately send invoice to their customers after drafting through the mail.</p>
                <div className="icons">
                    <a href="https://github.com/devs-22/Kupon-V2">
                        <SiGithub/>
                    </a>
                    <a href="https://kupon-v2.vercel.app/">
                        <BsLink45Deg/>
                    </a>
                </div>
            </div>
            <div className="project-image">
                <LazyLoadImage src={"https://user-images.githubusercontent.com/55485439/235227969-eafbb0a2-d7a6-4f79-a0bd-3207e39ff9f3.png"}  alt="Kupon" />
            </div>

            <div className="project-image">
                <img src="https://user-images.githubusercontent.com/55485439/235227969-eafbb0a2-d7a6-4f79-a0bd-3207e39ff9f3.png" alt="Social Tree" />
            </div>
            <div className="project">
                <a href="https://github.com/vicodevv/social-tree">Social Tree</a>
                <p className='tech'>ReactJS, NodeJS, ExpressJS, Typescript, MongoDB</p>
                <p className='info'>An Express and React web application that allows you to share multiple social media links. Users can add all their links to one shareable link. Users can perform Authentication (Registration and Login), Add links, update a link, delete a link</p>
                <div className="icons">
                    <a href="https://github.com/vicodevv/social-tree">
                    <SiGithub/>
                    </a>
                </div>
            </div>

            </div>
        </div>
    )
}
export default Project;