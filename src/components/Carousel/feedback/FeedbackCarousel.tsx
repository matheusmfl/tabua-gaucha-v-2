'use client'

import Carousel, { ButtonGroupProps, DotProps } from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import { FeedbackCard } from "./Card";


interface CustomArrowProps extends ButtonGroupProps {
  onClick?: () => void;
  totalItems: number;
}

interface CustomDotGroup extends DotProps {
  totalItems: number;
}


export const CustomDotGroup: React.FC<CustomDotGroup> = ({ onClick, carouselState, active }) => {
  if (!carouselState || !onClick) {

    return null;
  }


  const { currentSlide } = carouselState;


  return (
    <button onClick={() => onClick()} className={` ${active ? 'w-10 bg-neutral-500' : 'w-2 bg-neutral-400'} transition-width duration-300 rounded-full opacity-80 ml-2 h-2`} />
  )
}




const CustomRightArrow: React.FC<CustomArrowProps> = ({ onClick, totalItems, ...rest }) => {
  const {
    carouselState
  } = rest;

  if (!carouselState) {

    return null;
  }
  const { currentSlide, deviceType } = carouselState;

  const itemsVisible = deviceType === "desktop" ? 3 : deviceType === "tablet" ? 2 : 1;


  const isLastSlide = currentSlide >= totalItems - itemsVisible;

  if (isLastSlide) {
    return null;
  }

  return (
    <button onClick={onClick} className="h-10 w-10 bg-neutral-100 rounded-[4px] absolute -translate-y-5 right-0 z-20 flex items-center justify-center">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0306 12.9746L9.53062 20.4746C9.46093 20.5443 9.37821 20.5996 9.28716 20.6373C9.19612 20.675 9.09854 20.6944 8.99999 20.6944C8.90144 20.6944 8.80386 20.675 8.71282 20.6373C8.62177 20.5996 8.53905 20.5443 8.46936 20.4746C8.39968 20.405 8.34441 20.3222 8.30669 20.2312C8.26898 20.1401 8.24957 20.0426 8.24957 19.944C8.24957 19.8455 8.26898 19.7479 8.30669 19.6568C8.34441 19.5658 8.39968 19.4831 8.46936 19.4134L15.4397 12.444L8.46936 5.47465C8.32863 5.33391 8.24957 5.14304 8.24957 4.94402C8.24957 4.745 8.32863 4.55413 8.46936 4.4134C8.61009 4.27267 8.80097 4.1936 8.99999 4.1936C9.19901 4.1936 9.38988 4.27267 9.53062 4.4134L17.0306 11.9134C17.1003 11.983 17.1557 12.0658 17.1934 12.1568C17.2312 12.2479 17.2506 12.3455 17.2506 12.444C17.2506 12.5426 17.2312 12.6402 17.1934 12.7312C17.1557 12.8223 17.1003 12.905 17.0306 12.9746Z" fill="#57534E" />
      </svg>
    </button>
  );
};

const CustomLeftArrow: React.FC<CustomArrowProps> = ({ onClick, totalItems, ...rest }) => {
  const {
    carouselState
  } = rest;

  if (!carouselState) {

    return null;
  }
  const { currentSlide, deviceType } = carouselState;
  const isFirstSlide = currentSlide === 0;

  if (isFirstSlide) {
    return null;
  }

  return (
    <button onClick={onClick} className="h-10 w-10 bg-neutral-100 shadow-md rounded-[4px] absolute -translate-y-5 left-0 z-20 flex items-center justify-center">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.96932 12.9746L14.4693 20.4746C14.539 20.5443 14.6217 20.5996 14.7128 20.6373C14.8038 20.675 14.9014 20.6944 14.9999 20.6944C15.0985 20.6944 15.1961 20.675 15.2871 20.6373C15.3782 20.5996 15.4609 20.5443 15.5306 20.4746C15.6003 20.405 15.6555 20.3222 15.6932 20.2312C15.731 20.1401 15.7504 20.0426 15.7504 19.944C15.7504 19.8455 15.731 19.7479 15.6932 19.6568C15.6555 19.5658 15.6003 19.4831 15.5306 19.4134L8.56026 12.444L15.5306 5.47465C15.6713 5.33391 15.7504 5.14304 15.7504 4.94402C15.7504 4.745 15.6713 4.55413 15.5306 4.4134C15.3898 4.27267 15.199 4.1936 14.9999 4.1936C14.8009 4.1936 14.6101 4.27267 14.4693 4.4134L6.96932 11.9134C6.89959 11.983 6.84427 12.0658 6.80653 12.1568C6.76879 12.2479 6.74936 12.3455 6.74936 12.444C6.74936 12.5426 6.76879 12.6402 6.80653 12.7312C6.84427 12.8223 6.89959 12.905 6.96932 12.9746Z" fill="#57534E" />
      </svg>

    </button>
  );
};

