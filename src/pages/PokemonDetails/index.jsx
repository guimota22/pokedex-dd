import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  DetailsNav,
  DetailsContainer,
  Images,
  Types,
  Info,
  MovesContainer,
  Moves,
  Habilities,
} from "./styles";
import ThemeButton from "../../components/ThemeButton";

const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [abilitiesDetails, setAbilitiesDetails] = useState([]);
  const [showMoves, setShowMoves] = useState(false);
  const [showAbilities, setShowAbilities] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonDetails(data);

      const abilitiesPromises = data.abilities.map(async (abilityData) => {
        const abilityResponse = await fetch(abilityData.ability.url);
        const abilityDetails = await abilityResponse.json();
        return abilityDetails;
      });
      const abilitiesDetailsData = await Promise.all(abilitiesPromises);
      setAbilitiesDetails(abilitiesDetailsData);
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DetailsNav>
        <Link to={"/"}>
          <span>Voltar para pokédex</span>
        </Link>
        <ThemeButton />
      </DetailsNav>
      <DetailsContainer>
        <h1>{pokemonDetails.name}</h1>
        <h3>Padrão</h3>
        <Images>
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
          />
          <img
            src={pokemonDetails.sprites.back_default}
            alt={pokemonDetails.name}
          />
        </Images>
        <h3>Shiny</h3>
        <Images>
          <img
            src={pokemonDetails.sprites.front_shiny}
            alt={pokemonDetails.name}
          />
          <img
            src={pokemonDetails.sprites.back_shiny}
            alt={pokemonDetails.name}
          />
        </Images>

        <Info>
          <Types>
            <h2>Tipo</h2>
            <ul className="type-list">
              {pokemonDetails.types.map((type, index) => (
                <li key={index} className={`type ${type.type.name}`}>
                  {type.type.name}
                </li>
              ))}
            </ul>
          </Types>

          <div className="flex">
            <h2 onClick={() => setShowAbilities(!showAbilities)}>
              Habilidades:
            </h2>
            {showAbilities && (
              <Habilities>
                <ul>
                  {abilitiesDetails.map((ability, index) => (
                    <li key={index}>
                      <p className="ability-name">{ability.name}</p>
                      {ability.effect_entries.length > 0 && (
                        <div>
                          <p>{ability.effect_entries[0].effect}</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </Habilities>
            )}
          </div>
          <div className="flex">
            <h2 onClick={() => setShowMoves(!showMoves)}>Movimentos:</h2>
            {showMoves && (
              <MovesContainer>
                <Moves>
                  {pokemonDetails.moves.map((move, index) => (
                    <li key={index}>{move.move.name}</li>
                  ))}
                </Moves>
              </MovesContainer>
            )}
          </div>
        </Info>
      </DetailsContainer>
    </div>
  );
};

export default PokemonDetails;
