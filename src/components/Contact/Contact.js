import React from "react";
// import "./styles.css"

function Contact() {
    return (
        <section className="page-section-contact" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">Contact</h2>
                        <hr className="divider my-4" />
                    </div>
                </div>
                <div className="row">           
            <div className="col-lg-4 ml-auto text-center mb-3 mb-lg-0">
                {/* <img src="./assets/img/portfolio/thumbnails/icons-08.png" alt="icons" className="responsive" href="https://github.com/danachen99"/><br />  */}
                <a href="https://github.com/danachen99">Github</a>
            </div>
            <div className="col-lg-4 mr-auto text-center">
                {/* <img src="./assets/img/portfolio/thumbnails/icons-04.png" alt="icons" className="responsive" /> */}
                <a className="d-block" href="mailto:chendana95@gmail.com">chendana95@gmail.com</a>
            </div>
            <div className="col-lg-4 mr-auto text-center">
                {/* <img src="./assets/img/portfolio/thumbnails/icons-07.png" href="https://www.linkedin.com/in/chen-dana" alt="icons" className="responsive"/><br />  */}
                <a href="https://www.linkedin.com/in/chen-dana">LinkedIn</a>
            </div>
        </div>
    </div>
</section>

);
}

export default Contact;