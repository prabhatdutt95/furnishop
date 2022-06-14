import "./styles/general.css";
import "./styles/navbar.css";
import { AiFillCheckCircle } from "react-icons/ai";

import React, { useEffect, useState } from "react";

function App() {
  const [headerClassName, setHeaderClassName] = useState("");

  const handleScroll = (headerClassName) => {
    if (headerClassName !== "menuscroll" && window.pageYOffset >= 100) {
      setHeaderClassName("menuscroll");
    } else if (headerClassName === "menuscroll" && window.pageYOffset < 100) {
      setHeaderClassName("");
    }
  };

  useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]);

  return (
    <div id="page-wrapper">
      <header id="header" className={headerClassName}>
        <div className="logo">
          <h1 id="header-img">FurniShop</h1>
        </div>
        <nav id="nav-bar">
          <ul>
            <li>
              <a
                className="nav-link"
                href="#home"
                onClick={(e) => {
                  let hero = document.getElementById("home");
                  e.preventDefault();
                  hero && hero.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#about"
                onClick={(e) => {
                  let hero = document.getElementById("about");
                  e.preventDefault();
                  hero && hero.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#features"
                onClick={(e) => {
                  let hero = document.getElementById("features");
                  e.preventDefault();
                  hero && hero.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#contact"
                onClick={(e) => {
                  let hero = document.getElementById("contact");
                  e.preventDefault();
                  hero && hero.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Home section start */}
      <section id="home" className="header-bg-img">
        <h1 className="text-size-xl mb-20">
          Creative Home Simpify your Furniture
        </h1>
        <p className="mb-20">
          Do i have consent to record this meeting gain locaion,
          root-and-branch, review, nor game plan who’s the goto
        </p>
        <button className="glass-button">Shop Now</button>
      </section>
      {/* Home section ends */}

      {/* About section start */}
      <section id="about" className="wrapper">
        <div className="screen">
          <img
            src={require("./assets/images/about.jpg")}
            alt="Grey Sofa with a brown coffee table"
          />
        </div>
        <div className="screen" style={{ maxWidth: "50%", padding: "25px" }}>
          <h2
            style={{
              fontSize: "35px",
              lineHeight: "40px",
            }}
            className="mb-20"
          >
            We Create your home more aestetic
          </h2>
          <p className="mb-20">
            Furnitre power is a software as services for multiperpose business
            management system,
          </p>
          <div className="mb-20">
            <h4>
              <strong>Valuation Services</strong>
            </h4>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AiFillCheckCircle
                style={{ height: "15px", marginRight: "5px" }}
              />
              Sometimes features require a short description. This can be
              detailed description
            </span>
          </div>
          <div>
            <h4>
              <strong>Development of Furniture Models</strong>
            </h4>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AiFillCheckCircle
                style={{ height: "15px", marginRight: "5px" }}
              />
              Sometimes features require a short description. This can be
              detailed description
            </span>
          </div>
        </div>
      </section>
      {/* About section ends */}

      {/* About section start */}
      <section id="features" className="wrapper">
        <div className="screen">
          <img
            src={require("./assets/images/about.jpg")}
            alt="Grey Sofa with a brown coffee table"
          />
        </div>
        <div className="screen" style={{ maxWidth: "50%", padding: "25px" }}>
          <h2
            style={{
              fontSize: "35px",
              lineHeight: "40px",
            }}
            className="mb-20"
          >
            We Create your home more aestetic
          </h2>
          <p className="mb-20">
            Furnitre power is a software as services for multiperpose business
            management system,
          </p>
          <div className="mb-20">
            <h4>
              <strong>Valuation Services</strong>
            </h4>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AiFillCheckCircle
                style={{ height: "15px", marginRight: "5px" }}
              />
              Sometimes features require a short description. This can be
              detailed description
            </span>
          </div>
          <div>
            <h4>
              <strong>Development of Furniture Models</strong>
            </h4>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AiFillCheckCircle
                style={{ height: "15px", marginRight: "5px" }}
              />
              Sometimes features require a short description. This can be
              detailed description
            </span>
          </div>
        </div>
      </section>
      {/* About section ends */}

      {/* About section start */}
      <section id="contact" className="wrapper">
        <div className="screen">
          <img
            src={require("./assets/images/about.jpg")}
            alt="Grey Sofa with a brown coffee table"
          />
        </div>
        <div className="screen" style={{ maxWidth: "50%", padding: "25px" }}>
          <h2
            style={{
              fontSize: "35px",
              lineHeight: "40px",
            }}
            className="mb-20"
          >
            We Create your home more aestetic
          </h2>
          <p className="mb-20">
            Furnitre power is a software as services for multiperpose business
            management system,
          </p>
          <div className="mb-20">
            <h4>
              <strong>Valuation Services</strong>
            </h4>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AiFillCheckCircle
                style={{ height: "15px", marginRight: "5px" }}
              />
              Sometimes features require a short description. This can be
              detailed description
            </span>
          </div>
          <div>
            <h4>
              <strong>Development of Furniture Models</strong>
            </h4>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AiFillCheckCircle
                style={{ height: "15px", marginRight: "5px" }}
              />
              Sometimes features require a short description. This can be
              detailed description
            </span>
          </div>
        </div>
      </section>
      {/* About section ends */}
    </div>
  );
}

export default App;
