// style.js
import styled from "styled-components";

export const MainContent = styled.div`
     max-width: 1240px;
     margin: auto;
`;

export const MainWrapper = styled.div`
     width: 100%;
     display: flex;
     gap: 50px;
`;

export const Content = styled.div`
     width: 100%;
     padding: 20px; /* Added padding for better spacing */
`;

export const Label = styled.label`
     border: 1px solid;
     margin-top: 20px;
     width: 100%;
     display: block; /* Ensure block-level display for full width */

     > input {
          width: 100%;
          box-sizing: border-box; /* Include padding and border in width calculation */
          margin-top: 5px; /* Adjust margin for spacing */
     }
`;

export const SelectWrapper = styled.div`
     margin-top: 20px;
     width: 100%;

     .ant-select {
          width: 100%;
     }
`;
