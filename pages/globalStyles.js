 const GlobalStyles = `body {
              margin: 0;
            }
            .customModal{
              max-width: initial;
              padding: 0;
            }
            .customModal svg{
                fill: #fff;
            }

            @media (max-width: 600px) {
              .customModal{
                width:100%;
              }
              .overlayModal{
                margin:0;
                padding: 0;
              }
            }

            @-webkit-keyframes trackBallSlide {
              0% {
                opacity: 1;
                -webkit-transform: scale(1) translateY(-10px);
                        transform: scale(1) translateY(-10px);
              }
              6% {
                opacity: 1;
                -webkit-transform: scale(0.9) translateY(5px);
                        transform: scale(0.9) translateY(5px);
              }
              14% {
                opacity: 0;
                -webkit-transform: scale(0.4) translateY(40px);
                        transform: scale(0.4) translateY(40px);
              }
              15%, 19% {
                opacity: 0;
                -webkit-transform: scale(0.4) translateY(-10px);
                        transform: scale(0.4) translateY(-10px);
              }
              28%, 29.99% {
                opacity: 1;
                -webkit-transform: scale(1) translateY(-10px);
                        transform: scale(1) translateY(-10px);
              }
              30% {
                opacity: 1;
                -webkit-transform: scale(1) translateY(-10px);
                        transform: scale(1) translateY(-10px);
              }
              36% {
                opacity: 1;
                -webkit-transform: scale(0.9) translateY(5px);
                        transform: scale(0.9) translateY(5px);
              }
              44% {
                opacity: 0;
                -webkit-transform: scale(0.4) translateY(40px);
                        transform: scale(0.4) translateY(40px);
              }
              45%, 49% {
                opacity: 0;
                -webkit-transform: scale(0.4) translateY(-10px);
                        transform: scale(0.4) translateY(-10px);
              }
              58%, 59.99% {
                opacity: 1;
                -webkit-transform: scale(1) translateY(-10px);
                        transform: scale(1) translateY(-10px);
              }
              60% {
                opacity: 1;
                -webkit-transform: scale(1) translateY(-10px);
                        transform: scale(1) translateY(-10px);
              }
              66% {
                opacity: 1;
                -webkit-transform: scale(0.9) translateY(5px);
                        transform: scale(0.9) translateY(5px);
              }
              74% {
                opacity: 0;
                -webkit-transform: scale(0.4) translateY(40px);
                        transform: scale(0.4) translateY(40px);
              }
              75%, 79% {
                opacity: 0;
                -webkit-transform: scale(0.4) translateY(-10px);
                        transform: scale(0.4) translateY(-10px);
              }
              88%, 100% {
                opacity: 1;
                -webkit-transform: scale(1) translateY(-10px);
                        transform: scale(1) translateY(-10px);
              }
            }

            @-webkit-keyframes arrowOpacity      {
                0% {
                  opacity: 1;
                }
                6% {
                  opacity: 1;
                }
                14% {
                  opacity: 0.4;
                }
                15%, 19% {
                  opacity: 0.4;
                }
                28%, 29.99% {
                  opacity: 1;
                }
                30% {
                  opacity: 1;
                }
                36% {
                  opacity: 1;
                }
                44% {
                  opacity: 0.4;
                }
                45%, 49% {
                  opacity: 0.4;
                }
                58%, 59.99% {
                  opacity: 1;
                }
                60% {
                  opacity: 1;
                }
                66% {
                  opacity: 1;
                }
                74% {
                  opacity: 0.4;
                }
                75%, 79% {
                  opacity: 0.4;
                }
                88%, 100% {
                  opacity: 1;
                }
              }
            `;

export default GlobalStyles;