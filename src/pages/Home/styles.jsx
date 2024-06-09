import styled from "styled-components";

const HomeContent = styled.div`
  text-align: center;

  & button {
    background-color: #ff0000;
    color: #fff;
    border: none;
    border-radius: 4px;
    width: 150px;
    height: 50px;
    margin: 30px 0;
    cursor: pointer;
  }

  > input {
    width: 200px;
    height: 30px;
    text-align: center;
    margin-bottom: 20px;
    border: 1px solid #ffcc00;
    border-radius: 4px;
  }
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: #ffcc00;
  text-transform: uppercase;
`;

const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto auto; 
  text-align: center;

  gap: 9px;
`;

const Pokemon = styled.li`
  list-style: none;
  height: 300px;
  border: solid 1px #ddd;
  background: linear-gradient(to top, #66CCCC, #2b2a2a);

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;

  & p {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 10px;
    color: #fff;

    border: 1px solid #333;
    width: 200px;
    border-radius: 6px;
  }

  & img {
    width: 180px;
    margin-top: 2px;
  }
`;

export { HomeContent, Title, PokemonList, Pokemon }
