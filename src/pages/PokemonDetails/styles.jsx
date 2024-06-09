import styled from "styled-components";

const DetailsNav = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  
  
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background-color: grey;
  text-align: center;

  > img {
    width: 160px;
  }

  > h1::first-letter {
    text-transform: uppercase;
  }
`;

const Types = styled.div`
  display: flex;
  gap: 1rem;

  > .type-list {
    display: flex;
    gap: 1rem;
    align-items: center;

    > .type {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 30px;
      border-radius: 6px;
      text-transform: uppercase;
      color: #fff;
    }

    > .normal {
      background-color: #919aa2;
    }

    > .fire {
      background-color: #ff9d55;
    }

    > .water {
      background-color: #5090d6;
    }

    > .grass {
      background-color: #63bc5a;
    }

    > .flying {
      background-color: #89aae3;
    }

    > .fighting {
      background-color: #ce416b;
    }

    > .poison {
      background-color: #b567ce;
    }

    > .electric {
      background-color: #f4d23c;
    }

    > .ground {
      background-color: #d97845;
    }

    > .rock {
      background-color: #c5b78c;
    }

    > .psychic {
      background-color: #fa7179;
    }

    > .ice {
      background-color: #73cec0;
    }

    > .bug {
      background-color: #91c12f;
    }

    > .ghost {
      background-color: #5269ad;
    }

    > .steel {
      background-color: #5a8ea2;
    }

    > .dragon {
      background-color: #0b6dc3;
    }

    > .dark {
      background-color: #5a5465;
    }

    > .fairy {
      background-color: #ec8fe6;
    }
  }
`;

const Images = styled.div``;

const Info = styled.div`
padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > .flex {
    > h2 {
      cursor: pointer;
      margin-bottom: 20px;
    }
    > .ul {

      width: 800px;
    }
  }
`

const MovesContainer = styled.div`

`

const Moves = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  grid-gap: 20px;
  font-weight: 800;
  text-transform: uppercase;
`;

const NavInfo = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 20px;

  > button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    font-weight: 600;
  }
`;

const Habilities = styled.div`
  > ul {
    > li {
      > .ability-name {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 800;
      }
    }
  }
`;


export { DetailsNav, DetailsContainer, Images, Types, Info, MovesContainer, Moves, Habilities };
