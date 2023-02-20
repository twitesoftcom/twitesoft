import Image from "next/image";
import teamImg1 from "/public/images/team/team1.jpg";
import teamImg2 from "/public/images/team/team2.jpg";
import teamImg3 from "/public/images/team/team3.jpg";
import teamImg4 from "/public/images/team/team4.jpg";
import teamImg5 from "/public/images/team/team5.webp";

function Team() {
  return (
    <div>
      <>
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
      </>
    </div>
  );
}

export default Team;
