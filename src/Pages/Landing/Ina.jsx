import React from 'react'
import "./style.scss"
import ImageComp from '@/Components/Image'
import { Link } from 'react-router-dom'

const Ina_Landing_Page = () => {
    return (
        <div className='Landing_Page'>
            <div className="hero-section">
                <img
                    loading="eager"
                    height={"760px"} width={"100%"}
                    src="/assets/Ina/hero.png" alt="Banner" />
                <div className="overlay">
                    <h2 className='text-60 text-600'>
                        Helping organizations to unlock infinite potential through technology solutions.
                    </h2>
                    <div className="flex">
                        <button className='service text-400 '>View Services</button>
                        <a className='link text-400 '>More About Us</a>
                    </div>

                </div>
            </div>
            <div className="section centered">
                <div className="flex">
                    <ImageComp height={80} width={"auto"} src={"/Ina/image 2.webp"} />
                    <ImageComp height={80} width={"auto"} src={"/Ina/image 3.webp"} />
                    <ImageComp height={80} width={"auto"} src={"/Ina/image 4.webp"} />
                    <ImageComp height={80} width={"auto"} src={"/Ina/image 5.webp"} />
                    <ImageComp height={80} width={"auto"} src={"/Ina/image 6.webp"} />
                </div>
            </div>
            <div className="section-2">
                <h2 className="text-60 text-600">
                    Ina Solutions delivers transformative technology solutions to organizations.
                </h2>
                <h4 className="text-32 text-400">
                    INA Solutions is committed to empowering businesses with emerging technologies. Our mission is to optimize processes, uncover insights, and drive growth through innovative solutions, expert knowledge, and exceptional service.
                </h4>
                <KnowMoreBtn link={"/services"} btnClass="purple text-400" label="View Services" />
            </div>
            <div className="section-3">
                <h2 className="text-60 text-600" style={{ color: "var(--theme-color)" }}>  Partnerships & Collaborations     </h2>
                <div className="flex">
                    {brands().map((brand, i) => <ImageComp key={i} height={"60"} width={"auto"} src={brand} />)}
                </div>
            </div>

            <div className="cards-section">
                <CardSection />
            </div>
            <div id="section6" className="Big-container">
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
                                <h2 className="text-60 text-700">IT Modernization</h2>
                                <p className="text-24 text-400">
                                    Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too.  </p>
                            </div>
                            <KnowMoreBtn link={"/about"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const CardSection = () => {

    const cards = [
        {
            img: "/Ina/card (5).webp",
            title: "Quantum",
            text: `Quantum Literacy
Quantum Machine Learning
Quantum sensing`
        },
        {
            img: "/Ina/card (6).webp",
            title: "AI & ML",
            text: `Custom AI Solutions
Machine Learning
Advanced Data Anaytics`
        },
        {
            img: "/Ina/card (7).webp",
            title: "Advanced Data",
            text: `Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too.`
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
                {/* <p className="text-24 text-600">{card.title}</p> */}
                <p></p>
                <div className="top">
                    <p className="text-60 text-700">{card.title}</p>
                    <pre className="text-32 text-500 pre ">
                        {card.text}
                    </pre>
                </div>
                <div className="bottom">
                    <KnowMoreBtn btnClass='text-24 text-700' style={{
                        background: "var(--theme-color)",
                        borderRadius: "6px", color: "#fff"
                    }} link={"/about"} />
                </div>
            </div>
        </div>)}
    </>

}

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

const KnowMoreBtn = ({ btnClass = "", link, label = "KNOW MORE", ...btnprops }) => {
    return (
        <button className={btnClass + " knowBtn"}
            aria-label={label}
            {...btnprops}
        >
            <Link style={{
                textDecoration: "none"
            }}
                {...btnprops} to={link || "#"}>
                {label}
            </Link>
        </button>
    );
};

export default Ina_Landing_Page