import styled from "styled-components";

export const Container = styled.div`
     min-height: 100vh;
`;
export const Wrapper = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     /* max-width: 1240px; */
     margin: auto;
     height: 70px;
     align-items: center;
     padding: 0 20px;
`;
export const RightSide = styled.div`
     display: flex;
     justify-content: space-between;
     gap: 20px;
     cursor: pointer;
     /* justify-content: ; */
     > div {
          display: flex;
          gap: 20px;
     }
`;
