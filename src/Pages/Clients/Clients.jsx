import React from 'react'
import "./style.scss"
import CoverPageImage from '@/Components/CoverPage'
import ImageComp from '@/Components/Image'

const faq = [{
    title: "United States Department of Agriculture",
    text: "Our Core Values is to maintain and promote INA values. We recognize that it is not enough to simply deploy solutions, but that in order to be a truly successful company; we must instill and foster values that make our employees trusted advisors to our clients, developers of innovative solutions and people who promote a healthy working environment."
},
{
    title: "United States Department of Air Force",
    text: "Our Core Values is to maintain and promote INA values. We recognize that it is not enough to simply deploy solutions, but that in order to be a truly successful company; we must instill and foster values that make our employees trusted advisors to our clients, developers of innovative solutions and people who promote a healthy working environment."
}, {
    title: "US Department of Energy, Office of River Protection (DOE/WRPS)",
    text: "Our Core Values is to maintain and promote INA values. We recognize that it is not enough to simply deploy solutions, but that in order to be a truly successful company; we must instill and foster values that make our employees trusted advisors to our clients, developers of innovative solutions and people who promote a healthy working environment."
}, {
    title: "US Department of Energy Remote Sensing and Environmental Informatics (RSE)",
    text: "Our Core Values is to maintain and promote INA values. We recognize that it is not enough to simply deploy solutions, but that in order to be a truly successful company; we must instill and foster values that make our employees trusted advisors to our clients, developers of innovative solutions and people who promote a healthy working environment."
}, {
    title: "United States Department of Homeland Security",
    text: "Our Core Values is to maintain and promote INA values. We recognize that it is not enough to simply deploy solutions, but that in order to be a truly successful company; we must instill and foster values that make our employees trusted advisors to our clients, developers of innovative solutions and people who promote a healthy working environment."
}

]
const Clients_Page = () => {
    return (
        <div className='Clients_Page'>
            <CoverPageImage label='Our Clientele' src={"/assets/Ina/card (3).webp"} />
            <div className=" m-l m-r   nav-path text-28">
                <a style={{ color: "#090909", marginRight: ".25rem" }} href="#">Home</a>{" > "}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#">Clientele</a>
            </div>
            <div className="m-l m-r m-t m-b section-2">
                <h2 className="text-48 text-600">
                    Ina is proud to have served some of the biggest names in the United States.
                </h2>
            </div>
            <div className="section-3">
                <h2 className="text-48 text-600 dark-color" > Some of our clients    </h2>
                <div className="flex">
                    {brands().map((brand, i) => <ImageComp key={i} height={"60"} width={"auto"} src={brand} />)}
                </div>
            </div>
            <div className="section-4 m-l m-r">
                <h2 className="text-48 text-600 dark-color" > Past Performances & Clients Supported    </h2>
                <p className='text-28'>Ina Solutions delivered cutting edge technology solutions as well as traditional services to our clients. Click to view the solutions provided.</p>
            </div>
            <div className="FAQ">
                {faq.map((data, i) => {
                    return (
                        <div className="wrapper" key={i}>
                            <details style={{ width: "100%" }}>
                                <summary className="text-28 text-600">
                                    <div className="title">
                                        {data.title}
                                    </div>
                                </summary>
                                <div className="content">
                                    <div className="text-24 text-500">{data.text}</div>
                                </div>
                            </details>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Clients_Page

const brands = () => {
    return [
        "/Ina/brands (2).png",
        "/Ina/brands (3).png",
        "/Ina/brands (4).png",
        "/Ina/brands (5).png",
        "/Ina/brands (6).png",
        "/Ina/brands (7).png",
        "/Ina/brands (8).png",
        "/Ina/brands (1).png",
    ]
}
