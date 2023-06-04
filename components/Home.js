import Image from "next/image";
import {
  default as shapeImage1,
  default as shapeImage11,
  default as shapeImage5,
} from "/public/images/shape/shape-1.svg";
import {
  default as shapeImage2,
  default as shapeImage6,
  default as shapeImage9,
} from "/public/images/shape/shape-2.svg";
import {
  default as shapeImage10,
  default as shapeImage3,
  default as shapeImage7,
} from "/public/images/shape/shape-3.svg";
import {
  default as shapeImage4,
  default as shapeImage8,
} from "/public/images/shape/shape-4.svg";

import headerImage from "/public/images/home.png";

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
                          <span>SaaS Application</span>
                        </li>
                        <li className="text-[#2ea7f3]">
                          <span>Iconic Websites</span>
                        </li>
                        <li className="text-[#f78d94]">
                          <span>IOS & Android Apps</span>
                        </li>
                        <li className="text-[#bf94d4]">
                          <span>Software Solutions </span>
                        </li>
                      </ul>
                    </div>

                    <p className="mt-8 lg:mr-8">
                      Unlock the full potential of technology with our
                      comprehensive IT services, encompassing web development,
                      software solutions, and mobile app development, tailored
                      to drive your digital success.
                    </p>
                    <div className="hero_btn mt-10">
                      {/* <a className="main-btn" href="#0">
                        Get Started
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="header_image flex items-center">
              <div className="image 2xl:pl-25">
                <Image
                  style={{ width: "600px" }}
                  src={headerImage}
                  alt="hader image"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Home;
