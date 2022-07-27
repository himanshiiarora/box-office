import styled from "styled-components";

import { SearchCard } from "../styled"; 
export const StyledShowCard = styled(SearchCard)`
.btns {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: #000;
    padding:0.4em;
    &:hover {
      background-color: #000;
      color: #fff;
      border-radius:0.5em;
    }
  }
  button {
    outline: none;
    border: 1px solid #8e8e8e;
    border-radius: 5px;
    padding: 5px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      background-color: #000;
      color: #fff;
      transition:ease-in 0.5s;
    }
  }
}
`;