import styled from 'styled-components';
import * as COLORS from '../constants/colors';

export const WrapperStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 15%;

  h1 {
    font-size: 45px;
    margin-top: 70px;
    margin-left: 10px;
    width: 100%;

    font-family: 'Bungee Shade', cursive;
    color: ${COLORS.DARK2};
  }
  h2 {
    font-family: 'Shippori Mincho B1', serif;
  }
  p {
    font-size: 1.2rem;
    font-family: 'Darker Grotesque', sans-serif;
  }
`;

export const HalfWrapStyled = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 45px;
    margin-top: 70px;
    margin-left: 10px;
    width: 100%;
    border-bottom: 1px solid ${COLORS.MEDIUM1};
    font-family: 'Bungee Shade', cursive;
    color: ${COLORS.DARK2};
  }
  h2 {
    font-family: 'Shippori Mincho B1', serif;
  }
  p {
    font-size: 22px;
    font-family: 'Shippori Mincho B1', serif;
  }
`;

export const CardStyled = styled.div`
  border-radius: 7px;
  border: solid 1px black;
  margin: 3px;
  padding: 5px;
  width: 80px;
  &:hover {
    color: ${COLORS.MEDIUM1};
    border: solid 1px ${COLORS.MEDIUM1};
  }
`;

export const ProjectStyled = styled.div`
margin: 1rem;

  .post {
    width: 350px;
    height: 600px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;
    

    &:hover {
       img {
          transform: translatey(-10px) translatex(-5px) scale(1.05)
       }
    }

    .header_post {
      width: 100%;
      height: 30%;
      background: white;
      position: absolute;
      top: 0;
      cursor: pointer;
     

      img {
        max-width: 100%;
        height: auto;
         transition: ease-in-out 600ms;
      }
    }

    .body_post {
      width: 100%;
      height: 70%;
      background: #fff;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;


      .post_content {
        width: 80%;
        height: 80%;
        background: #fff;
        position: relative;

        h2 {
          font-size: 20px;
          font-weight: bold;
        }

        p {
          font-size: 17px;
          font-weight: normal;
        }

        .container_infos {
          width: 100%;
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
          border-top: 1px solid rgba(0, 0, 0, .2);
          padding-top: 25px;

          .postedBy {
            display: flex;
            flex-direction: column;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 12px;

            span {
              font-size: 12px;
              text-transform: uppercase;
              opacity: 0.5;
              letter-spacing: 1px;
              font-weight: bold;
            }
          }

          .container_tags {
            display: flex;
            flex-direction: column;

            span {
              font-size: 12px;
              text-transform: uppercase;
              opacity: 0.5;
              letter-spacing: 1px;
              font-weight: bold;
            }

            .tags {
              ul {
                display: flex;
                li {
                  font-size: 12px;
                  letter-spacing: 2px;
                  list-style: none;
                  margin-left: 8px;
                  text-transform: uppercase;
                  position: relative;
                  z-index: 1;
                  display: flex;
                  justify-content: center;
                  cursor: pointer;

                  &:first-child {
                    margin-left: 0px;
                  } 
                }
              }
            }
          }
        }
      }
    }
  }

`;

export const ArticleStyled = styled.div`
  background-color: var(${COLORS.MEDIUM1});
  display: block;
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 1.4rem;
  width: 300px;
  min-height: 90px;
  border: 3px solid ${COLORS.MEDIUM1};
  padding: 15px;
  margin: 50px;
  box-shadow: 10px -10px 0 -3px ${COLORS.WHITE}, 10px -10px ${COLORS.MEDIUM2},
    20px -20px 0 -3px ${COLORS.WHITE}, 20px -20px ${COLORS.MEDIUM1},
    30px -30px 0 -3px ${COLORS.WHITE}, 30px -30px ${COLORS.MEDIUM2},
    40px -40px 0 -3px ${COLORS.WHITE}, 40px -40px ${COLORS.MEDIUM1};
  transition: box-shadow 1s, top 1s, left 1s;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;

  &:hover {
    top: -40px;
    left: 40px;
    box-shadow: 0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM2},
      0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM1},
      0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM2},
      0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM1};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 5rem;
`;
