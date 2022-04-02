import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Welcome = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>WELCOME TO THE ORCHID RESTAURANT</h3>
      <p>FEEL THE TASTE AND LUXORIUS ATMOSPHIRE</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.efjakarta.com/assets/uploaded/Indonesian_Food_1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>INDONESIAN FOOD | CHINEESE FOOD | WESTERN FOOD</h3>
      <p>FRESH MADE BY PROFFESIONAL CHEF</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://asset.kompas.com/crops/pvHZPuSw1hJ6b290QZjCMEQXQG4=/0x5:1750x1171/750x500/data/photo/2017/02/28/3675196636.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/15093247/Ketahui-Fakta-Es-Teh-Manis.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>DRINKS</h3>
      <p>HOT DRINKS | COLD DRINKS</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default Welcome;
