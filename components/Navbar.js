import Image from "next/image";
import Link from "next/link";
import websiteLogo from "/public/images/blue-logo.png";

import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "about", current: false },
  { name: "Services", href: "services", current: false },
  { name: "Projects", href: "project", current: false },
  { name: "Team", href: "team", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <nav className="z-20 fixed top-0 left-0 right-0 py-2">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative  flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="mobile-menu place-content-end inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                      {open ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          color="black"
                          fill="currentColor"
                          class="bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          color="black"
                          fill="currentColor"
                          class="bi bi-list"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                          />
                        </svg>
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex lg:flex-1  items-center justify-center sm:items-stretch  sm:justify-between">
                    <div className="flex flex-shrink-0 items-center">
                      <Link href="/">
                        <Image
                          src={websiteLogo}
                          alt="logo"
                          width={150}
                          height={140}
                        />
                      </Link>
                    </div>

                    <div className="hidden sm:block">
                      <div className="flex space-x-4 justify-items-end items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                        <ul
                          id="nav"
                          class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
                        >
                          {navigation.map((item) => (
                            <li class="nav-item ml-5 lg:ml-11" key={item.name}>
                              <a class="page-scroll" href={item.href}>
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? "" : "",
                        "block px-3 py-2 text-sm"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </>
  );
}
