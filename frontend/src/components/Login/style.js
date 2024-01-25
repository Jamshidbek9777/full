import styled from "styled-components";

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
     height: 80vh;
`;

export const Wrapper = styled.div`
     max-width: 400px;
     width: 100%;
     padding: 20px;
     border: 1px solid #ddd;
     border-radius: 8px;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
     background-color: #fff;

     h2 {
          margin-bottom: 20px;
          font-size: 24px;
          color: #333;
     }

     form {
          display: flex;
          flex-direction: column;

          div {
               margin-bottom: 15px;

               input {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    box-sizing: border-box;
                    font-size: 16px;
               }
          }

          button {
               background-color: #4caf50;
               color: #fff;
               padding: 12px;
               border: none;
               border-radius: 4px;
               cursor: pointer;
               font-size: 16px;
               transition: background-color 0.3s;

               &:hover {
                    background-color: #45a049;
               }
          }
     }

     @media (max-width: 480px) {
          max-width: 100%;
     }
`;
