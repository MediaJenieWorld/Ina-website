import React from 'react'
import CoverPageImage from '@/Components/CoverPage'
import "./style.scss"
import KnowMoreBtn from '@/Components/KnowMoreBtn'
import ImageComp from '@/Components/Image'

const Quantum_Literacy_Page = () => {
    return (
        <div className='Quantum_Literacy'>
            <CoverPageImage label='Quantum Literacy' src={"/assets/Ina/card (3).webp"} />
            <div className=" m-l m-r   nav-path text-28">
                <a style={{ color: "#090909", marginRight: ".25rem" }} href="#">  Services & Capabilities</a>{" > "}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#">Quantum Capability</a>{" > "}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#">Quantum Literacy</a>
            </div>
            <div className="m-l m-r m-t m-b section-2">
                <h2 className="text-60 text-600">
                    Ina Solutions delivers transformative technology solutions to organizations.
                </h2>
                <h4 className="text-32 text-400">
                    INA Solutions is committed to empowering businesses with emerging technologies. Our mission is to optimize processes, uncover insights, and drive growth through innovative solutions, expert knowledge, and exceptional service.
                </h4>
                <KnowMoreBtn link={"/services"} btnClass="purple" label="View Services" />
            </div>
            <div className="hero-image">
                <ImageComp height={600} width={"100%"} src={"/Service/image.png"} />
            </div>
            <div className="feature-points  m-l m-r">
                <CardsSection />
            </div>
            <hr />
            <div className="m-l m-r text-box">
                <h4 className='text-36 text-500 light-color'>
                    By collaborating across sectors, we can amplify our reach, diversify perspectives, and build a stronger foundation for a quantum-literate future.
                </h4>
                <br />
                <p className='text-28 text-400'>We invite you to join us in this collaborative endeavor. Together, let's create a world where everyone has the opportunity to understand and benefit from the potential of quantum technologies.</p>
            </div>
            <div className="m-l m-r imageCards">
                <ImageCardSection />
            </div>
            <div className="video-section">
                <h3 className='m-l m-r m-t text-42 text-500'>
                    From Academia to Main Street:
                    Quantum Science's Journey into Public Discourse
                </h3>
                <YouTubeEmbed />
                <p className='m-l m-r m-t text-28 text-500'>Watch INA's own Suresh Nair along with Timothy Akres and fellow authors from the National Quantum Literacy Network engage in a vital discussion on bringing quantum science to the mainstream. Explore its pivotal role in our future and the need to make it accessible beyond academia.</p>
            </div>
            <div className="m-t m-b"></div>
        </div>
    )
}


const ImageCardSection = () => {

    const cards = [
        {
            img: "/Ina/card (6).webp",
            title: "White Paper",
            text: `Quantum Readiness in Healthcare and Public Health: `
        },
        {
            img: "/Ina/card (7).webp",
            title: "Press Release",
            text: `INA Solutions Inc and George Mason University Empower Future Innovators in Quantum Machine Learning`
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
                <p></p>
                <div className="top">
                    <p className="text-60 text-700">{card.title}</p>
                    <pre className="text-32 text-500 pre ">
                        {card.text}
                    </pre>
                </div>
                <div className="bottom">
                    <KnowMoreBtn label='Download' btnClass='text-24 text-700'
                        style={{
                            background: "var(--theme-color)",
                            borderRadius: "6px", color: "#fff"
                        }} link={"/#"} />
                </div>
            </div>
        </div>)}
    </>

}

function CardsSection({ data }) {
    return <>
        {cardsData().map((card, index) => {
            return <div key={index} className='card'>
                <h2 className='text-48 text-600 dark-color'>{card.title}</h2>
                <div className="description">
                    {card.descriptions.map((description, i) => {
                        return <p key={i} className='text-28 text-400'>{description}</p>
                    })}
                </div>
            </div>
        })}
    </>

}

const YouTubeEmbed = () => {
    return (
        <iframe
            width="100%"
            height="696"
            src="https://www.youtube.com/embed/EkNaBPAW7QU?si=Kk60bky7DFtFpevq"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
        ></iframe>
    );
};


function cardsData() {
    return [
        {
            title: "1. Developing engaging educational resources:",
            descriptions: ["Partnering with universities and research institutions to create curriculum modules, interactive learning materials, and online courses tailored to various audiences.",
                "Collaborating with industry experts to offer practical workshops and training programs for professionals looking to upskill in quantum technologies."]
        },
        {
            title: "2. Cultivating a diverse and inclusive learning environment:",
            descriptions: ["Partnering with organizations dedicated to STEM education and workforce development to ensure equitable access to quantum literacy resources, particularly for underrepresented groups."
                , "Hosting community events, workshops, and webinars featuring experts and enthusiasts, fostering open discussions and engaging the public."
            ]
        }, {
            title: "3. Fostering dialogue and knowledge sharing:",
            descriptions: [
                "Collaborating with industry leaders to develop industry-specific white papers and reports on the potential applications and implications of quantum technologies.",
                "Partnering with organizations to host conferences, seminars, and workshops that bring together experts, researchers, and the public to exchange ideas and explore advancements in the field."
            ]
        }
    ]
}




export default Quantum_Literacy_Page