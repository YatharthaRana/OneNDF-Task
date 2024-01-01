import Carousel from 'react-bootstrap/Carousel';
import S1 from "../assets/images/S1.jpg"
import S2 from "../assets/images/S2.jpg"
import S3 from "../assets/images/S3.jpg"
import "../styles/Caraousel.css"

function Caraousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={S1}
          alt="First slide"
        />
        <Carousel.Caption className='custom-caption' >
          <h5 className='quotes'>"A loan is a tool, not a solution – use it wisely."</h5>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={S2}
          alt="Second slide"
        />
        <Carousel.Caption className='custom-caption' >
          <h5 className='quotes'>"Interest never sleeps, nor does the need for financial planning."</h5>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={S3}
          alt="Third slide"
        />
        <Carousel.Caption className='custom-caption'>
          <h5 className='quotes'>"Banks: where money matters and trust is the currency."</h5>
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caraousel;