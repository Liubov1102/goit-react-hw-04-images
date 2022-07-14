import styled from 'styled-components';

export const Header = styled.header`
 top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  `;

export const Button = styled.button`
display: inline-block;
    cursor: pointer;
    padding: 8px;
   
    margin: 10px;
    background: rgb(226, 226, 226);
    border: none;
    border-radius: 4px;
    transition-property: box-shadow;
    font-weight: 400;
    font-size: 16px;

`;