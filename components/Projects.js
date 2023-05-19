import Image from "next/image";
import projectImage from "/public/images/project/project1.png";

function Projects() {
  return (
    <div>
      <>
        <section
          id="projects"
          className="work_area page_area bg-white pt-24 pb-24"
        >
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
                              Inventory Management
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
                              AI Based Article Writer
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
                              Elearning platform
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
                              POS - point of sale
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
          </div>
        </section>
      </>
    </div>
  );
}

export default Projects;
