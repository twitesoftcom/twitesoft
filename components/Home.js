import Image from "next/image";
import shapeImage1 from "/public/images/shape/shape-1.svg";
import shapeImage2 from "/public/images/shape/shape-2.svg";
import shapeImage3 from "/public/images/shape/shape-3.svg";
import shapeImage4 from "/public/images/shape/shape-4.svg";
import shapeImage5 from "/public/images/shape/shape-1.svg";
import shapeImage6 from "/public/images/shape/shape-2.svg";
import shapeImage7 from "/public/images/shape/shape-3.svg";
import shapeImage8 from "/public/images/shape/shape-4.svg";
import shapeImage9 from "/public/images/shape/shape-2.svg";
import shapeImage10 from "/public/images/shape/shape-3.svg";
import shapeImage11 from "/public/images/shape/shape-1.svg";

import headerImage from "/public/images/header-image.svg";

function Home() {
  return (
    <div>
      <>
        <section className="header_area">
          <div
            id="home"
            className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center"
          >
            <div className="hero_shape shape_1">
              <Image src={shapeImage1} alt="shape-image" />
            </div>
            <div className="hero_shape shape_2">
              <Image src={shapeImage2} alt="shape-image" />
            </div>
            <div className="hero_shape shape_3">
              <Image src={shapeImage3} alt="shape-image" />
            </div>
            <div className="hero_shape shape_4">
              <Image src={shapeImage4} alt="shape-image" />
            </div>
            <div className="hero_shape shape_5">
              <Image src={shapeImage5} alt="shape-image" />
            </div>
            <div className="hero_shape shape_6">
              <Image src={shapeImage6} alt="shape-image" />
            </div>
            <div className="hero_shape shape_7">
              <Image src={shapeImage7} alt="shape-image" />
            </div>
            <div className="hero_shape shape_8">
              <Image src={shapeImage8} alt="shape-image" />
            </div>
            <div className="hero_shape shape_9">
              <Image src={shapeImage9} alt="shape-image" />
            </div>
            <div className="hero_shape shape_10">
              <Image src={shapeImage10} alt="shape-image" />
            </div>
            <div className="hero_shape shape_11">
              <Image src={shapeImage11} alt="shape-image" />
            </div>

            <div className="container">
              <div className="row">
                <div className="w-full lg:w-1/2">
                  <div className="header_hero_content pt-150 lg:pt-0">
                    {/* <div className="static-txt text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-4xl font-extrabold">
                      We Love <span className="hero_title">Creativity</span>
                    </div> */}
                    <div className="wrapper">
                      <div className="static-txt text-xl sm:text-xl md:text-5xl lg:text-4xl xl:text-4xl font-extrabold">
                        We build
                      </div>
                      <ul className="dynamic-txts text-xl sm:text-xl md:text-5xl lg:text-4xl xl:text-4xl font-extrabold">
                        <li className="text-[#f75593]">
                          <span>SaaS with pleasure</span>
                        </li>
                        <li className="text-[#2ea7f3]">
                          <span>Iconic websites</span>
                        </li>
                        <li className="text-[#f78d94]">
                          <span>IOS & android apps</span>
                        </li>
                        <li className="text-[#bf94d4]">
                          <span>Software development </span>
                        </li>
                      </ul>
                    </div>

                    <p className="mt-8 lg:mr-8">
                      Our dedicated IT teams will give you the power of next generation software
                      development solutions to help your business stand out.
                    </p>
                    <div className="hero_btn mt-10">
                      <a className="main-btn" href="#0">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header_shape hidden lg:block"></div>

            <div className="header_image flex items-center">
              <div className="image 2xl:pl-25">
                <Image src={headerImage} alt="hader image" />
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Home;
