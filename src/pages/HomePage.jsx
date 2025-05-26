import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <h1>tes</h1>
      <Section2 />
      <Footer />
    </>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[650px]"
        style={{
          backgroundImage: "url(src/assets/BackgroundCoffe.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-2">
              Aroma Sriwijaya
            </h1>
            <div>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl mb-2">
                Premium Indonesian Coffe Beans for Global Markets
              </p>
            </div>
            <button className="btn btn-primary bg-amber-700 rounded-xl">
              View Coffe Catalog <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="hero bg-amber-50 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="src\assets\Section2.jpg"
            className="rounded-lg shadow-2xl w-225 h-90"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
              Exceptional Coffe Beans from the Heart of Indonesia
            </h1>
            <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Aroma Sriwijaya works directly with local farmers across Indonesia
              to source the finest Arabica and Robusta coffee beans. Our
              commitment to quality and sustainability ensures that every bean
              we export meets the highest standards.
            </p>
            <a
              className="btn btn-primary bg-orange-700 mt-5 rounded-xl"
              href=""
            >
              Learn About Our Process
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
