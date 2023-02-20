import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import teamImg1 from "/public/images/team/team1.jpg";
import teamImg2 from "/public/images/team/team2.jpg";
import teamImg3 from "/public/images/team/team3.jpg";
import teamImg4 from "/public/images/team/team4.jpg";
import teamImg5 from "/public/images/team/team5.webp";

import contactImage from "/public/images/contact.svg";

import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function index() {
  return (
    <>
      <Head>
        <title>Twite Soft</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/*--====== PRELOADER PART START ======--*/}

        <div className="preloader">
          <div className="loader">
            <div className="ytp-spinner">
              <div className="ytp-spinner-container">
                <div className="ytp-spinner-rotator">
                  <div className="ytp-spinner-left">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                  <div className="ytp-spinner-right">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*--====== PRELOADER PART ENDS ======--*/}

        {/*--------- HEADER PART Start------------ */}
        <Home />
        {/*--------- HEADER PART End------------ */}

        {/*--====== ABOUT PART START ======--*/}
        <About />
        {/*--====== ABOUT PART ENDS ======--*/}

        {/*--====== SERVICES PART START ======--*/}
        <Services />

        {/*--====== SERVICES PART ENDS ======--*/}

        {/*-------------------------- PROJECTS PART START------------ */}
        <Projects />
        {/*-------------------------- PROJECTS PART END------------ */}

        {/*--====== PRICING PLAN PART ENDS ======--*/}

        <section id="pricing" className="pricing_area pt-120 pb-120">
          <div className="container">
            <div className="row justify-center">
              <div className="w-full lg:w-1/2">
                <div className="section_title text-center pb-6">
                  <h5 className="sub_title">Pricing Plans</h5>
                  <h4 className="main_title">Choose Your Plan</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="w-full">
                <div className="pricing_menu mt-8 pb-8">
                  <ul className="flex justify-center">
                    <li className="nav-item">
                      <button
                        className="active bg-gray text-body-color py-3 px-8 rounded-tl-full rounded-bl-full"
                        data-tab-target="#monthlyPlan"
                      >
                        Monthly
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="bg-gray text-body-color py-3 px-8 rounded-tr-full rounded-br-full"
                        data-tab-target="#yearlyPlan"
                      >
                        Yearly
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="pricing_content mt-6_area">
                  <div className="tab-content">
                    <div className="active tab-pane" id="monthlyPlan" data-tab-content>
                      <div className="row justify-center">
                        <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                          <div className="single_pricing text-center mt-8 mx-3">
                            <div className="pricing_title relative inline-block">
                              <h4 className="title group-hover:text-white">Basic</h4>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="112"
                                height="110"
                                viewBox="0 0 112 110"
                              >
                                <path
                                  className="services_shape"
                                  id="Polygon_15"
                                  data-name="Polygon 15"
                                  d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                  fill="#f94f4f"
                                />
                              </svg>
                            </div>
                            <div className="pricing_content mt-6">
                              <span className="pricing_price font-bold text-black text-4xl">
                                $19.00
                              </span>
                              <p className="mt-4 leading-9">
                                Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam
                                voluptua vero eos accusam et justo duo dolores{" "}
                              </p>
                              <a href="" className="main-btn pricing_btn">
                                Choose Plan
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                          <div className="single_pricing text-center mt-8 mx-3 active">
                            <div className="pricing_title relative inline-block">
                              <h4 className="title group-hover:text-white">Standard</h4>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="112"
                                height="110"
                                viewBox="0 0 112 110"
                              >
                                <path
                                  className="services_shape"
                                  id="Polygon_15"
                                  data-name="Polygon 15"
                                  d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                  fill="#f94f4f"
                                />
                              </svg>
                            </div>
                            <div className="pricing_content mt-6">
                              <span className="pricing_price font-bold text-black text-4xl">
                                $39.00
                              </span>
                              <p className="mt-4 leading-9">
                                Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam
                                voluptua vero eos accusam et justo duo dolores{" "}
                              </p>
                              <a href="" className="main-btn pricing_btn">
                                Choose Plan
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                          <div className="single_pricing text-center mt-8 mx-3">
                            <div className="pricing_title relative inline-block">
                              <h4 className="title group-hover:text-white">Premium</h4>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="112"
                                height="110"
                                viewBox="0 0 112 110"
                              >
                                <path
                                  className="services_shape"
                                  id="Polygon_15"
                                  data-name="Polygon 15"
                                  d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                  fill="#f94f4f"
                                />
                              </svg>
                            </div>
                            <div className="pricing_content mt-6">
                              <span className="pricing_price font-bold text-black text-4xl">
                                $99.00
                              </span>
                              <p className="mt-4 leading-9">
                                Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam
                                voluptua vero eos accusam et justo duo dolores{" "}
                              </p>
                              <a href="" className="main-btn pricing_btn">
                                Choose Plan
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="yearlyPlan" data-tab-content>
                      <div className="row justify-center">
                        <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                          <div className="single_pricing text-center mt-8 mx-3">
                            <div className="pricing_title relative inline-block">
                              <h4 className="title group-hover:text-white">Basic</h4>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="112"
                                height="110"
                                viewBox="0 0 112 110"
                              >
                                <path
                                  className="services_shape"
                                  id="Polygon_15"
                                  data-name="Polygon 15"
                                  d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                  fill="#f94f4f"
                                />
                              </svg>
                            </div>
                            <div className="pricing_content mt-6">
                              <span className="pricing_price font-bold text-black text-4xl">
                                $99.00
                              </span>
                              <p className="mt-4 leading-9">
                                Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam
                                voluptua vero eos accusam et justo duo dolores{" "}
                              </p>
                              <a href="" className="main-btn pricing_btn">
                                Choose Plan
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                          <div className="single_pricing text-center mt-8 mx-3 active">
                            <div className="pricing_title relative inline-block">
                              <h4 className="title group-hover:text-white">Standard</h4>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="112"
                                height="110"
                                viewBox="0 0 112 110"
                              >
                                <path
                                  className="services_shape"
                                  id="Polygon_15"
                                  data-name="Polygon 15"
                                  d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                  fill="#f94f4f"
                                />
                              </svg>
                            </div>
                            <div className="pricing_content mt-6">
                              <span className="pricing_price font-bold text-black text-4xl">
                                $199.00
                              </span>
                              <p className="mt-4 leading-9">
                                Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam
                                voluptua vero eos accusam et justo duo dolores{" "}
                              </p>
                              <a href="" className="main-btn pricing_btn">
                                Choose Plan
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                          <div className="single_pricing text-center mt-8 mx-3">
                            <div className="pricing_title relative inline-block">
                              <h4 className="title group-hover:text-white">Premium</h4>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="112"
                                height="110"
                                viewBox="0 0 112 110"
                              >
                                <path
                                  className="services_shape"
                                  id="Polygon_15"
                                  data-name="Polygon 15"
                                  d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                  fill="#f94f4f"
                                />
                              </svg>
                            </div>
                            <div className="pricing_content mt-6">
                              <span className="pricing_price font-bold text-black text-4xl">
                                $499.00
                              </span>
                              <p className="mt-4 leading-9">
                                Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam
                                voluptua vero eos accusam et justo duo dolores{" "}
                              </p>
                              <a href="" className="main-btn pricing_btn">
                                Choose Plan
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*--====== PRICING PLAN PART ENDS ======--*/}

        {/*--====== TEAM PART START ======---------*/}

        <section id="team" className="team_area bg-gray pt-120 pb-120">
          <div className="container">
            <div className="row justify-center">
              <div className="w-full lg:w-1/2">
                <div className="section_title text-center pb-6">
                  <h5 className="sub_title">Team</h5>
                  <h4 className="main_title">Meet Our Team Members</h4>
                </div>
              </div>
            </div>
            <div className="team-wrapper relative">
              <div className="row team_active">
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                  <div className="single_team_item mx-auto">
                    <div className="single_team mx-3">
                      <div className="team_image relative">
                        <Image src={teamImg1} alt="team image" className="w-full" />
                        <ul className="social absolute top-4 right-8">
                          <li>
                            <a href="#">
                              <i className="lni lni-facebook-filled"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni lni-twitter-filled"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni lni-linkedin-original"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team_content py-5 px-8 relative">
                        <h4 className="team_name text-xl md:text-2xl">
                          <a href="#" className="text-black group-hover:text-white">
                            Al-Mamun Sarkar
                          </a>
                        </h4>
                        <p className="mt-2 transition-all duration-300 group-hover:text-white">
                          Founder and CEO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                  <div className="single_team_item mx-auto">
                    <div className="single_team mx-3">
                      <div className="team_image relative">
                        <Image src={teamImg2} alt="team image" className="w-full" />
                        <ul className="social absolute top-4 right-8">
                          <li>
                            <a href="#">
                              <i className="lni lni-facebook-filled"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni lni-twitter-filled"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni lni-linkedin-original"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team_content py-5 px-8 relative">
                        <h4 className="team_name text-xl md:text-2xl">
                          <a href="#" className="text-black group-hover:text-white">
                            Abdur Rahman
                          </a>
                        </h4>
                        <p className="mt-2 transition-all duration-300 group-hover:text-white">
                          Co-Founder and Project manager
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                  <div className="single_team_item mx-auto">
                    <div className="single_team mx-3">
                      <div className="team_image relative">
                        <Image src={teamImg3} alt="team image" className="w-full" />
                        <ul className="social absolute top-4 right-8">
                          <li>
                            <a href="#">
                              <i className="lni lni-facebook-filled"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni lni-twitter-filled"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni lni-linkedin-original"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team_content py-5 px-8 relative">
                        <h4 className="team_name text-xl md:text-2xl">
                          <a href="#" className="text-black group-hover:text-white">
                            Md. Tipu Sultan
                          </a>
                        </h4>
                        <p className="mt-2 transition-all duration-300 group-hover:text-white">
                          Co-Founder and Tech Lead
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                  <div className="single_team_item mx-auto">
                    <div className="single_team mx-3">
                      <div className="team_image relative">
                        <Image src={teamImg4} alt="team image" className="w-full" />
                        <ul className="social absolute top-4 right-8">
                          <li>
                            <a href="#">
                              <i className="lni lni-facebook-filled"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni lni-twitter-filled"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni lni-linkedin-original"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team_content py-5 px-8 relative">
                        <h4 className="team_name text-xl md:text-2xl">
                          <a href="#" className="text-black group-hover:text-white">
                            Md. Rajib Mia Rahid
                          </a>
                        </h4>
                        <p className="mt-2 transition-all duration-300 group-hover:text-white">
                          Web Application Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                  <div className="single_team_item mx-auto">
                    <div className="single_team mx-3">
                      <div className="team_image relative">
                        <Image src={teamImg5} alt="team image" className="w-full" />
                        <ul className="social absolute top-4 right-8">
                          <li>
                            <a href="#">
                              <i className="lni lni-facebook-filled"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni lni-twitter-filled"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni lni-linkedin-original"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team_content py-5 px-8 relative">
                        <h4 className="team_name text-xl md:text-2xl">
                          <a href="#" className="text-black group-hover:text-white">
                            Md. Alamin Islam
                          </a>
                        </h4>
                        <p className="mt-2 transition-all duration-300 group-hover:text-white">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*--====== TEAM PART ENDS ======---------*/}

        {/*--====== CONTACT PART START ======---------*/}
        <section id="contact" className="contact_area relative pt-18 pb-120">
          <div className="contact_image flex items-center justify-end">
            <div className="image lg:pr-13">
              <Image src={contactImage} alt="contact-image" />
            </div>
          </div>

          <div className="container">
            <div className="row justify-end">
              <div className="w-full lg:w-1/2">
                <div className="contact_wrapper mt-11">
                  <div className="section_title pb-4">
                    <h5 className="sub_title">Contact</h5>
                    <h4 className="main_title">Get In Touch</h4>
                  </div>

                  <div className="contact_form">
                    <form id="contact-form" action="" method="POST">
                      <div className="row">
                        <div className="w-full md:w-1/2">
                          <div className="mx-3">
                            <div className="single_form mt-8">
                              <input
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-md py-4 px-6 border border-solid border-body-color"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2">
                          <div className="mx-3">
                            <div className="single_form mt-8">
                              <input
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-md py-4 px-6 border border-solid border-body-color"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="mx-3">
                            <div className="single_form mt-8">
                              <textarea
                                name="message"
                                id="message"
                                placeholder="Message"
                                rows="5"
                                className="w-full rounded-md py-4 px-6 border border-solid border-body-color resize-none"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <p className="form-message mx-3"></p>
                        <div className="w-full">
                          <div className="mx-3">
                            <div className="single_form mt-8">
                              <button type="submit" className="main-btn contact-btn">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--====== CONTACT PART ENDS ======---------*/}

        {/*--====== FOOTER PART START ======---------*/}

        {/*--====== FOOTER PART ENDS ======---------*/}
      </div>
    </>
  );
}
