import Image from "next/image";
import Link from "next/link";
import projectImage from "/public/images/project/project1.png";

function Projects() {
  return (
    <div>
      <>
        <section id="projects" className="work_area bg-white pt-24 pb-24">
          <div className="container">
            <div className="row justify-center">
              <div className="w-ull lg:w-1/2">
                <div className="section_title text-center pb-6">
                  <h4 className="main_title">Some of Our Recent Works</h4>
                  <p className="text-[17px]">
                    Take a glimpse into our portfolio showcasing our recent
                    works, exemplifying our expertise and innovative solutions
                    across web development, software projects, and mobile app
                    development.
                  </p>
                </div>
              </div>
            </div>
            {/*------------------ project main container------------*/}
            <div className="project-area mt-12">
              <div className="container">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                  {/*------------------ project content------------*/}
                  <div className="flex">
                    <div className="flex flex-col md:flex-row  p-3">
                      <Image
                        src={projectImage}
                        alt="project-image"
                        className="w-48 h-48 md:w-96"
                      />

                      <div className="flex flex-col justify-start p-2">
                        <div className="about_content mx-4 ">
                          <div className="section_title pb-2">
                            <h4 className="text-xl lg:text-2xl md:text-xl sm:text-[16px] font-bold ">
                              Potumia - Inventory Management System
                            </h4>
                          </div>
                          <p className="text-sm sm:text-sm mb-3">
                            The point of sale (POS) or point of purchase (POP)
                            is the time and place at which a retail transaction
                            is completed. At the point of sale, the merchant
                            calculates the amount owed by the customer,
                            indicates that amount, may prepare an invoice for
                            the customer
                          </p>
                          <p>
                            <span className="font-bold">Utilized:</span> PHP,
                            Laravel, Vuejs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------------------ project content------------*/}
                  <div className="flex">
                    <div className="flex flex-col md:flex-row  p-3">
                      <Image
                        src={projectImage}
                        alt="project-image"
                        className="w-48 h-48 md:w-96"
                      />

                      <div className="flex flex-col justify-start p-2">
                        <div className="about_content mx-4 ">
                          <div className="section_title pb-2">
                            <h4 className="text-xl lg:text-2xl md:text-xl sm:text-[16px] font-bold ">
                              Blogen - AI Based Article Writing
                            </h4>
                          </div>
                          <p className="text-sm sm:text-sm mb-3">
                            The point of sale (POS) or point of purchase (POP)
                            is the time and place at which a retail transaction
                            is completed. At the point of sale, the merchant
                            calculates the amount owed by the customer,
                            indicates that amount, may prepare an invoice for
                            the customer
                          </p>
                          <p>
                            <span className="font-bold">Utilized:</span> PHP,
                            Laravel, Vuejs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------------------ project content------------*/}
                  <div className="flex">
                    <div className="flex flex-col md:flex-row  p-3">
                      <Image
                        src={projectImage}
                        alt="project-image"
                        className="w-48 h-48 md:w-96"
                      />

                      <div className="flex flex-col justify-start p-2">
                        <div className="about_content mx-4 ">
                          <div className="section_title pb-2">
                            <h4 className="text-xl lg:text-2xl md:text-xl sm:text-[16px] font-bold ">
                              Art of CSE - Elearning platform
                            </h4>
                          </div>
                          <p className="text-sm sm:text-sm mb-3">
                            The point of sale (POS) or point of purchase (POP)
                            is the time and place at which a retail transaction
                            is completed. At the point of sale, the merchant
                            calculates the amount owed by the customer,
                            indicates that amount, may prepare an invoice for
                            the customer
                          </p>
                          <p>
                            <span className="font-bold">Utilized:</span> PHP,
                            Laravel, Vuejs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------------------ project content------------*/}
                  <div className="flex">
                    <div className="flex flex-col md:flex-row  p-3">
                      <Image
                        src={projectImage}
                        alt="project-image"
                        className="w-48 h-48 md:w-96"
                      />

                      <div className="flex flex-col justify-start p-2">
                        <div className="about_content mx-4 ">
                          <div className="section_title pb-2">
                            <h4 className="text-xl lg:text-2xl md:text-xl sm:text-[16px] font-bold ">
                              POS- point of sale
                            </h4>
                          </div>
                          <p className="text-sm sm:text-sm mb-3">
                            The point of sale (POS) or point of purchase (POP)
                            is the time and place at which a retail transaction
                            is completed. At the point of sale, the merchant
                            calculates the amount owed by the customer,
                            indicates that amount, may prepare an invoice for
                            the customer
                          </p>
                          <p>
                            <span className="font-bold">Utilized:</span> PHP,
                            Laravel, Vuejs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*_____________View more project______________*/}
            <div className="row flex justify-center">
              <div className="row flex mt-16">
                <Link href="#">
                  <button className="main-btn contact-btn bg-[rgb(56,66,77)] inline-flex items-center px-4 py-2 ">
                    View More Projects
                    <svg
                      className="ml-2"
                      color="white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Projects;
