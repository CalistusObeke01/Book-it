import React from "react";

function HeroContent() {
  return (
    <>
      <h1 className="hero-header">
        Online office space management,
        <br className="hero-header-first-break" />
        booking and scheduling
        <br className="hero-header-first-break" />
        for shared spaces.
      </h1>
      <p className="hero-text">
        BOOK!T is the best way to manage your organization's
        <br className="hero-text-first-break" />
        meeting rooms, conference rooms and <br className="hero-text-second-break" />
        other shared spaces without hiccups...
      </p>
      <a href="/#sign-up" className="createAccount">
        CREATE AN ACCOUNT
      </a>
    </>
  );
}

export default HeroContent;
