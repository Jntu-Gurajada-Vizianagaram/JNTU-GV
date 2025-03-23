import React from 'react';
import styled from 'styled-components';

const Card = ({ title, image, link }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <img src={image} alt={title} />
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>
            <div className="front-content">
              <small className="badge">JNTUGV</small>
              <div className="description">
                <div className="title">
                  <strong>{title}</strong>
                </div>
                <p className="card-footer">
                  <a href={link}>
                    <button type="button" className="btn btn-dark">Visit Here</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 190px;
    height: 190px;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 480px) {
      width: 120px;
      height: 120px;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 20px 1px #000000ee;
    border-radius: 5px;
  }

  .front, .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 98%;
    height: 98%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media (max-width: 768px) {
      gap: 20px;
    }

    @media (max-width: 480px) {
      gap: 10px;
    }
  }

  .back-content img {
    width: 100%; /* Ensure the image takes full width */
    height: 100%; /* Ensure the image takes full height */
    object-fit: cover; /* Prevent distortion and ensure the image covers the area */
    object-position: center; /* Center the image */
    border-radius: 5px; /* Match the card's border radius */
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 8px;
    }

    @media (max-width: 480px) {
      padding: 5px;
    }
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;

    @media (max-width: 768px) {
      font-size: 10px;
    }

    @media (max-width: 480px) {
      font-size: 8px;
    }
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;

    @media (max-width: 768px) {
      padding: 8px;
    }

    @media (max-width: 480px) {
      padding: 5px;
    }
  }

  .title {
    font-size: 11px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      font-size: 10px;
    }

    @media (max-width: 480px) {
      font-size: 8px;
    }
  }

  .title p {
    width: 50%;
  }

  .card-footer {
    color: #ffffff88;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    font-size: 8px;

    @media (max-width: 768px) {
      font-size: 7px;
    }

    @media (max-width: 480px) {
      font-size: 6px;
    }
  }

  .front .img {
    position: absolute;
    width: 90%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #370a68;  
    position: relative;
    filter: blur(15px);
    animation: floating 1500ms infinite linear;

    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
    }

    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  }

  #bottom {
    background-color: #55b2e7;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;

    @media (max-width: 768px) {
      width: 120px;
      height: 120px;
      left: 40px;
    }

    @media (max-width: 480px) {
      width: 80px;
      height: 80px;
      left: 30px;
    }
  }

  #right {
    background-color: #ff9966;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;

    @media (max-width: 768px) {
      left: 120px;
      top: -60px;
    }

    @media (max-width: 480px) {
      left: 80px;
      top: -40px;
    }
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(20px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export default Card;