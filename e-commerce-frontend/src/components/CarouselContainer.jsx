import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';

function CarouselContainer() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <CarouselImage text="https://m.economictimes.com/thumb/height-450,width-600,imgsize-118811,msid-123748274/urban-households-choosing-ecommerce-for-festive-buying-may-rise-115-in-2025-report.jpg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselImage text="https://cdn.dokan.co/2022/10/17175508/eCommerce-Website-Pages-List_-What-Customers-Want-in-an-eCommerce-Site-1024x559.png" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="https://media.licdn.com/dms/image/v2/D4D12AQG6k2C-je9Xug/article-cover_image-shrink_720_1280/B4DZUU78q5HYAM-/0/1739813016823?e=2147483647&v=beta&t=zMhKXF7kZaK_Ip8X59ka14sEEKWPnA1XR1PrkvD0wng" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;