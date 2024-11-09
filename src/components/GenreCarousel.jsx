import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const genres = [
  { name: 'Fantasy', image: 'https://images.app.goo.gl/YaFgac1tbx48vpVe9' },
  { name: 'Horror', image: 'https://images.app.goo.gl/PNFkqMVYA28Sj3QQ7' },
  { name: 'Mystery', image: 'https://images.app.goo.gl/8RXi5jjRg1gXpxKFA' },
  { name: 'Adventure', image: 'https://images.app.goo.gl/sbo4Ar2WsEEwAaGb6' },
  { name: 'Romance', image: 'https://images.app.goo.gl/gRk3ocrzm7ozQeaL7' },
  { name: 'Sci-Fi', image: 'https://images.app.goo.gl/SQVMpLYhniWDkNNF9' }
];

function GenreCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="genre-carousel">
      <h2>Explore Genres</h2>
      <Slider {...settings}>
        {genres.map((genre, index) => (
          <div key={index} className="genre-slide">
            <img src={genre.image} alt={genre.name} />
            <h3>{genre.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GenreCarousel;