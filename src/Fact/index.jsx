import React from 'react'

const Fact = () => {
  return (
    <>
    {/* ======= Facts Section ======= */}
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>HIDUP HANYA SEKALI JADI LAKUKANLAH YANG TERBAIK.</p>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
            <div className="count-box">
              <i className="bi bi-emoji-smile" />
              <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
              <p><strong>ALWAYS HAPPY</strong> karena hati yang gembira adalah obat yang manjur</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={100}>
            <div className="count-box">
              <i className="bi bi-journal-richtext" />
              <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Joki</strong> Menerima Jokian.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={200}>
            <div className="count-box">
              <i className="bi bi-headset" />
              <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
              <p><strong>24/7</strong> Selalu ada kalo tidak berarti lagi ketiduran.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={300}>
            <div className="count-box">
              <i className="bi bi-people" />
              <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Perkerja keras</strong> Selalu berkerja keras karena hidup ini keras</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Facts Section */}
    </>
  )
}

export default Fact