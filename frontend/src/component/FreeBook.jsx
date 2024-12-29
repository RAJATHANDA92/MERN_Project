import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios'
import { useEffect, useState } from 'react'

function FreeBook() {
    const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/books");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
            console.log(error);
      }
    };
    getBook();
  }, []);
    const filterData = book.filter((data) => data.Category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    console.log(filterData);
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>
                        Free offered Books
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quidem qui sunt porro illo,
                        quibusdam molestiae facilis iusto odit eum exercitationem. Cum,
                        reiciendis sunt unde minima tempore placeat repellendus voluptatem?
                    </p>
                </div>

                <div>
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <Cards item={item} key={item.id}/>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBook