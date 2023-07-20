import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer place-items-center p-10 bg-base-200 text-base-content bg-footerBg bg-cover bg-center bg-no-repeat">
      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover">Emergency Checkup</Link>
        <Link className="link link-hover">Monthly Checkup</Link>
        <Link className="link link-hover">Weekly Checkup</Link>
        <Link className="link link-hover">Deep Checkup</Link>
      </div>
      <div>
        <span className="footer-title">ORAL HEALTH</span>
        <Link className="link link-hover">Fluoride Treatment</Link>
        <Link className="link link-hover">Cavity Filling</Link>
        <Link className="link link-hover">Teath Whitening</Link>
      </div>
      <div>
        <span className="footer-title">OUR ADDRESS</span>
        <Link className="link link-hover">New York - 10101Link Hudson</Link>
      </div>
      <div>
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
