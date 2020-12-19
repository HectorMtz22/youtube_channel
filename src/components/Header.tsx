import React from "react";
import { isMobile } from "react-device-detect";

function Header() {
  let banner = "";
  isMobile ? (banner = "banner-mobile") : (banner = "banner-desktop");
  return (
    <header>
      <div className="bannerImg">
        <img src="/img/header/header1.jpg" alt="" />
      </div>
      <nav>
        <h1>Canal de YT</h1>
      </nav>
      <div className={banner}>
        <h3>HMcollection</h3>
        <h4>Soundtracks</h4>
      </div>
    </header>
  );
}

export default Header;
