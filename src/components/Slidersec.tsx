import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text, Button, Heading, Container } from "@chakra-ui/react";


function Slidersec() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1

        }
      }
    ]
  };
  return (
    <>
     
        <div className="slider-container">
          <Slider {...settings} className="slider_bx">
            <div>
              <Box className="">
                <Box className='faq_grid_box'>
                  <img src="img/faq_grid_ic_01.svg" alt="" />
                  <Heading as={'h3'}>Is online betting activity with Goldsbet legal in India?</Heading>
                  <Text> Yes, we comply with Indian laws and hold an international gaming license. We are licensed and regulated by the Government of Curacao.</Text>
                </Box>
                <Box className='faq_grid_box'>
                  <img src="img/faq_grid_ic_04.svg" alt="" />
                  <Heading as={'h3'}>How can I deposit and withdraw money?</Heading>
                  <Text> We support multiple payment methods, and users can make deposits and withdrawals through the account dashboard.</Text>
                </Box>
              </Box>
            </div>
            <div>
              <Box className='faq_grid_box'>
                <img src="img/faq_grid_ic_02.svg" alt="" />
                <Heading as={'h3'}>Is it safe to bet at goldsbet?</Heading>
                <Text> Yes, we use state-of-the-art security technology to protect all users' personal and financial information, ensuring your betting activity is both safe and private.</Text>
              </Box>
              <Box className='faq_grid_box'>
                <img src="img/faq_grid_ic_05.svg" alt="" />
                <Heading as={'h3'}>How can I get help if I have a problem placing a bet?</Heading>
                <Text> Our customer service team offers round-the-clock support through live chat, email, and phone.</Text>
              </Box>
            </div>
            <div>
              <Box className='faq_grid_box'>
                <img src="img/faq_grid_ic_03.svg" alt="" />
                <Heading as={'h3'}>How do I register and start betting with Goldsbet?</Heading>
                <Text> Click the "Register Now" button, fill in the information and complete the verification, and you can start betting, which can be completed within a minute.</Text>
              </Box>
              <Box className='faq_grid_box'>
                  <img src="img/faq_grid_ic_06.svg" alt="" />
                  <Heading as={'h3'}>What types of bets does Goldsbet offer?</Heading>
                  <Text> We offer a range of thrilling and entertaining games, including live casino, chess, slot games, fishing, lotteries and sports betting.</Text>
                </Box>
            </div>
          </Slider>
        </div>
    </>
  );
}

export default Slidersec;
