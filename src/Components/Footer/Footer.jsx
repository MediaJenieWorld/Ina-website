import { Link } from "react-router-dom";
import "./style.scss";

const INA_Footer = () => {
  return (
    <div className="footer">
      <div className="logo-section">
        <img style={{ height: "43px", objectFit: "contain", width: "auto" }} loading="lazy"
          src="/assets/Ina/footerLogo.png" height={50} width={120} alt="Logo" />
        <p className="text-24" >© Copyrighted to INA-SOLUTIONS</p>
        <p className="text-24 highlight" >Digital experience by
          <br />
          MediaJenie </p>
      </div>
      {
        linksList().map((link, i) => {
          return <div key={i} className="section  text-28">
            <Link to={link.url}>{link.title}</Link>
            {link.childLinks.map((child, index) => {
              return <Link key={index} to={child.url}>{child.title}</Link>
            })}
          </div>
        })
      }
      <div className="section social text-28">
        <p>FOLLOW US ON</p>
        <div className="list">
          <Link to="#">
            <img loading="lazy"
              height={24}
              width={24}
              src="/icons/facebook.svg"
              alt="social-icon"
            />
          </Link>
          <Link to="#">
            <img loading="lazy"
              height={24}
              width={24}
              src="/icons/instagram.svg"
              alt="social-icon"
            />
          </Link>
          <Link to="#">
            <img loading="lazy"
              height={24}
              width={24}
              src="/icons/linkedIn.svg"
              alt="social-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};


const linksList = () => {
  return [
    {
      title: "ABOUT US",
      url: "#",
      childLinks: [
        { title: "About INA", url: "#" },
        { title: "Clients ", url: "#" },
        { title: "Who we are ", url: "#" },
        { title: "Blogs", url: "#" },
        { title: "Resources", url: "#" },
        { title: "Privacy Statement", url: "#" },
        { title: "Terms & Conditions", url: "#" },
      ]
    },
    {
      title: "CAPABILITIES & SERVICES",
      url: "#",
      childLinks: [
        { title: "Quantum Literacy", url: "#" },
        { title: "Quantum Machine Learning", url: "#" },
        { title: "Quantum Sensing", url: "#" },
        { title: "AI & ML", url: "#" },
        { title: "Advanced Data Visualization", url: "#" },
        { title: "Knowledge Graph", url: "#" },
        { title: "Natural Language Processing", url: "#" },
        { title: "Robotic Process Automation", url: "#" },
        { title: "IT Modernizationg", url: "#" },
        { title: "IoT Analytics", url: "#" },
      ]
    },

    {
      title: "INDUSTRY & DOMAINS",
      url: "#",
      childLinks: [
        { title: "Government", url: "#" },
        { title: "Defense", url: "#" },
        { title: "Education", url: "#" },
        { title: "Manufacturing", url: "#" },
        { title: "Retail", url: "#" },
        { title: "Healthcare", url: "#" },
        { title: "Corporate", url: "#" },
        { title: "Finance", url: "#" },
        { title: "IT Modernizationg", url: "#" },
        { title: "IoT Analytics", url: "#" },
      ]
    }
  ]
}

export default INA_Footer;
