import CoverPageImage from '@/Components/CoverPage'
import React from 'react'
import "./style.scss"
import KnowMoreBtn from '@/Components/KnowMoreBtn'
import ImageComp from '@/Components/Image'

const Service_Details_Page = () => {

    return (
        <div className='Details'>
            <CoverPageImage label='Quantum Sensing' src={"/assets/Ina/card (3).webp"} />
            <div className=" m-l m-r   nav-path text-24">
                <a style={{ color: "#090909", marginRight: ".25rem" }} href="#">  Services & Capabilities</a>{" > "}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#">Quantum Capability</a>{" > "}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#">Quantum Sensing</a>
            </div>
            <div className="m-l m-r flex-2">
                <h3 className='text-48 text-600'>
                    Unveiling the Invisible World: Quantum Sensing and Its Applications with AI and Machine Learning
                </h3>
                <p className="text-28">
                    At INA, we stand at the vanguard of uncovering the transformative power of quantum sensing. This revolutionary technology is set to redefine our comprehension of the world. Our commitment to advancing this domain involves strategic partnerships with academic bodies and leading research laboratories, harnessing Quantum Machine Learning (QML) and Artificial Intelligence (AI) to elevate sensing capabilities.
                </p>

            </div>
            <div className="bt Big-container">
                <div className="left parent">
                    <img loading="lazy"
                        className="backImage"
                        src="/assets/Ina/details-bg.png"
                        alt="bg-image"
                        height="700"
                        width="500"
                    />
                    <h1 className='text-72 heading text-800'>What is Quantum Sensing?</h1>
                </div>
                <div className="right">
                    <div className="card">
                        <p className='text-36 text-500'>
                            Quantum sensing employs quantum mechanics principles to achieve unparalleled sensitivity and precision in measuring phenomena such as:
                        </p>
                    </div>
                </div>
            </div>
            <div className="m-l m-r feature-points">
                <div className="point">
                    <h3 className='text-42 text-800'>
                        Magnetic fields
                    </h3>
                    <p className='text-28'>
                        Revolutionizing medical imaging, navigation, and material science.
                    </p>
                </div>
                <div className="point">
                    <h3 className='text-42 text-800'> Electric fields </h3>
                    <p className='text-28'> Facilitating the development of efficient power grids and novel communication technologies. </p>
                </div>
                <div className="point">
                    <h3 className='text-42 text-800'> Gravity </h3>
                    <p className='text-28'>Unveiling new avenues for mineral discovery and geological research.
                    </p>
                </div>
                <div className="point">
                    <h3 className='text-42 text-800'> Light </h3>
                    <p className='text-28'>Catalyzing breakthroughs in microscopy, chemical detection, and environmental assessment.
                    </p>
                </div>
            </div>
            <div className="m-l m-r m-t m-b ">
                <h4 className=' light-color text-32 text-600'>Why this is important?</h4>
                <h3 style={{ margin: "20px 0" }}
                    className=' dark-color text-48 text-600'>
                    The Role of AI and Machine Learning</h3>
                <p className='text-28'>The integration of QML and AI with quantum sensing <br /> systems enhances their potential, enabling:
                </p>
            </div>
            <div className="m-l m-r feature-points">
                <div className="point">
                    <h3 className='text-42 text-800'>
                        AI-driven analysis
                    </h3>
                    <p className='text-28'>
                        Sophisticated interpretation of quantum-generated data, revealing critical insights and patterns.
                    </p>
                </div>
                <div className="point">
                    <h3 className='text-42 text-800'> QML optimization </h3>
                    <p className='text-28'> Enhanced sensitivity and precision of quantum sensors through advanced algorithms. </p>
                </div>
                <div className="point">
                    <p className='text-28 text-800'>This convergence promises to transform industries, including:
                    </p>
                </div>
                <div className="point">
                    <h3 className='text-42 text-800'> Healthcare </h3>
                    <p className='text-28'>Pioneering early detection, personalized treatments, and innovative diagnostic tools.
                    </p>
                </div>
                <div className="point">
                    <h3 className='text-42 text-800'> Materials Science </h3>
                    <p className='text-28'>Unearthing materials with unprecedented properties, propelling energy and environmental solutions.
                    </p>
                </div>
                <div className="point">
                    <h3 className='text-42 text-800'> Environmental Monitoring </h3>
                    <p className='text-28'>Offering precise, real-time insights into pollution and climate change.
                    </p>
                </div>

            </div>
            <div className="collab">
                <div className="card ">
                    <h3 className='text-36 text-800'>
                        Our Collaborative Efforts
                    </h3>
                    <p className='text-28'>
                        Developing QML algorithms tailored for quantum sensing.</p>
                    <p className='text-28'>
                        Crafting AI-driven platforms for efficient data interpretation.</p>
                    <p className='text-28'>
                        Investigating quantum sensing's novel applications across sectors.
                    </p>
                </div>
            </div>
            <div className="upcoming">
                <ImageComp src="/Ina/sofa.png" />
                <div className="right">
                    <div className="top">
                        <h3 className='text-48 text-600'>
                            The Future of Quantum Sensing
                        </h3>
                        <p className='text-28 text-400'>
                            Quantum sensing, AI, and machine learning are paving the way to a future filled with groundbreaking discoveries and technological breakthroughs. Our collaborative approach is poised to spark a new era of scientific and societal advancement.
                        </p>
                        <p className='text-28 text-400'>
                            Join us on this exhilarating journey to unlock the full potential of quantum sensing and its transformative effect on our world.
                        </p>
                    </div>
                    <KnowMoreBtn btnClass='btn-shadow' label='Download White Paper' />
                </div>
            </div>

        </div>
    )
}

export default Service_Details_Page