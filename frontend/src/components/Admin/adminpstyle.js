import styled from "styled-components";
export const Container = styled.div``;
export const MainWrapper = styled.div``;
export const Lists = styled.div``;
export const List = styled.div`
     border: 1px solid black;
     cursor: pointer;
     padding: 20px;
     border-radius: 6px;
     margin-bottom: 10px;
     background-color: ${(props) => (props.selected ? "blue" : "inherit")};
     color: ${(props) => (props.selected ? "white" : "inherit")};
     &:hover {
          background-color: ${(props) => (props.selected ? "blue" : "#f0f0f0")};
     }
`;
