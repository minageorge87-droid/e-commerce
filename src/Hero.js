import React from 'react';

function Hero() {
  return (
    <section className="hero-section text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Column */}
          <div className="col-md-6">
            <h1 className="hero-title">مرحبًا بك في متجرنا</h1>
            <p className="hero-subtitle">تسوّق أفضل المنتجات بأسعار مذهلة</p>
            <button className="btn custom-btn">ابدأ الآن</button>
          </div>

          {/* Image/Slider Column */}
          <div className="col-md-6">
            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://via.placeholder.com/500x300" className="d-block w-100" alt="صورة 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/500x300/ff7f7f" className="d-block w-100" alt="صورة 2" />
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/500x300/87ceeb" className="d-block w-100" alt="صورة 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;