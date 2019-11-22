import React from 'react'
import styled from 'styled-components';

export const Carousel = () => {
  return (
    <StyledCarousel className="gallery-container">
      <div className="thumbnail-container">
        <div className="thumbnail" data-src="https://picsum.photos/200/300" style={{ width: "70px" }}>
          <img alt="slider" src="https://picsum.photos/200/300" />
          <img alt="slider" src="https://picsum.photos/200/300" />
        </div>
        <div className="thumbnail" data-src="https://picsum.photos/200/310" style={{ width: "70px" }}>
          <img alt="slider" src="https://picsum.photos/200/310" />
          <img alt="slider" src="https://picsum.photos/200/310" />
        </div>
        <div className="thumbnail active" data-src="https://picsum.photos/200/320" style={{ width: "70px" }}>
          <img alt="slider" src="https://picsum.photos/200/320" />
          <img alt="slider" src="https://picsum.photos/200/320" />
        </div>
        <div className="thumbnail" data-src="https://picsum.photos/200/330" style={{ width: "70px" }}>
          <img alt="slider" src="https://picsum.photos/200/330" />
          <img alt="slider" src="https://picsum.photos/200/330" />
        </div>
        <div className="thumbnail" data-src="https://picsum.photos/200/340" style={{ width: "70px" }}>
          <img alt="slider" src="https://picsum.photos/200/340" />
          <img alt="slider" src="https://picsum.photos/200/340" />
        </div>
        <div className="thumbnail" data-src="https://picsum.photos/200/350" style={{ width: "70px" }}>
          <img alt="slider" src="https://picsum.photos/200/350" />
          <img alt="slider" src="https://picsum.photos/200/350" />
        </div>
      </div>
    </StyledCarousel>
  )
}

export default Carousel;

const StyledCarousel = styled.div`
  height: 30rem;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  position: relative;
  overflow-x: hidden;

  .thumbnail-container {
    position: absolute;
    display: flex;
    transition: transform .1s;
    transform: translateX(0);
  }

  .thumbnail-container.active {
    cursor: grabbing;
    transform: scale(1.05);
  }

  .thumbnail-container .thumbnail {
      padding: 1rem;
      height: 15rem;
      transition: all .3s ease;
      cursor: pointer;
      filter: grayscale(1);
      z-index: 10;
    }

  .thumbnail-container .thumbnail:hover {
    transform: scale(1.1);
    z-index: 15;
    filter: grayscale(0)
    drop-shadow(0px 0px 8px rgba(0,0,0,.3));
  }

  .thumbnail-container .thumbnail img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: contain;
    object-position: center;
    z-index: 10;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .thumbnail-container .thumbnail img:nth-child(2) {
    -webkit-box-reflect: below 0px
    -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent) , to(rgba(250, 250, 250, 0.1)));
    z-index: 0;
  }

  .thumbnail-container .thumbnail.active {
    transform: scale(1.3);
    filter: grayscale(0);
    z-index: 14;
  }
`;