import React from "react";

import Button from "elements/Button";
import IconText from "parts/iconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              A polished travel-booking showcase with stable mock data and a
              complete end-to-end demo flow.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Explore</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" isExternal href="#most-picked">
                  Featured Stays
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" isExternal href="#collections">
                  Browse Collections
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" isExternal href="#reviews">
                  Guest Reviews
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Project Notes</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/">
                  Landing Page
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/checkout">
                  Checkout Flow
                </Button>
              </li>
              <li className="list-group-item">
                <span>Mock API, local assets, portfolio-ready presentation</span>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:hello@staycation-portfolio.demo"
                >
                  hello@staycation-portfolio.demo
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6281234567890">
                  +62 812 3456 7890
                </Button>
              </li>
              <li className="list-group-item">
                <span>Remote-first demo based in Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2026 | Staycation Portfolio Demo
          </div>
        </div>
      </div>
    </footer>
  );
}
