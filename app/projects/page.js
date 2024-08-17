import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

import dynamic from "next/dynamic";
const ProjectGridIsotop = dynamic(
  () => import("@/components/ProjectGridIsotop"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Projects Grid",
};

const ProjectsPage = () => {
  return (
    <>
      
      
      <section className="projects-area pt-130 pb-30 rpb-100 rel z-1" id="portfolio">
      
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">My Projects</span>
              <h2>
                My <span>Projects</span> Showcases
              </h2>
            </div>
          </div>
        </div>
          <ProjectGridIsotop />
          
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
      </>
  );
};
export default ProjectsPage;
