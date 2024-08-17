// components/OnePageMenu.js
import { Link as ScrollLink } from "react-scroll";

const OnePageMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <ScrollLink activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink activeClass="active" to="about-s" spy={true} smooth={true} offset={-70} duration={500}>
          About
        </ScrollLink>
      </li>
      {/* <li>
        <ScrollLink activeClass="active" to="resume-s" spy={true} smooth={true} offset={-70} duration={500}>
          Resume
        </ScrollLink>
      </li> */}
      {/* <li>
        <ScrollLink activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500}>
          Services
        </ScrollLink>
      </li> */}
      <li>
        <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>
          Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
          Projects
        </ScrollLink>
      </li>
      {/* <li>
        <ScrollLink activeClass="active" to="blog" spy={true} smooth={true} offset={-70} duration={500}>
          Blog
        </ScrollLink>
      </li> */}
      <li>
        <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          Contact
        </ScrollLink>
      </li>
    </ul>
  );
};

export default OnePageMenu;
