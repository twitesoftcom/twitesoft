import Image from "next/image";
import aboutImage from "/public/images/about.svg";

function About() {
  return (
    <div>
      <div className="full_about page_area pt-24 pb-24">
        <div className="row justify-center pb-12">
          <div className="w-full lg:w-1/2">
            <div className="section_title text-center pb-6">
              <h5 className="sub_title">About</h5>
              <h4 className="main_title">Your Goal is Our Achievement</h4>
            </div>
          </div>
        </div>

        <section id="why" className="about_area relative">
          <div className="about_image flex items-end justify-end">
            <div className="image lg:pr-13">
              <Image src={aboutImage} alt="about image" />
            </div>
          </div>
          <div className="container">
            <div className="row justify-end">
              <div className="w-full lg:w-1/2">
                <div className="about_content mx-4 pt-11 lg:pt-15 lg:pb-15">
                  <div className="text-xl font-semibold">
                    <h4>Why Choose Us</h4>
                  </div>
                  <ul className="about_list pt-3">
                    <li className="flex mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"
                          fill="rgb(1, 104, 198)"
                        />
                      </svg>

                      <div className="about_list_content pl-5 pr-2">
                        <p>
                          <strong>Technical Excellence:</strong> We take pride in our team&apos;s
                          exceptional technical prowess, with a deep understanding of the latest
                          technologies and industry best practices, ensuring the delivery of
                          top-notch solutions.
                        </p>
                      </div>
                    </li>
                    <li className="flex mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"
                          fill="rgb(1, 104, 198)"
                        />
                      </svg>

                      <div className="about_list_content pl-5 pr-2">
                        <p>
                          <strong>Customized Approach:</strong> Our commitment to understanding your
                          unique business needs allows us to tailor our services and solutions
                          accordingly, providing you with personalized and effective IT solutions.
                        </p>
                      </div>
                    </li>
                    <li className="flex mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"
                          fill="rgb(1, 104, 198)"
                        />
                      </svg>

                      <div className="about_list_content pl-5 pr-2">
                        <p>
                          <strong>Timely Delivery:</strong> We value your time and prioritize timely
                          project completion, ensuring that your IT initiatives are implemented
                          efficiently, enabling you to stay ahead of your competition.
                        </p>
                      </div>
                    </li>
                    <li className="flex mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"
                          fill="rgb(1, 104, 198)"
                        />
                      </svg>

                      <div className="about_list_content pl-5 pr-2">
                        <p>
                          <strong>Exceptional Support:</strong> Our dedicated support team is always
                          ready to assist you, providing ongoing maintenance, updates, and
                          responsive assistance to ensure your IT systems run smoothly, giving you
                          peace of mind.
                        </p>
                      </div>
                    </li>
                    <li className="flex mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"
                          fill="rgb(1, 104, 198)"
                        />
                      </svg>

                      <div className="about_list_content pl-5 pr-2">
                        <p>
                          <strong>Collaborative Approach:</strong> We believe in fostering strong
                          partnerships with our clients, working closely together throughout the
                          project lifecycle to ensure transparent communication, alignment of goals,
                          and a successful outcome.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-12" id="about">
          <div className="container">
            <div className="row justify-center">
              <div className="w-full lg:w-1/2">
                <div className="section_title text-center pb-6">
                  <h4 className="main_title">Our Work Process</h4>
                </div>
              </div>
            </div>
            <div className="row justify-center">
              <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                <div className="single_services text-center mt-8 mx-3">
                  <div className="services_icon">
                    <div className="service_svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10 13h-4v-1h4v1zm2.318-4.288l3.301 3.299-4.369.989 1.068-4.288zm11.682-5.062l-7.268 7.353-3.401-3.402 7.267-7.352 3.402 3.401zm-6 8.916v.977c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h14.056l1.977-2h-18.033v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.843l-2 2.023z"
                          className="service_svg_icon"
                        />
                      </svg>
                    </div>
                    <div className="main_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="94"
                        height="92"
                        viewBox="0 0 94 92"
                      >
                        <path
                          className="services_shape"
                          id="Polygon_12"
                          data-name="Polygon 12"
                          d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="services_content mt-5">
                    <h3 className="services_title text-black font-semibold text-xl md:text-3xl">
                      Research
                    </h3>
                    <p className="mt-4">
                      Gain valuable insights and understand user needs through thorough research,
                      setting the foundation for informed decision-making and successful project
                      outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                <div className="single_services text-center mt-8 mx-3">
                  <div className="services_icon">
                    <div className="service_svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-1.992c.001-2.079.996-3.826 1.968-5.513.913-1.585 1.774-3.083 1.774-4.753 0-3.108-2.518-4.734-5.004-4.734-2.482 0-4.996 1.626-4.996 4.734 0 1.67.861 3.168 1.774 4.753.972 1.687 1.966 3.434 1.967 5.513h-1.991c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4 11.766c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm0 2c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm-1.701 3.159c-.19.216-.465.341-.752.341h-1.094c-.287 0-.562-.125-.752-.341l-1.451-1.659h5.5l-1.451 1.659zm-.931-14.659h-.689v-1h.689v1zm.913 0h-.428v-1h.807l-.379 1zm-2.531 0l-.396-1h.834v1h-.438zm4.25-.995c-1.622 3.654-2.38 5.049-2.38 8.995h-1.241c0-3.946-.757-5.341-2.379-8.995h.776c1.172 2.851 1.988 3.997 2.224 7.021.234-3.024 1.052-4.17 2.223-7.021h.777z"
                          className="service_svg_icon"
                        />
                      </svg>
                    </div>
                    <div className="main_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="94"
                        height="92"
                        viewBox="0 0 94 92"
                      >
                        <path
                          className="services_shape"
                          id="Polygon_12"
                          data-name="Polygon 12"
                          d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="services_content mt-5">
                    <h3 className="services_title text-black font-semibold text-xl md:text-3xl">
                      Prototype
                    </h3>
                    <p className="mt-4">
                      Visualize your ideas and test concepts with interactive prototypes, allowing
                      for early feedback and refinement to ensure a user-centric and intuitive final
                      product
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                <div className="single_services text-center mt-8 mx-3">
                  <div className="services_icon">
                    <div className="service_svg">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path
                          d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"
                          className="service_svg_icon"
                        />
                      </svg>
                    </div>
                    <div className="main_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="94"
                        height="92"
                        viewBox="0 0 94 92"
                      >
                        <path
                          className="services_shape"
                          id="Polygon_12"
                          data-name="Polygon 12"
                          d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="services_content mt-5">
                    <h3 className="services_title text-black font-semibold text-xl md:text-3xl">
                      Build
                    </h3>
                    <p className="mt-4">
                      Bring your vision to life with our skilled development team, leveraging
                      cutting-edge technologies and best practices to deliver a robust and scalable
                      solution.
                      {/* that meets your business objectives. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