export function FeedbackCarousel() {
  const totalItems = 6
  return (
    <div className="pb-9">

      <Carousel
        additionalTransfrom={10}
        customDot={<CustomDotGroup totalItems={totalItems} />}
        arrows
        customRightArrow={<CustomRightArrow totalItems={totalItems} />}
        customLeftArrow={<CustomLeftArrow totalItems={totalItems} />}


        autoPlaySpeed={3000}
        partialVisible={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={true}
        renderDotsOutside={true}
        responsive={{
          desktop: {
            breakpoint: {
              max: 1440,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 30
          },

          tv: {
            breakpoint: {
              max: 3000,
              min: 1440
            },
            items: 4,
            partialVisibilityGutter: 30
          },


          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >

        <FeedbackCard author="Juliana Severo" message="Sempre tive medo de fazer procedimento estético no rosto...mas depois que conheci a Clínica e o trabalho da Dra Stéphanie, minha visão sobre procedimentos mudou completamente. Você já se sente especial na recepção. Ela tem um carinho,  respeito e o profissionalismo incrível com suas clientes." stars={5} />
        <FeedbackCard author="Juliana Severo" message="Sempre tive medo de fazer procedimento estético no rosto...mas depois que conheci a Clínica e o trabalho da Dra Stéphanie, minha visão sobre procedimentos mudou completamente. Você já se sente especial na recepção. Ela tem um carinho,  respeito e o profissionalismo incrível com suas clientes." stars={5} />
        <FeedbackCard author="Juliana Severo" message="Sempre tive medo de fazer procedimento estético no rosto...mas depois que conheci a Clínica e o trabalho da Dra Stéphanie, minha visão sobre procedimentos mudou completamente. Você já se sente especial na recepção. Ela tem um carinho,  respeito e o profissionalismo incrível com suas clientes." stars={5} />
        <FeedbackCard author="Juliana Severo" message="Sempre tive medo de fazer procedimento estético no rosto...mas depois que conheci a Clínica e o trabalho da Dra Stéphanie, minha visão sobre procedimentos mudou completamente. Você já se sente especial na recepção. Ela tem um carinho,  respeito e o profissionalismo incrível com suas clientes." stars={5} />
        <FeedbackCard author="Juliana Severo" message="Sempre tive medo de fazer procedimento estético no rosto...mas depois que conheci a Clínica e o trabalho da Dra Stéphanie, minha visão sobre procedimentos mudou completamente. Você já se sente especial na recepção. Ela tem um carinho,  respeito e o profissionalismo incrível com suas clientes." stars={5} />
        <FeedbackCard author="Juliana Severo" message="Sempre tive medo de fazer procedimento estético no rosto...mas depois que conheci a Clínica e o trabalho da Dra Stéphanie, minha visão sobre procedimentos mudou completamente. Você já se sente especial na recepção. Ela tem um carinho,  respeito e o profissionalismo incrível com suas clientes." stars={5} />
      </Carousel>
    </div>
  )
}