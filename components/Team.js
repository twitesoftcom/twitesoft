import Image from "next/image";
import teamImg2 from "/public/images/team/abdur-rahman.jpeg";
import teamImg5 from "/public/images/team/al-amin.png";
import teamImg6 from "/public/images/team/al-hasan.jpg";
import teamImg1 from "/public/images/team/al-mamun.jpg";
import teamImg4 from "/public/images/team/rajib.jpg";
import teamImg3 from "/public/images/team/tipu.jpg";

function Team() {
  return (
    <div>
      <>
        <section id="team" className="team_area page_area pt-24 pb-24">
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
                <div className="w-full sm:w-12/12 md:w-6/12 lg:w-3/12">
                  <div className="single_team_item mx-auto">
                    <div className="single_team mx-3">
                      <div className="team_image relative">
                        <Image
                          src={teamImg1}
                          alt="team image"
                          className="w-full"
                        />
                        <ul className="social absolute top-4 right-8">
                          <li>
                            <a
                              href="https://www.facebook.com/almamun.csit"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/almamuncsit"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-twitter"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                  fill="white"
                                ></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/almamuncsit/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/almamuncsit"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team_content py-5 px-8 relative">
                        <h4 className="team_name text-xl md:text-2xl">
                          <a
                            href="#"
                            className="text-black group-hover:text-white"
                          >
                            Al-Mamun Sarkar
                          </a>
                        </h4>
                        <p className="mt-2 transition-all duration-300 group-hover:text-white">
                          Solution Architect
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-12/12 md:w-6/12 lg:w-3/12">
                  <div className="single_team_item mx-auto">
                    <div className="single_team mx-3">
                      <div className="team_image relative">
                        <Image
                          src={teamImg2}
                          alt="team image"
                          className="w-full"
                        />
                        <ul className="social absolute top-4 right-8">
                          <li>
                            <a
                              href="https://www.facebook.com/abdurrahmanriyadbd"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-twitter"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                  fill="white"
                                ></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/abdurrahmanriyad/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com//abdurrahmanriyad/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team_content py-5 px-8 relative">
                        <h4 className="team_name text-xl md:text-2xl">
                          <a
                            href="#"
                            className="text-black group-hover:text-white"
                          >
                            Abdur Rahman
                          </a>
                        </h4>
                        <p className="mt-2 transition-all duration-300 group-hover:text-white">
                          Sr Software Engineer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-12/12 md:w-6/12 lg:w-3/12">
                  <div className="single_team_item mx-auto">
                    <div className="single_team mx-3">
                      <div className="team_image relative">
                        <Image
                          src={teamImg3}
                          alt="team image"
                          className="w-full"
                        />
                        <ul className="social absolute top-4 right-8">
                          <li>
                            <a
                              href="https://www.facebook.com/abirbikal"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/abirbikal"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-twitter"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                  fill="white"
                                ></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/tipudanny/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com//tipudanny/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team_content py-5 px-8 relative">
                        <h4 className="team_name text-xl md:text-2xl">
                          <a
                            href="#"
                            className="text-black group-hover:text-white"
                          >
                            Md. Tipu Sultan
                          </a>
                        </h4>
                        <p className="mt-2 transition-all duration-300 group-hover:text-white">
                          Software Engineer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-12/12 md:w-6/12 lg:w-3/12">
                  <div className="single_team_item mx-auto">
                    <div className="single_team mx-3">
                      <div className="team_image relative">
                        <Image
                          src={teamImg6}
                          alt="team image"
                          className="w-full"
                        />
                        <ul className="social absolute top-4 right-8">
                          <li>
                            <a
                              href="https://www.facebook.com/AlHasanSarkar"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/AlHasanSarkar"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-twitter"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                  fill="white"
                                ></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/al-hasan-sarkar-4a9a65b5/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team_content py-5 px-8 relative">
                        <h4 className="team_name text-xl md:text-2xl">
                          <a
                            href="#"
                            className="text-black group-hover:text-white"
                          >
                            Al-Hasan Sarkar
                          </a>
                        </h4>
                        <p className="mt-2 transition-all duration-300 group-hover:text-white">
                          SEO Specialist
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-12/12 md:w-6/12 lg:w-3/12">
                  <div className="single_team_item mx-auto">
                    <div className="single_team mx-3">
                      <div className="team_image relative">
                        <Image
                          src={teamImg5}
                          alt="team image"
                          className="w-full"
                        />
                        <ul className="social absolute top-4 right-8">
                          <li>
                            <a
                              href="https://www.facebook.com/alamin.csit"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/AlaminI30306737"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-twitter"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                  fill="white"
                                ></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/md-al-amin-islam-1725aa1bb/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/developeralamin"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team_content py-5 px-8 relative">
                        <h4 className="team_name text-xl md:text-2xl">
                          <a
                            href="#"
                            className="text-black group-hover:text-white"
                          >
                            Md. Alamin Islam
                          </a>
                        </h4>
                        <p className="mt-2 transition-all duration-300 group-hover:text-white">
                          Backend Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-12/12 md:w-6/12 lg:w-3/12">
                  <div className="single_team_item mx-auto">
                    <div className="single_team mx-3">
                      <div className="team_image relative">
                        <Image
                          src={teamImg4}
                          alt="team image"
                          className="w-full"
                        />
                        <ul className="social absolute top-4 right-8">
                          <li>
                            <a
                              href="https://www.facebook.com/rajibmia.rahid51"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/rajibmia709"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-twitter"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                  fill="white"
                                ></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/rajibmiarahid/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/rajibcsit"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team_content py-5 px-8 relative">
                        <h4 className="team_name text-xl md:text-2xl">
                          <a
                            href="#"
                            className="text-black group-hover:text-white"
                          >
                            Rajib Mia Rahid
                          </a>
                        </h4>
                        <p className="mt-2 transition-all duration-300 group-hover:text-white">
                          Frontend Developer
                        </p>
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

export default Team;
