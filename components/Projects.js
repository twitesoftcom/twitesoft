import Image from "next/image";
import projectPos from "/public/images/pos.jpg";

function Projects() {
  return (
    <div>
      <>
        <section id="projects" className="work_area bg-gray pt-120 pb-120">
          <div className="container">
            <div className="row justify-center">
              <div className="w-ull lg:w-1/2">
                <div className="section_title text-center pb-6">
                  <h5 className="sub_title">Works</h5>
                  <h4 className="main_title">Some of Our Recent Works</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="work_wrapper relative">
              <div className="row work_active">
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                  <div className="single_item mx-auto">
                    <div className="single_work mx-3">
                      <div className="work_image">
                        <Image src={projectPos} className="w-full" alt="services image" />
                      </div>
                      <div className="work_content">
                        <a href="#" className="arrow">
                          <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          >
                            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                          </svg>
                        </a>
                        <h4 className="work_title text-xl md:text-xl">
                          <a href="#">POS SYSTEM</a>
                        </h4>
                        <p className="mt-2">Vue,PHP, Laravel , MySQL</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                  <div className="single_item mx-auto">
                    <div className="single_work mx-3">
                      <div className="work_image">
                        <Image src={projectPos} className="w-full" alt="services image" />
                      </div>
                      <div className="work_content">
                        <a href="#" className="arrow">
                          <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          >
                            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                          </svg>
                        </a>
                        <h4 className="work_title text-xl md:text-xl">
                          <a href="#">POS SYSTEM</a>
                        </h4>
                        <p className="mt-2">Vue,PHP, Laravel , MySQL</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                  <div className="single_item mx-auto">
                    <div className="single_work mx-3">
                      <div className="work_image">
                        <Image src={projectPos} className="w-full" alt="services image" />
                      </div>
                      <div className="work_content">
                        <a href="#" className="arrow">
                          <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          >
                            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                          </svg>
                        </a>
                        <h4 className="work_title text-xl md:text-xl">
                          <a href="#">POS SYSTEM</a>
                        </h4>
                        <p className="mt-2">Vue,PHP, Laravel , MySQL</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                  <div className="single_item mx-auto">
                    <div className="single_work mx-3">
                      <div className="work_image">
                        <Image src={projectPos} className="w-full" alt="services image" />
                      </div>
                      <div className="work_content">
                        <a href="#" className="arrow">
                          <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          >
                            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                          </svg>
                        </a>
                        <h4 className="work_title text-xl md:text-xl">
                          <a href="#">POS SYSTEM</a>
                        </h4>
                        <p className="mt-2">Vue,PHP, Laravel , MySQL</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                  <div className="single_item mx-auto">
                    <div className="single_work mx-3">
                      <div className="work_image">
                        <Image src={projectPos} className="w-full" alt="services image" />
                      </div>
                      <div className="work_content">
                        <a href="#" className="arrow">
                          <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          >
                            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                          </svg>
                        </a>
                        <h4 className="work_title text-xl md:text-xl">
                          <a href="#">POS SYSTEM</a>
                        </h4>
                        <p className="mt-2">Vue,PHP, Laravel , MySQL</p>
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
