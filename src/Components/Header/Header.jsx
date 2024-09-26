import { useEffect, useState } from "react";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import ScrollToTop from "../ScrollTop";

const menuItems = [
  {
    title: "Clients",
    url: "/#",
  },
  {
    title: "Contract Vehicles",
    url: "/#",
  },
  {
    title: "Services & Capabilities",
    url: "/services",
    links: [
      {
        label: "Details",
        href: "/services/details",
      },
      {
        label: "Quantum Literacy",
        href: "/services/quantum_literacy",
      }
    ]
  },
  {
    title: "About Us",
    url: "/#",
  },
  {
    title: "Contact",
    url: "/#",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  useEffect(() => {
    return () => setIsMenuOpen(false)

  }, [location]);


  return (
    <header className="header">
      <ScrollToTop />
      <div className="top">
        <div className="logo">
          <img loading="lazy" src="/assets/Ina/logo.png" height={60} width={"auto"} style={{ objectFit: "contain" }} alt="Logo" />
          {/* <h3 className="text-16 text-700">CX Agent</h3> */}
        </div>

        <div className="right">
          <div className="lg-link-item">
            {menuItems.map((link) => <Link className="text-24" key={link.title} to={link.url}>{link.title}</Link>)}
          </div>
          <SearchSvg />
          <button
            className={isMenuOpen ? "menu-toggle active " : "menu-toggle"}
            aria-label={"menu-button"}
            onClick={toggleMenu} >
          </button>
        </div>
      </div>
      <nav className={isMenuOpen ? "menu active " : "menu"}>
        {menuItems.map((item, index) => (
          <div key={index} className="item-section">
            <Link to={item.url} className="h3"> {item.title}</Link>
            {item.links && <div className="items">
              {item.links.map((link, linkIndex) => (
                <Link key={linkIndex} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>}
          </div>
        ))}
      </nav>
    </header>
  );
};

const SearchSvg = () => {
  return <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.4375 38.125C19.3348 38.125 16.3018 37.205 13.722 35.4813C11.1422 33.7575 9.1315 31.3073 7.94415 28.4409C6.7568 25.5744 6.44613 22.42 7.05144 19.377C7.65675 16.334 9.15084 13.5387 11.3448 11.3448C13.5387 9.15084 16.334 7.65675 19.377 7.05144C22.42 6.44613 25.5744 6.7568 28.4409 7.94415C31.3073 9.1315 33.7575 11.1422 35.4813 13.722C37.205 16.3018 38.125 19.3348 38.125 22.4375C38.125 24.4975 37.7192 26.5375 36.9309 28.4409C36.1425 30.3442 34.9869 32.0736 33.5302 33.5302C32.0736 34.9869 30.3442 36.1425 28.4409 36.9309C26.5375 37.7192 24.4975 38.125 22.4375 38.125ZM22.4375 9.89584C19.9653 9.89584 17.5485 10.629 15.4929 12.0025C13.4373 13.376 11.8351 15.3282 10.889 17.6123C9.94292 19.8964 9.69538 22.4096 10.1777 24.8344C10.66 27.2592 11.8505 29.4865 13.5987 31.2346C15.3468 32.9827 17.5741 34.1734 19.9989 34.6556C22.4236 35.1379 24.9369 34.8904 27.2211 33.9444C29.505 32.9981 31.4573 31.3961 32.8309 29.3404C34.2044 27.2848 34.9375 24.8681 34.9375 22.3959C34.9375 19.0806 33.6206 15.9012 31.2763 13.557C28.9321 11.2128 25.7527 9.89584 22.4375 9.89584Z" fill="#4C02A9" />
    <path d="M41.6668 43.2293C41.4616 43.2301 41.258 43.1901 41.0685 43.1114C40.8789 43.0328 40.7068 42.917 40.5626 42.771L31.9585 34.1668C31.6824 33.8706 31.5322 33.4787 31.5393 33.0739C31.5464 32.6691 31.7106 32.2831 31.9968 31.9966C32.2831 31.7103 32.6693 31.5464 33.0741 31.5393C33.4789 31.5322 33.8706 31.6824 34.1668 31.9585L42.771 40.5626C43.0635 40.8556 43.2278 41.2526 43.2278 41.6668C43.2278 42.0808 43.0635 42.4778 42.771 42.771C42.6268 42.917 42.4547 43.0328 42.2651 43.1114C42.0756 43.1901 41.872 43.2301 41.6668 43.2293Z" fill="#8831F8" />
  </svg>

}

export default Header;
