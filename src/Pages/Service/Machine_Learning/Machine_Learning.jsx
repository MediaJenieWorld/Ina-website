import React from 'react'
import CoverPageImage from '@/Components/CoverPage'
import "./style.scss"
import KnowMoreBtn from '@/Components/KnowMoreBtn'
import ImageComp from '@/Components/Image'

const Machine_Learning_Page = () => {
    return (
        <div className='Machine_Learning_Page'>
            <CoverPageImage label='Quantum Machine Learning' src={"/assets/Ina/card (3).webp"} />
            <div className=" m-l m-r   nav-path text-28">
                <a style={{ color: "#090909", marginRight: ".25rem" }} href="#">  Services & Capabilities</a>{" > "}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#">Quantum Capability</a>{" > "}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#">Quantum Machine Learning</a>
            </div>
            <div className="m-l m-r m-t m-b section-2">
                <h2 className="text-48 text-600">
                    Are you interested in taking your machine learning models to the next level? Our Quantum Machine Learning (QML) solutions are designed to empower your models with advanced tools and technologies that are backed by cutting-edge research.
                </h2>
            </div>
            <div className="hero-image">
                <ImageComp height={600} width={"100%"} src={"/Service/image.png"} />
            </div>
            <div className="feature-points  m-l m-r">
                <h4 className='text-36 text-400 light-color'>We believe in the power of collaboration and partnerships to advance the field of machine learning. </h4>
                <div className="description">
                    <p className='text-28 text-400'>
                        That's why we work closely with universities and research institutions to stay at the forefront of the industry and bring you the latest advancements in machine learning.
                    </p>
                    <p className='text-28 text-400'>
                        Our Quantum Machine Learning (QML) solutions utilize advanced algorithms and tools, such as Qiskit, Cirq, and PyQuil, to ensure that our solutions are top-of-the-line and capable of tackling even the most complex machine learning problems. We have a team of experienced researchers and developers who are continuously working to improve our Quantum Machine Learning (QML) solutions and ensure that they are at the forefront of the industry.
                    </p>
                    <p className='text-28 text-400'>
                        With our Quantum Machine Learning (QML) solutions, you can achieve higher model accuracy, faster model training, and unprecedented scalability, allowing you to take on larger and more complex machine learning problems with ease.
                    </p>
                </div>
            </div>
            <div className="Big-container">
                <div className="left parent">
                    <ImageComp loading="lazy"
                        className="backImage"
                        src="/Ina/card (1).webp"
                        alt="bg-image"
                        height="700"
                        width="500"
                    />
                </div>
                <div className="right">
                    <div className="card">
                        <div className="all">
                            <div className="text-wrapper">
                                <p className="text-32 text-500">
                                    We are committed to growing and learning together with our partners and clients. We work closely with our partners to understand their unique needs and develop tailored solutions that meet those needs. By collaborating with us, you can take advantage of our expertise in Quantum Machine Learning (QML) and the latest advancements in machine learning to take your capabilities to the next level.
                                </p>
                                <p className='text-28 text-400'>
                                    If you're interested in revolutionizing your machine learning capabilities with advanced tools and technologies backed by cutting-edge research, let us grow and learn together. Contact us to learn more about our Quantum Machine Learning (QML) solutions and how we can work together to take your machine learning to the next level.</p>
                            </div>
                            <KnowMoreBtn label='DOWNLOAD WHITE PAPER' link={"/about"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-t m-b"></div>
        </div>
    )
}


export default Machine_Learning_Page