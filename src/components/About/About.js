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
                        <img className="card-img-top" src="../../assets/images/Danapic.jpeg" alt="Dana"/>
                        <p className="text-muted mb-0"> 
                                I am a full-stack web developer born and raised in Philadelphia, PA. I enjoy working on my own as well as with others to share ideas in order to grow my knowledge. I am currently reading Fierce Conversations
                                by Susan Scott and the Four Agreements by Don Miguel Ruiz. These books are guiding me to find my truth and to become a leader through conversations. The Penn LPS Coding Bootcamp has helped me develop and strengthen skills
                                to search for a career in the tech industry.
                                <br />
                                My interests include cooking, baking sweet treats, and going to the gym. My priority is to maintain a healthy lifestyle by doing physical activity as well as have a healthy mindset. I enjoy making cookies and would love to start baking
                                cakes and pies, especially for the holiday season. I have many gym goals, including achieving my first unassisted push and pull ups! I also want to challenge myself to continue deadlifting and progressing the other compound lifts.</p>
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