import React from "react";
import "./styles.css"

function Nav() {
    return (
      <section className="page-section bg-primary-portfolio" id="portfolio">
            <div className="row no-gutters">

                <div className="col-lg-4 col-sm-6">
                 <div className="card">
                    <div className="card-block">
                        <img className="card-img-top" src="./assets/images/project1.pnc" alt="IngredienceApp"/>
                        <h4 className="card-title">Ingredience Application</h4>
                        <p className="card-text p-y-1">Application that generates recipes from the Spoonacular API using ingrediences that the user inputs, including dietary restrictions.</p>
                        <div className="twoButtons">
                          <a href="https://danachen99.github.io/ingredience-app/" className="btn btn-outline-primary btn-sm"
                            id="viewPage" role="button">View Page</a>
                          <a href="https://github.com/danachen99/ingredience-app" className="btn btn-primary btn-sm" id="githubRepo"
                            role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">HTML, CSS, Bootstrap, Javascript, jQuery, Spoonacular API</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                 <div className="card">
                    <div className="card-block">
                        <img className="card-img-top" src="./assets/images/project1.pnc" alt="IngredienceApp"/>
                        <h4 className="card-title">Ingredience Application</h4>
                        <p className="card-text p-y-1">Application that generates recipes from the Spoonacular API using ingrediences that the user inputs, including dietary restrictions.</p>
                        <div className="twoButtons">
                          <a href="https://philly-auto-emporium.herokuapp.com/" className="btn btn-outline-primary btn-sm"
                            id="viewPage" role="button">View Page</a>
                          <a href="https://github.com/danachen99/philly-car-emporium" className="btn btn-primary btn-sm" id="githubRepo"
                            role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">HTML, CSS, Foundation, Javascript, jQuery</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project2.png" alt="Weather Dashboard"/>
                        <h4 className="card-title">CLI Employee Directory</h4>
                        <p className="card-text p-y-1">Command line application that will allow the head of a software engineering team to add/remove users as well as view them </p>
                        <div className="twoButtons">
                          <a href="."
                            className="btn btn-outline-primary btn-sm" id="viewPage" role="button">View Demo</a>
                          <a href="https://github.com/danachen99/" className="btn btn-primary btn-sm"
                            id="githubRepo" role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">Node.js, Javascript</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="" alt="Weather Dashboard"/>
                        <h4 className="card-title">Password Generator</h4>
                        <p className="card-text p-y-1">Given the length that the user selects, the application will generate a random password.</p>
                        <div className="twoButtons">
                          <a href="https://danachen99.github.io/password-generator/" className="btn btn-outline-primary btn-sm"
                            id="viewPage" role="button">View Page</a>
                          <a href="https://github.com/danachen99/password-generator" className="btn btn-primary btn-sm" id="githubRepo"
                            role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">HTML, Bootstrap/CSS, Javascript, jQuery</div>
                      </div>
                    </div>
                  </div>
       
                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project5.png" alt="Weather Dashboard"/>
                        <h4 className="card-title">Burger Time</h4>
                        <p className="card-text p-y-1">A burger logger that lets users input the names of burgers they'd like to eat and also devour them.</p>
                        <div className="twoButtons">
                          <a href="." className="btn btn-outline-primary btn-sm" id="viewPage"
                            role="button">View Page</a>
                          <a href="https://github.com/danachen99/burger-logger" className="btn btn-primary btn-sm"
                            id="githubRepo" role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">Node.js, Express, Handlebars, Javascript, mySQL</div>
                      </div>
                    </div>
                  </div>

         
                   <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project8.png" alt="Weather Dashboard"/>
                        <h4 className="card-title">Note Taker</h4>
                        <p className="card-text p-y-1">An application that can be used to write, save, and delete notes from the user. This app uses an express backend and saves and retrieves data from a JSON file.</p>
                        <div className="twoButtons">
                          <a href="." className="btn btn-outline-primary btn-sm" id="viewPage"
                            role="button">View Page</a>
                          <a href="https://github.com/danachen99/note-taker" className="btn btn-primary btn-sm"
                            id="githubRepo" role="button"><i className="fab fa-github githubIcon"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">Node.js, JavaScript, Express</div>
                      </div>
                    </div>
                  </div>
        
              
            </div>
          </section>
        );
}

export default Nav;