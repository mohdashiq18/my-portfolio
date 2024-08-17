import Link from "next/link";
import Counter from "./Counter";

const counterData = [
  { id: 1, text: "Years Of Experience", value: "2", valueType: "plus" },
  { id: 2, text: "Project Complete", value: "10", valueType: "plus" },
];

const Hero = () => {
  return (
    <section id="home" className="main-hero-area pt-150 pb-80 rel z-1">
      <div className="container container-1620">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-7">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2">Hello, i’m </span>
              <h1>
                <b>Mohd Ashique</b> full stack developer
              </h1>
              <p>
              Hey there! 👋 I'm Mohd Ashique, a full-stack developer specializing in mobile and web. I'm all about crafting seamless experiences with sleek code. Let's team up and make magic happen! 🚀
              </p>
              <div className="hero-btns"> 
                <Link legacyBehavior href="#contact">
                  <a className="theme-btn">
                    Hire Me <i className="far fa-angle-right" />
                  </a>
                </Link>
                <a
                  href="/resume.pdf"
                  className="read-more"
                  download="Mohd_Ashique_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume <i className="far fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-5 order-lg-3">
            <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
              {counterData.map((count) => (
                <div className="counter-item counter-text-wrap" key={count.id}>
                  <Counter end={count.value} extraClass={count.valueType} />
                  <span className="counter-title">{count.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img src="assets/images/hero/me.png" alt="Author" />
              <div className="progress-shape">
                <img
                  src="assets/images/hero/progress-shape.png"
                  alt="Progress"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Hero;

