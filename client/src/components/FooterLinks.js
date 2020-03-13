import React from "react";

function FooterLinks({ href, link }) {
  if (link === "16A Fola Jinadu street, UPS Bus-stop, Gbagada, Lagos.") {
    return (
      <a href={href} target="blank">
        {link}
      </a>
    );
  } else {
    return <a href={href}>{link}</a>;
  }
}

export default FooterLinks;
