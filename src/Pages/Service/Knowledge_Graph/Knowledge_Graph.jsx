import React from 'react'
import CoverPageImage from '@/Components/CoverPage'
import "./style.scss"
import KnowMoreBtn from '@/Components/KnowMoreBtn'
import ImageComp from '@/Components/Image'

const Knowledge_Graph_Page = () => {
    return (
        <div className='Knowledge_Graph_Page'>
            <CoverPageImage label='Knowledge Graph' src={"/assets/Ina/card (3).webp"} />
            <div className=" m-l m-r   nav-path text-28">
                <a style={{ color: "#090909", marginRight: ".25rem" }} href="#">  Services & Capabilities</a>{" > "}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#">Knowledge Graph</a>
            </div>
            <div className="m-l m-r m-t m-b section-2">
                <h2 className="text-48 text-600">
                    Our Team specializes in building knowledge graph solutions that can help you extract valuable insights from complex data.
                </h2>
            </div>
            <div className="hero-image">
                <ImageComp height={600} width={"100%"} src={"/Service/image.png"} />
                <div className="m-l m-r  overlay-text">
                    <h4 className="text-36 text-500">
                        Our solutions integrate data from multiple sources, including structured and unstructured data, and use advanced algorithms and tools such as Neo4j, Stardog, and Amazon Neptune to build highly scalable and efficient knowledge graphs.
                    </h4>
                </div>
            </div>

            <div className="m-r m-l m-b  short-info">
                <p className='text-28 text-400'>
                    What sets our knowledge graph solutions apart is our focus on customization and innovation. We work closely with our clients to understand their unique data challenges and create a solution that fits their specific requirements. Our solutions can be customized to handle complex data scenarios, including those involving temporal data, multi-lingual data, and more.
                </p>
                <p className='text-28 text-400'>
                    We also place a strong emphasis on innovation and cutting-edge technology. Our team is continually exploring new tools and algorithms to improve our knowledge graph solutions, including the use of deep learning and other emerging technologies.
                </p>
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
                                <h4 className='text-36 light-color text-400'>
                                    Our knowledge graph solutions offer
                                    a range of benefits, including:
                                </h4>
                                <ul className='text-28'>
                                    <li>
                                        Improved Data Quality: Our solutions leverage a common data model to ensure consistency and accuracy across your data sources, improving data quality and reducing data errors.
                                    </li>
                                    <li>
                                        ☆ Faster Data Integration: Our solutions can integrate data from multiple sources, including structured and unstructured data, reducing the time and effort required for data integration.
                                    </li>
                                    <li>
                                        ☆ Better Data Visualization: Our solutions provide better data visualization capabilities, allowing you to easily explore and analyze your data, and identify patterns, trends, and correlations in your data.
                                    </li>
                                    <li>
                                        ☆ Real-Time Analysis: Our solutions can handle large volumes of data and support real-time analysis, enabling you to make more informed decisions quickly
                                    </li>
                                    <li>
                                        ☆ Cost Savings: Our solutions can help you identify inefficiencies in your business operations, reducing costs and improving your overall business performance.
                                    </li>
                                </ul>
                                <p className='text-28'  >
                                    If you're looking for a customized and innovative solution to help you unlock the power of your data, our knowledge graph solutions can help.
                                </p>
                            </div>
                            <KnowMoreBtn label='GET IN TOUCH' link={"#"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-t m-b"></div>
        </div>
    )
}


export default Knowledge_Graph_Page