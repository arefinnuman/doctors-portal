import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../Assets/images/footer.png";

const Footer = () => {
  return (
    <section style={{ background: `url(${footer})`, backgroundSize: "cover" }}>
      <footer className="footer mt-10 p-10   text-neutral">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">WeekLy Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
          <Link className="link link-hover">Emergency Checkup</Link>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filing</Link>
          <Link className="link link-hover">Teath Whitening</Link>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <p className="text-secondary font-extrabold">
            Mirpur-1, Dhaka, Bangladesh
          </p>
        </div>
      </footer>
      <footer className="footer footer-center mb-5 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by 24hr HomeCare</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
