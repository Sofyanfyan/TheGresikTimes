import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
   return (
      <Carousel>
      <Carousel.Item>
         <img 
            height={"700px"}
            style={{objectFit:"cover"}}
            className="d-block w-100"
            src="https://newsguild.org/wp-content/uploads/2018/08/paydisparity.jpg"
            alt="First slide"
         />
      </Carousel.Item>
      <Carousel.Item>
         <img
            height={"700px"}
            style={{objectFit:"cover"}}
            className="d-block w-100"
            src="https://scx2.b-cdn.net/gfx/news/hires/2016/enhancingthe.jpg"
            alt="Second slide"
         />
      </Carousel.Item>
      <Carousel.Item>
         <img
            height={"700px"}
            style={{objectFit:"cover"}}
            className="d-block w-100"
            src="https://static01.nyt.com/images/2019/07/11/science/00MOONRACE/00MOONRACE-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale"
            alt="Third slide"
         />
      </Carousel.Item>
      </Carousel>
   );
}

export default UncontrolledExample;