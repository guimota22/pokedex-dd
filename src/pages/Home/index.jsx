import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { HomeContent, Title, PokemonList, Pokemon } from "./styles";
import ThemeButton from "../../components/ThemeButton";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // State para o termo de pesquisa
  const [searchResults, setSearchResults] = useState([]); // State para os resultados da pesquisa

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
      );
      const data = await response.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
          return {
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
            id: pokemonData.id,
          };
        })
      );

      setPokemons((prevPokemons) => {
        const newPokemons = pokemonDetails.filter(
          (newPokemon) =>
            !prevPokemons.some((pokemon) => pokemon.name === newPokemon.name)
        );
        return [...prevPokemons, ...newPokemons];
      });
    };

    fetchPokemons();
  }, [offset]);

  useEffect(() => {
    // Filtra os pokemons com base no termo de pesquisa
    const results = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, pokemons]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <ThemeButton />
      <HomeContent>
        <Title>Listagem de Pokémons</Title>
        <input
          type="text"
          placeholder="Pesquisar Pokémon"
          value={searchTerm}
          onChange={handleSearch}
        />
        <PokemonList>
          {searchResults.map((pokemon, index) => (
            <Link to={`/pokemon/${pokemon.id}`} key={index}>
              <Pokemon>
                <p>{pokemon.name}</p>
                <img src={pokemon.image} alt={pokemon.name} />
              </Pokemon>
            </Link>
          ))}
        </PokemonList>
        <button onClick={() => setOffset(offset + 10)}>Carregar mais</button>
      </HomeContent>
    </div>
  );
};

export default Home;
