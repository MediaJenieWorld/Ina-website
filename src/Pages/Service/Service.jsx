import CoverPageImage from '@/Components/CoverPage'
import React from 'react'
import "./style.scss"
import ImageComp from '@/Components/Image'
import KnowMoreBtn from '@/Components/KnowMoreBtn'

const Service_Page = () => {
    return (
        <div className='Service'>
            <div className="cover-page">
                <CoverPageImage src={"/assets/Ina/card (3).webp"} />
            </div>
            <div className="m-l m-r nav-path text-28">
                <a style={{ color: "#090909", marginRight: ".25rem" }} href="#">  Services & Capabilities</a>   {">"}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#">Quantum Capability</a>
            </div>
            <div className=" section-1 m-l m-r">
                <h1 className='text-60 text-600'>
                    Unlock the boundless potential of quantum technology with INA Solutions’ comprehensive Quantum Capability offerings.
                </h1>
            </div>
            <div className="big-sections">
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
                                    <h2 className="text-60 text-700">Quantum Literacy</h2>
                                    <p className="text-32 text-500 des">
                                        At INA, we're dedicated to fostering a quantum-literate future through collaboration and education. Our initiatives include:
                                    </p>
                                    <ul className='text-32 text-400'>
                                        <li>
                                            Developing engaging educational resources in partnership with universities and research institutions.</li>
                                        <li>Cultivating a diverse and inclusive learning environment through community events and workshops.</li>
                                        <li>Fostering dialogue and knowledge sharing through industry-specific white papers and conferences.</li>
                                    </ul>
                                    <KnowMoreBtn label='Read More' link={"/about"} />

                                </div>
                            </div>
                        </div>
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
                                    <h2 className="text-60 text-700">Quantum Machine Learning (QML)</h2>
                                    <p className="text-32 text-500 des">
                                        Take your machine learning models to the next level with our Quantum Machine Learning solutions. Powered by advanced algorithms and cutting-edge research, our QML solutions offer:
                                    </p>
                                    <ul className='text-32 text-400'>
                                        <li>
                                            Higher model accuracy, faster training, and unprecedented scalability.</li>
                                        <li>Collaboration with universities and research institutions to stay at the forefront of the industry.</li>
                                        <li>Tailored solutions to meet your unique needs and objectives.</li>
                                    </ul>
                                    <KnowMoreBtn label='Read More' link={"/about"} />
                                </div>
                            </div>
                        </div>
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
                                    <h2 className="text-60 text-700">Quantum Sensing</h2>
                                    <p className="text-32 text-500 des">
                                        Uncover the invisible world with Quantum Sensing and its applications in healthcare, materials science, and environmental monitoring. Our Quantum Sensing services offer: </p>
                                    <ul className='text-32 text-400'>
                                        <li>
                                            Unparalleled sensitivity and precision in measuring magnetic fields, electric fields, gravity, and light.
                                        </li>
                                        <li>
                                            Integration of AI and machine learning to enhance data interpretation and optimization.
                                        </li>
                                        <li>Collaborative efforts with academic bodies and research laboratories to drive innovation and scientific advancement.                                        </li>
                                    </ul>
                                    <KnowMoreBtn label='Read More' link={"/about"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service_Page