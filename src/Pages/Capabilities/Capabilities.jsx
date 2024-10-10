import React from 'react'
import "./style.scss"
import ImageComp from '@/Components/Image'
import { Link } from 'react-router-dom'
import CoverPageImage from '@/Components/CoverPage'
import Button from '@/Components/Button'

const Capabilities_Page = () => {
    return (
        <div className='Capabilities_Page'>
            <CoverPageImage label='Our Capabilities' src={"/assets/Ina/card (3).webp"} />
            <div className=" m-l m-r   nav-path text-28">
                <a style={{ color: "#090909", marginRight: ".25rem" }} href="#">  Home  </a>{" > "}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#"> Capabilities</a>
            </div>
            <div className="m-l m-r m-t m-b section-2">
                <h2 className="text-60 text-600">
                    INA Solutions is committed to building strong client relationships and producing collaborative, results-oriented solutions.
                </h2>
                <h4 className="text-28 text-400">
                    At INA, our process is focused on solution sustainability by leveraging emerging best practices and trends in intelligent automation, machine learning and natural language processing to innovatively develop deliverables exceeding immediate and long-term business objectives.
                    As a result, we deploy web-based, responsive applications and platforms that are adaptable, functional and user friendly.  </h4>
                <Button className={"text-32 text-400"} label='Download Capability Document' />
            </div>
            <div className="cards-section">
                <CardSection />
            </div>
            <div className="m-l m-r m-t m-b section-2">
                <p className="text-28 text-400">
                    Our successful delivery of projects for key industry leaders has led to high customer satisfaction rates. With our agile delivery approach, we've saved organizations millions of dollars in the rapidly-evolving technology landscape.
                </p>
                <p className="text-28 text-400">
                    As a specialized provider of advanced technologies such as Artificial Intelligence (AI), Machine Learning (ML), Internet of Things (IoT), and Cloud Computing, we offer expertise in Data Analytics and Visualization, Robotic Process Automation (RPA), and IT Modernization. Our customized solutions are tailored to the specific needs of our clients, and our focus on advanced technologies sets us apart from companies that offer business solutions as a peripheral offering. Contact us to learn how our advanced technology solutions can transform your business.
                </p>
                <Button className={"text-32 text-400"} label='Contact Us' />
            </div>
        </div>
    )
}


const CardSection = () => {

    const cards = [
        {
            img: "/Ina/card (2).webp",
            title: "Quantum Sensors",
            text: `At INA, we are in discussions with
leading universities and research
labs to stay at the forefront of
emerging Quantum Sensor
technology...`
        },
        {
            img: "/Ina/card (2).webp",
            title: "AI & ML",
            text: `We are specialized in advacned AI/ ML.
Our team of experts develops
custom AI and ML solutions tailored
to the specific needs of our clients. `
        },
        {
            img: "/Ina/card (2).webp",
            title: "IoT Analytics",
            text: `Our team specializes in advanced IoT Analytics solutions that transform data into valuable insights....`
        },
        {
            img: "/Ina/card (2).webp",
            title: "Robotic Process Automation",
            text: `At INA, we specialize in developing advanced Robotic Process Automation (RPA) solutions to automate repetitive and time-consuming tasks. `
        },
        {
            img: "/Ina/card (2).webp",
            title: "Advanced Data Visualization",
            text: `Our Advanced-Data Visualization solutions transform complex data into intuitive, interactive visualizations for valuable insights...`
        },
        {
            img: "/Ina/card (2).webp",
            title: "IT Modernization",
            text: `Our IT Modernization solutions help businesses and government agencies reduce costs, improve efficiency, and increase agility...`
        },
        {
            img: "/Ina/card (2).webp",
            title: "Knowledge Graph",
            text: `Our Team specializes in building knowledge graph solutions that can help you extract valuable insights from complex data. `
        },
        {
            img: "/Ina/card (2).webp",
            title: "Natural Language Processing",
            text: `Are you struggling to make sense of your text data? Do you want to extract valuable insights from your customer feedback, social media data...`
        },
        {

            img: "/Ina/card (2).webp",
            title: "Quantum Machine Learning",
            text: `Our Quantum Machine Learning (QML) solutions are designed to empower your models with advanced tools and technologies that are backed by cutting-edge research....`
        }
        ,
        {

            img: "/Ina/card (2).webp",
            title: "Need help in something else?",
            text: `reach out to us with your technolocy requirement. We will be happy to help.`
        }
    ]

    return <>
        {cards.map((card, i) => <div key={i} className="card">
            <ImageComp loading="lazy"
                src={card.img}
                alt={card.img}
                height={400}
                width={400}
            />
            <div className="text-container">
                <div className="top">
                    <p className="text-60 text-700">{card.title}</p>
                    <p className="text-32 text-500 pre ">
                        {card.text}
                    </p>
                </div>
                <div className="bottom">
                    <Button className='text-24 text-700' link={"/about"} label={"KNOW MORE"} />
                </div>
            </div>
        </div>)}
    </>

}

export default Capabilities_Page