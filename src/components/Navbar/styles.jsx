import styled from "styled-components";

const NavbarStyle = styled.div`
  background-color: #e30b0b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  border-bottom: 2px solid #000;

  & .li {
    color: #fff;
  }
`;

const Img = styled.img`
  width: 50px;
`;
export { NavbarStyle, Img };
