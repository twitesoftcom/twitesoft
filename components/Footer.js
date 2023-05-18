import Image from "next/image";
import Link from "next/link";

import footerLogo from "/public/images/blue-logo.png";

function Footer() {
  return (
    <div>
      <>
        <footer id="footer" className="footer_area bg-slate-900 relative z-10">
          <div className="footer_widget pt-18 pb-120">
            <div className="container">
              <div className="row justify-center">
                <div className="w-full md:w-1/2 lg:w-3/12">
                  <div className="footer_about mt-13 mx-3">
                    <div className="footer_logo">
                      <Link href="#">
                        <Image
                          src={footerLogo}
                          alt="footer-logo"
                          width={150}
                          height={140}
                        />
                      </Link>
                    </div>
                    <div className="footer_content mt-8">
                      <p className="text-slate-400/75">
                        Our dedicated IT teams will give you the power of next
                        generation software development solutions to help your
                        business stand out.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-5/12">
                  <div className="footer_link_wrapper flex flex-wrap mx-3">
                    <div className="footer_link w-1/2 md:pl-13 mt-13">
                      <h2 className="footer_title text-xl font-semibold text-slate-400/75">
                        Quick Links
                      </h2>
                      <ul className="link pt-4">
                        <li>
                          <a
                            href="#"
                            className="text-slate-400/75 mt-4 hover:text-[rgb(1,104,198)]"
                          >
                            Company
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-slate-400/75 mt-4 hover:text-[rgb(1,104,198)]"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-slate-400/75 mt-4 hover:text-[rgb(1,104,198)]"
                          >
                            About
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer_link w-1/2 md:pl-13 mt-13">
                      <h2 className="footer_title text-xl font-semibold text-slate-400/75">
                        Resources
                      </h2>
                      <ul className="link pt-4">
                        <li>
                          <a
                            href="#"
                            className="text-slate-400/75 mt-4 hover:text-[rgb(1,104,198)]"
                          >
                            Support
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-slate-400/75 mt-4 hover:text-[rgb(1,104,198)]"
                          >
                            Contact
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-slate-400/75 mt-4 hover:text-[rgb(1,104,198)]"
                          >
                            Terms
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 lg:w-4/12">
                  <div className="footer_subscribe mt-13 mx-3">
                    <h2 className="footer_title text-xl font-semibold text-slate-400/75">
                      Find Us
                    </h2>
                    <div className="subscribe_form mt-9 relative">
                      <p className="text-slate-400/75 mt-4 ">
                        Email: twitesoft@gmail.com
                      </p>
                      <p className="text-slate-400/75 mt-4 ">
                        Phone: +8801914-682468
                      </p>
                      <p className="text-slate-400/75 mt-4 ">
                        Address: H# 469, R# 07, Avenue# 6, Mirpur-12 DOHS, Dhaka
                        - 1216
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-solid border-white border-opacity-10">
            <div className="container">
              <div className="footer_copyright pt-3 pb-6 sm:flex justify-between">
                <div className="footer_social pt-4 mx-3 text-center">
                  <ul className="social flex justify-center sm:justify-start">
                    <li className="mr-3">
                      <a href="#">
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
                    <li className="mr-3">
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
                    <li className="mr-3">
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer_copyright_content pt-4 text-center">
                  <p className="text-slate-400/75 text-sm font-semibold">
                    Copyright © 2023, TwiteSoft. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="shape absolute left-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
            <Image src={footerShape} alt="footer-logo" />
          </div>
          <div className="shape absolute right-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
            <Image src={footerShape1} alt="footer-logo" />
          </div> */}
        </footer>
      </>
    </div>
  );
}

export default Footer;
