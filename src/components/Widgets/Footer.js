import React from "react";
import "../../Styles/Footer.css";
import { BsGlobe2 } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <div className="foot-title">
        <div className="foot-title-txt">
          <span>
            Top companies choose
            <a className="udemy-buisness">Udemy Business</a> to build in-demand
            career skills.
          </span>
        </div>
        <div className="foot-title-imgs">
          <img
            class="foot-img"
            alt="Nasdaq"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
          ></img>
          <img
            class="foot-img"
            alt="Volkswagen"
            height="44"
            width="44"
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
          ></img>
          <img
            class="foot-img"
            alt="Box"
            height="44"
            width="67"
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
          ></img>
          <img
            class="foot-img"
            alt="NetApp"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
          ></img>
          <img
            class="foot-img last"
            alt="Eventbrite"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
          ></img>
        </div>
      </div>
      <div className="others">
        <div className="categories-btn">
          <div className="foot-categories">
            <a class="cat-a">Udemy Business</a>
            <a class="cat-a"> Careers</a>
            <a class="cat-a">Terms</a>
            <a class="cat-a">Teach on Udemy</a>
            <a class="cat-a">Blog</a>
            <a class="cat-a">Privacy policy</a>
            <a class="cat-a">Get the app</a>
            <a class="cat-a">Help and Support</a>
            <a class="cat-a">Cookie settings</a>
            <a class="cat-a">About us</a>
            <a class="cat-a">Affiliate</a>
            <a class="cat-a">Sitemap</a>
            <a class="cat-a">Contact us</a>
            <a class="cat-a">Investors</a>
            <a class="cat-a">Accessibility statement</a>
          </div>
          <div className="foot-btn">
            <button>
              <BsGlobe2 className="pl-5" color="white" size={17} />
              <span className="grb">English</span>
            </button>
          </div>
        </div>
        <div className="img-copyrights">
          <div className="foot-img-cont">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
              alt="Udemy"
              width={91.0667}
              height={34.2}
            ></img>
          </div>
          <div className="copyright">© 2022 Udemy, Inc.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;