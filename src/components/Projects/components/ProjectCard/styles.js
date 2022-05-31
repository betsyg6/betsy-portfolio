import styled from 'styled-components'
import * as COLORS from '../../../../constants/colors'

export const Project = styled.div`
  margin: 1rem;
  border: 2px solid ${COLORS.MEDIUM1};

  &:hover {
    border: 2px solid ${COLORS.MEDIUM2};
  }

  li {
    list-style: none;
    font-family: 'Darker Grotesque', sans-serif;
  }

  .project {
    width: 350px;
    height: 600px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;

    .project-header {
      width: 100%;
      height: 30%;
      background: white;
      position: absolute;
      top: 0;

      img {
        max-width: 100%;
        height: auto;
        transition: ease-in-out 600ms;
      }
    }

    .project-body {
      width: 100%;
      height: 70%;
      background: #fff;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .project-body-content {
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

        .project-footer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.2);
          padding-top: 25px;

          .project-footer-tech {
            display: flex;
            flex-direction: column;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 12px;

            span {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              font-weight: bold;
              font-family: 'Shippori Mincho B1', serif;
            }
          }

          .project-footer-project-footer-links-container {
            display: flex;
            flex-direction: column;

            .project-footer-links-container {
              display: flex;
              justify-content: space-evenly;
              padding-top: 10px;
            }

            span {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              font-weight: bold;
              font-family: 'Shippori Mincho B1', serif;
            }

            a {
              outline: none;
              text-decoration: none;
              color: ${COLORS.MEDIUM1};
            }

            a:hover {
              color: ${COLORS.MEDIUM2};
            }
          }
        }
      }
    }
  }
`
