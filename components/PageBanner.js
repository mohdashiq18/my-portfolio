import Link from "next/link";

const PageBanner = ({ pageName }) => {
  return (
    <section className="page-banner-area pt-50 rpt-140  rpb-60 rel z-1 text-center">
      <div className="container">
        <div className="banner-inner text-white">
          <h1 className="page-title wow fadeInUp delay-0-2s">{pageName}</h1>
         
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
export default PageBanner;
