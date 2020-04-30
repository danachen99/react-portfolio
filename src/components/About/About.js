import React from "react";
import "./styles.css"

function About() {
    return (
        <section className="page-section-about bg-primary" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-center mt-0">About Me</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <p className="text-muted mb-0">Full stack web developer. Penn LPS Coding Boot Camp</p>
                            <div className="aboutMeButtons">
                                <a href="./assets" className="btn btn-outline-primary aboutMeButtons" id="viewResume" role="button">Resume</a>
                                <a href="https://github.com/danachen99" className="btn btn-primary aboutMeButtons" id="githubRepo" role="button"><i className="fab fa-github"></i> Github </a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default About;