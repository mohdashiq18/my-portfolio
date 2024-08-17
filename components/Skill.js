import Link from "next/link";

const items = [
  {
    id: 1,
    name: "HTML",
    image: "assets/images/skills/html.png",
  },{
    id: 1,
    name: "CSS",
    image: "assets/images/skills/css.png",
  },{
    id: 1,
    name: "JavaScript",
    image: "assets/images/skills/js.png",
  },{
    id: 1,
    name: "Bootstrap",
    image: "assets/images/skills/bootstrap.png",
  },{
    id: 1,
    name: "mongoDB",
    image: "assets/images/skills/mongo.png",
  },
  {
    id: 2,
    name: "Express",
    image: "assets/images/skills/express.png",
    value: "83",
  },
  {
    id: 3,
    name: "React",
    image: "assets/images/skills/react.png",
    value: "93",
  },
  {
    id: 4,
    name: "Node",
    image: "assets/images/skills/node.png",
    value: "84",
  },
  {
    id: 5,
    name: "Redux",
    image: "assets/images/skills/redux.png",
    value: "65",
  },
  {
    id: 6,
    name: "MySql",
    image: "assets/images/skills/mysql.png",
    value: "86",
  },
  {
    id: 7,
    name: "Tailwind",
    image: "assets/images/skills/tailwind.png",
    value: "62",
  },
  {
    id: 8,
    name: "Wordpress",
    image: "assets/images/skills/wordpress.png",
    value: "94",
  },  {
    id: 5,
    name: "Ionic",
    image: "assets/images/skills/ionic.png",
    value: "65",
  },
  {
    id: 6,
    name: "Figma",
    image: "assets/images/skills/figma.png",
    value: "86",
  },
  {
    id: 7,
    name: "Framer",
    image: "assets/images/skills/fremar.png",
    value: "62",
  },
  {
    id: 8,
    name: "Photoshop",
    image: "assets/images/skills/photoshop.png",
    value: "94",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Let’s Explore Our <span>Skills</span>
                  </h2>
                  <p>
                  Hello! I’m a versatile professional with a strong background in various fields of technology and design. Let me walk you through my skills and experience.
                  </p>
                  <p >
                  Combining my skills in full stack development, mobile app development, and UI/UX design, I bring a holistic approach to projects. Whether it’s building a complete web application, developing a mobile app, or designing a user-friendly interface, I ensure that every aspect of the project is handled with expertise and attention to detail.
                  </p>
                  <ul className="list-style-two">
                <li>2+ Years Of Experience</li>
                <li>Professional Web Designer & Development</li>
                <li>Mobile Apps Design & Development</li>
                <li>Custom Design Support</li>
              </ul>
                </div>
               
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {items.map((item) => (
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src={item.image} alt="Skill" />
                        <h5>{item.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
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
export default Skill;

export const Skill2 = () => {
  return (
    <section
      id="skills"
      className="skill-area-two rel z-1 pt-130 rpt-100 pb-105 rpb-70"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skill-content-two rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-60">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> professional skill of me
                </span>
                <h2>professional skill</h2>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-8">
                  <img src="assets/images/skills/skill-man.png" alt="Skill" />
                </div>
                <div className="col-4">
                  <img src="assets/images/shape/skill-arrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="skill-wrap-two">
              <div className="row gap-40">
                {items.map(
                  (item) =>
                    item.id <= 6 && (
                      <div className="col-md-4 col-sm-4 col-6" key={item.id}>
                        <div className="skill-item-two wow fadeInUp delay-0-3s">
                          <div className="icon-percent">
                            <img src={item.image} alt="Skill" />
                            <span className="percent">{item.value}%</span>
                          </div>
                          <h5 className="title">{item.name}</h5>
                        </div>
                      </div>
                    )
                )}
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
