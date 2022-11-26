import Carousel from "react-bootstrap/Carousel";
import pic1 from "../images/carousel/pic1.png";
import pic2 from "../images/carousel/pic2.png";
import pic3 from "../images/carousel/pic3.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./bookCarousel.css";

const BookCarousel = () => {
  return (
    <div className="carousel">
      <div className="container">
        <Carousel fade>
          <Carousel.Item className="carousel__item">
            <img className="carousel__img" src={pic3} alt="First slide" />
            <Carousel.Caption>
              <h3 className="carousel__title">What I Learned from the Trees</h3>
              <p className="carousel__subtitle">L.E. Bowman</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel__item">
            <img className="carousel__img" src={pic2} alt="Second slide" />
            <Carousel.Caption>
              <h3 className="carousel__title">Thief River Falls</h3>
              <p className="carousel__subtitle">Brian Freeman</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel__item">
            <img className="carousel__img" src={pic1} alt="Third slide" />
            <Carousel.Caption>
              <h3 className="carousel__title">If It Bleeds</h3>
              <p className="carousel__subtitle">Stephen King</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
export default BookCarousel;
