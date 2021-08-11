import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import { Route } from "react-router-dom";
import Search from "./components/ui/Search";
import Character from "./components/characters/SingleCharacter";
import "./App.css";
import SingleCharacter from "./components/characters/SingleCharacter";
import { Waypoint } from "react-waypoint";

const App = () => {
  const [items, setItems] = useState([]);
  const [hasNextPage]
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Route path="/" exact>
        <>
          <Search getQuery={(q) => setQuery(q)} />
          <CharacterGrid isLoading={isLoading} items={items} />
        </>
      </Route>
      <Route path="/:name">
        <>
          <SingleCharacter />
        </>
      </Route>
    </div>
  );
};

export default App;
