import styled from 'styled-components';
import * as COLORS from '../../../../constants/colors';

export const ProjectStyled = styled.div`
margin: 1rem;

li {
  list-style: none;
  font-family: 'Darker Grotesque', sans-serif;
}

  .post {
    width: 350px;
    height: 600px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;
    

    

    .header_post {
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

    .body_post {
      width: 100%;
      height: 70%;
      background: #fff;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    


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
              letter-spacing: 1px;
              font-weight: bold;
              font-family: 'Shippori Mincho B1', serif;
            }
          }

          .container_tags {
            display: flex;
            flex-direction: column;

            .links {
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