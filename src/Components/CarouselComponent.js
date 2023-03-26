import Carousel from "react-bootstrap/Carousel";
import SectionVijesti from "./SectionVijesti";

function CarouselComponent() {
    return (
      <div>
      <Carousel>
        <Carousel.Item >
          <img
            className="d-block w-100 text-white active"
            src="https://www.srednja.hr/app/uploads/2022/01/IMG-20210713-WA0015-1.jpg"
            alt="Jelkovec-zrak"
          />
          <Carousel.Caption>
            <h3>Fotkano dronom</h3>
            <p>Jelkovec zrak</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src={require('C:\\Users\\misla\\web-jelk\\src\\assets\\jelkovec-zrak2.jpg')}
            src="https://www.srednja.hr/app/uploads/2022/01/IMG-20210713-WA0015-1.jpg"
            alt="Jelkovec-zrak2"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src={require('C:\\Users\\misla\\web-jelk\\src\\assets\\jelkoveczrak.jpg')}
            src="https://www.srednja.hr/app/uploads/2022/01/IMG-20210713-WA0015-1.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <SectionVijesti />
      </div>
    );
  }
  
  export default CarouselComponent;