import React from 'react'

const About = () => {
  return (
<>
{/* ======= About Section ======= */}
<section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>My Name is Timothy Febryanto Manoppo</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="src/assets/img/timmy.jpeg" className="img-fluid" alt />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="fst-italic">
              ingin menjadi manusia yang berguna dan baik hati.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>Februari 21, 2004</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>mrkrabs@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+62895-3750-12000</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Tondano, Minahasa</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>19</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>S3</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
            “Never regrets being a good person, to the wrong people. Your behavior says everything about you, and their behavior says enough about them.”
          </p>
         
          </div>
        </div>
      </div>
    </section>{/* End About Section */}
</>
  )
}

export default About