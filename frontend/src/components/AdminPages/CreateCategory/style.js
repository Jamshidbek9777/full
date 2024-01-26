import styled from "styled-components";

export const MainContent = styled.div`
     max-width: 1240px;
     margin: auto;
`;
export const MainWrapper = styled.div`
     display: flex;
     gap: 50px;
`;
export const Content = styled.div`
     /* width: 500px; */
`;
export const StyledTable = styled.table`
     width: 100%;
     border-collapse: collapse;
     th,
     td {
          padding: 12px;
          text-align: left;
          border: 1px solid #ddd;
     }

     th {
          background-color: #f2f2f2;
     }

     button {
          margin-right: 18px;
     }
     td {
     }
`;
export const StyledForm = styled.form`
     display: flex;
     gap: 16px;
     margin-top: 16px;

     input {
          flex: 1;
     }

     button {
          margin-left: 8px;
     }
`;
