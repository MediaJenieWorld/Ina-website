import React from 'react'
import "./style.scss"
import ImageComp from '@/Components/Image'
import CoverPageImage from '@/Components/CoverPage'

const faq = [{
    title: "Innovation",
    text: "Our Core Values is to maintain and promote INA values. We recognize that it is not enough to simply deploy solutions, but that in order to be a truly successful company; we must instill and foster values that make our employees trusted advisors to our clients, developers of innovative solutions and people who promote a healthy working environment."
},
{
    title: "Commitment",
    text: "Our Core Values is to maintain and promote INA values. We recognize that it is not enough to simply deploy solutions, but that in order to be a truly successful company; we must instill and foster values that make our employees trusted advisors to our clients, developers of innovative solutions and people who promote a healthy working environment."
}, {
    title: "People",
    text: "Our Core Values is to maintain and promote INA values. We recognize that it is not enough to simply deploy solutions, but that in order to be a truly successful company; we must instill and foster values that make our employees trusted advisors to our clients, developers of innovative solutions and people who promote a healthy working environment."
}
]

const AboutPage = () => {
    return (
        <div className='AboutPage'>
            <CoverPageImage label='About Us' src={"/assets/Ina/card (3).webp"} />
            <div className=" m-l m-r   nav-path text-28">
                <a style={{ color: "#090909", marginRight: ".25rem" }} href="#">Home</a>{" > "}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#">About Us</a>
            </div>
            <div className="m-l m-r m-t m-b section-2">
                <h2 className="text-48 text-600">
                    INA Solutions Inc. was founded in 2011 to serve commercial and government agencies requiring advanced information technology solutions towards solving sophisticated and complex business processes and problems.
                </h2>
                <hr />
                <h4 className=" m-90 text-28 text-400">
                    Our domain expertise includes human resources, financial management, budget and execution, cloud-based solutions, Internet of Things (IoT) integration, artificial intelligence (AI), machine learning (ML), data vizualization, networking, IT infrastructure, and logistics factors. Our team members have created traditional and cloud-based web and mobile applications for federal government clients including the Department of Agriculture (USDA), United States Air Force (USAF), Department of Energy (DOE) and Federal Reserve Board of Governors (FRB).
                </h4>
            </div>
            <div className="collab">
                <div className="card ">
                    <h3 className='text-36 text-800'>
                        Subject Matter Expertise
                    </h3>
                    <p className='text-24'>We have domain-centric subject matter expertise (SME) and experience in performing these functions and more. We have demonstrated superior performance to our clients, and we are eager to provide these services and value across commercial and government clients.</p>
                </div>
            </div>
            <div className="feature-points  m-l m-r">
                <p className="text-28 text-400">
                    INA has a knack for providing creative solutions related to design, development, testing, training, implementation, and operations of large enterprise applications. INA has developed internal control measures to include processes, procedures and policies to support our Program Management, IT engineering, performance metrics, network support and related consulting areas. We continue to successfully employ standardized and disciplined processes used for the design and development of our IT solutions that balance cost, schedule, performance and risk for our clients.
                </p>
                <p className="text-28 text-400">
                    In addition to our overall strength, our capabilities and experience also encompass the entire life cycle of systems and data architecture. These results are possible due to our unshakable belief in collaboration, communication, and delivery on all of our commitments.
                </p>
            </div>
            <div className="Big_Image_Card">
                <ImageComp src="/Ina/details-bg.png" alt="" />
                <div className="info">
                    <pre className='title text-72 text-800'>
                        {`People
Behind
Ina Solutions`}

                    </pre>
                    <div className="card ">
                        <p className='text-36 text-500'>
                            INA Leadership – With over 45 years of collective experience, the qualifications and capabilities of our senior leadership is unmatched.
                        </p>
                    </div>
                </div>
            </div>
            <div className="feature-points m-l m-r">
                <p className='text-28 text-400'>Our executives provide resource and direct support to ensure the success of our ventures. We are deeply involved in the execution of our projects to ensure that we exceed our client’s expectations.</p>
                <p className='text-28 text-400'>
                    Our senior leaders have a history of working together to build customer centric solutions to solving business problems, beginning decades ago at various US Federal Government Agencies and Departments.,
                </p>
                <p className='text-28 text-400'>
                    We possess highly qualified Subject Matter/Domain experts to provide corporate oversight to all of our undertakings. INA’s corporate leadership and resources integrate and manage the efforts of our team to ensure that deliverables are of superior quality and are provided in a timely fashion.
                </p>
            </div>
            <div className="collab left-side">
                <div className="card ">
                    <h3 className='text-48 text-600'>
                        Our Mission
                    </h3>
                    <p className='text-24'>
                        Our Mission is to supply the federal and commercial marketplace with the highest quality of information technology consulting services. We will help lead the Federal Government to deploy cutting-edge science and solutions that will utilize technology to reduce costs and greatly expand their return on investments.
                    </p>
                    <p className='text-24'>
                        We will help our clients to expand opportunities for an integrated world and bridge the digital divide. We empower our clients to become operationally efficient, faster, and smarter, while offering the best possible value for their investments.
                    </p>
                </div>
            </div>
            <div className="feature-points  m-l m-r">
                <p className="text-48 dark-color text-600">Our Vision   </p>
                <p className="text-28 text-400">
                    Our Vision is to be recognized as a leader in the industry that delivers efficient and transformative technology solutions that secures our nation’s information and data, improves the lives of our citizens, and supports mission-critical government initiatives.
                </p>
            </div>
            <div className="collab left-side">
                <div className="card ">
                    <h3 className='text-48 text-800'>
                        Our Core Values
                    </h3>
                    <p className='text-24'>
                        Our Core Values is to maintain and promote INA values. We recognize that it is not enough to simply deploy solutions, but that in order to be a truly successful company; we must instill and foster values that make our employees trusted advisors to our clients, developers of innovative solutions and people who promote a healthy working environment.
                    </p>
                </div>
            </div>
            <div className="FAQ">
                {faq.map((data, i) => {
                    return (
                        <div className="wrapper" key={i}>
                            <details style={{ width: "100%" }}>
                                <summary className="text-36 text-600">
                                    <div className="title">
                                        {data.title}
                                    </div>
                                </summary>
                                <div className="content">
                                    <div className="text-32 text-500">{data.text}</div>
                                </div>
                            </details>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default AboutPage