"use client";
import { ReviewItem } from "@/domain";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ReviewItemLoader from "./ReviewItemLoader";

const testimonials = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExploreItems = async () => {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      setReviews(data);
      setLoading(false);
    };
    fetchExploreItems();
  }, []);

  const settings = {
    infinite: true,
    centerMode: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="reviews" className="reviews py-28">
      <div className="w-full lg:w-11/12 2xl:w-10/12 flex flex-col gap-9 mx-auto px-4 pt-28 pb-20">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-2xl font-medium uppercase">Clients Reviews</h2>
          <p className="text-gray-500">What our clients say about us</p>
        </div>
        <div className="reviews-content">
          <Slider {...settings}>
            {!loading
              ? reviews.map((x) => (
                  <div
                    key={x.id}
                    className="m-4 p-6 bg-white shadow-md transition-shadow hover:shadow-lg"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-row gap-3 items-center">
                        <div className="">
                          <img
                            src={x.img}
                            alt="client"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                        <div className="flex flex-col ml-3">
                          <h2 className="text-lg text-gray-600 font-medium capitalize">
                            {x.name}
                          </h2>
                          <h4 className="text-sm text-gray-500">
                            {x.location}
                          </h4>
                        </div>
                      </div>
                      <p className="text-gray-600">{x.comment}</p>
                    </div>
                  </div>
                ))
              : testimonials.map((_, index) => (
                  <ReviewItemLoader key={index} />
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
