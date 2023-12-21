import Image from "next/image";
import React from "react";
import logo from "@/public/clubz-high-resolution-logo-black.svg";
import { FooterIcons, Logo } from "../icons";
import { RiShareForwardLine } from "react-icons/ri";
import Link from "next/link";

const Footer = () => (
  <div className="flex w-full items-end bg-footer-bg bg-cover">
    <footer className="body-font w-full text-white">
      <div className="lg:flex-no-wrap container mx-auto flex flex-col px-5 py-24 lg:flex-row lg:items-center">
        <div className="mx-auto w-96 flex-shrink-0">
          <div className="mx-auto text-center md:mx-0 md:text-left lg:w-96">
            <a className="title-font flex items-center justify-center font-medium lg:justify-start">
              <p>About Us</p>
            </a>
            <p className="mt-2 text-sm">
              Our team committed to delivering the best in industry. We are more
              then happy to deliver you the best! Reach out to partner to us.
            </p>
          </div>
        </div>
        <div className="-mb-10 mt-20 flex flex-grow flex-wrap text-center lg:mt-0 lg:pl-20 lg:text-right">
          <div className="w-full justify-self-end px-4 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-3 text-sm font-medium uppercase tracking-widest">
              Quick Links
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="cursor-pointer">Blog</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer">Services</a>
              </li>
              {/* <li className="mt-3">
                <a className="cursor-pointer">About us</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer">Contact us</a>
              </li> */}
            </nav>
          </div>
          {/* <div className="w-full justify-self-end px-4 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-3 text-sm font-medium uppercase tracking-widest">
              Community
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="cursor-pointer">Announcements</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer">Answer center</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer">Discussion Board</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer">Feedback</a>
              </li>
            </nav>
          </div> */}
          <div className="w-full justify-self-end px-4 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-3 text-sm font-medium uppercase tracking-widest">
              Legal
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="cursor-pointer">Terms &amp; Conditions</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer">Policies</a>
              </li>
            </nav>
          </div>
          <div className="w-full justify-self-end px-4 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-3 text-sm font-medium uppercase tracking-widest">
              Contact
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="cursor-pointer">Address</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer">abc@gmail.com</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer">+123-456-7890</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 220">
            <path
              fill="#000000"
              fillOpacity="1"
              d="M0,224L120,192C240,160,480,96,720,69.3C960,43,1200,53,1320,58.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="w-full lg:absolute lg:bottom-0">
          <div className="palce-items-end z-50 grid grid-cols-1 justify-items-end gap-10 px-5 py-12 lg:grid-cols-4">
            <div className=""></div>
            <div className="space-y-4 place-self-center font-bold lg:col-span-2">
              <p className="text-center capitalize">Clubs</p>
              <p className="flex space-x-1 xl:text-center">
                <span>Copyright</span>
                <span>&copy; {new Date().getFullYear()}</span>
                <span>inc</span>
              </p>
            </div>
            <div className=" space-y-4 place-self-center">
              <div className="flex items-start space-x-2 text-lg font-semibold">
                <RiShareForwardLine className={`h-8 w-8`} />
                <div>Follow Us</div>
              </div>
              <div className="flex items-center space-x-3">
                <div>
                  <Link href={``}>
                    <FooterIcons.Google className={`h-8 w-8`} />
                  </Link>
                </div>
                <div>
                  <Link href={``}>
                    <FooterIcons.Facebook className={`h-8 w-8`} />
                  </Link>
                </div>
                <div>
                  <Link href={``}>
                    <FooterIcons.Twitter className={`h-8 w-8`} />
                  </Link>
                </div>
                <div>
                  <Link href={``}>
                    <FooterIcons.Instagram className={`h-8 w-8`} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
