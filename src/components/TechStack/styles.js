import styled from 'styled-components';
import * as COLORS from '../../constants/colors';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  margin: 1em;
  flex-flow: wrap;
  box-sizing: border-box;

  ul {
    list-style-type: none;
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 1rem;
  }

  .card-container {
    flex: 300px;
    margin: 30px;

    .card {
      font-weight: bold;
      position: relative;
      width: 100%;

      a {
        padding: 30px;
        padding-top: 5px;
        width: auto;
        height: 400px;
        border: 2px solid black;
        background: white;
        text-decoration: none;
        color: black;
        display: block;
        transition: 0.25s ease;

        h2 {
          margin: none;
        }

        &:hover {
          transform: translate(-30px, -30px);
          border-color: ${COLORS.MEDIUM1};

          .card--display {
            display: none;
          }

          .card--hover {
            display: block;
          }
        }

        .card--display {
          h2 {
            margin: 5px 0 0;
            padding-top: 5px;
          }
        }

        .card--hover {
          display: none;

          h2 {
            margin: 20px 0;
          }
        }
      }

      .card--border {
        position: absolute;
        width: 98%;
        height: 99%;
        left: 0;
        top: 0;
        border: 2px dashed black;
        z-index: -1;
      }
    }
  }
`;

