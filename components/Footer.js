import Image from "next/image";
import Link from "next/link";

import footerLogo from "/public/images/logo.png";
import footerShape from "/public/images/footer-shape-left.png";
import footerShape1 from "/public/images/footer-shape-right.png";
function Footer() {
  return (
    <div>
      <>
        <footer id="footer" className="footer_area bg-black relative z-10">
          <div className="shape absolute left-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
            <Image src={footerShape} alt="footer-logo" />
          </div>
          <div className="shape absolute right-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
            <Image src={footerShape1} alt="footer-logo" />
          </div>
          <div className="container">
            <div className="footer_widget pt-18 pb-120">
              <div className="row justify-center">
                <div className="w-full md:w-1/2 lg:w-3/12">
                  <div className="footer_about mt-13 mx-3">
                    <div className="footer_logo">
                      <Link href="#">
                        <Image src={footerLogo} alt="footer-logo" width={150} height={140} />
                      </Link>
                    </div>
                    <div className="footer_content mt-8">
                      <p className="text-white">
                        Our dedicated IT teams will give you the power of next generation software
                        development solutions to help your business stand out.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-5/12">
                  <div className="footer_link_wrapper flex flex-wrap mx-3">
                    <div className="footer_link w-1/2 md:pl-13 mt-13">
                      <h2 className="footer_title text-xl font-semibold text-white">Quick Links</h2>
                      <ul className="link pt-4">
                        <li>
                          <a href="#" className="text-white mt-4 hover:text-theme-color">
                            Company
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-white mt-4 hover:text-theme-color">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-white mt-4 hover:text-theme-color">
                            About
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer_link w-1/2 md:pl-13 mt-13">
                      <h2 className="footer_title text-xl font-semibold text-white">Resources</h2>
                      <ul className="link pt-4">
                        <li>
                          <a href="#" className="text-white mt-4 hover:text-theme-color">
                            Support
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-white mt-4 hover:text-theme-color">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-white mt-4 hover:text-theme-color">
                            Terms
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 lg:w-4/12">
                  <div className="footer_subscribe mt-13 mx-3">
                    <h2 className="footer_title text-xl font-semibold text-white">Our Address</h2>
                    <div className="subscribe_form mt-9 relative">
                      <p className="text-white mt-4 hover:text-theme-color">
                        Email: twitesoft@gmail.com
                      </p>
                      <p className="text-white mt-4 hover:text-theme-color">
                        Phone: +8801914-682468
                      </p>
                      <p className="text-white mt-4 hover:text-theme-color">
                        Address: H# 469, R# 07, Avenue# 6, Mirpur-12 DOHS, Dhaka - 1216
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_copyright pt-3 pb-6 border-t-2 border-solid border-white border-opacity-10 sm:flex justify-between">
              <div className="footer_social pt-4 mx-3 text-center">
                <ul className="social flex justify-center sm:justify-start">
                  <li className="mr-3">
                    <a href="https://facebook.com/uideckHQ">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li className="mr-3">
                    <a href="https://twitter.com/uideckHQ">
                      <i className="lni lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li className="mr-3">
                    <a href="https://instagram.com/uideckHQ">
                      <i className="lni lni-instagram-original"></i>
                    </a>
                  </li>
                  <li className="mr-3">
                    <a href="#">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer_copyright_content pt-4 text-center">
                <p className="text-white text-sm font-semibold">
                  Copyright © 2023, TwiteSoft. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Footer;
