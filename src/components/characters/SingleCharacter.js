import React, { useEffect, useState } from "react";
import { useLocation, useParams, Redirect } from "react-router-dom";
import axios from "axios";

function SingleCharacter(props) {
  const [quotes, setQuotes] = useState([]);
  const location = useLocation();
  const params = useParams();
  useEffect(() => {
    console.log(location, params.name);
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/quote?author=${params.name}`
      );

      console.log(result.data);

      setQuotes(result.data);
    };
    fetchItems();
  }, []);
  return !location.character ? (
    <Redirect to="/" />
  ) : (
    <div style={{ textAlign: "center" }}>
      <img style={{ width: "400px" }} src={location.character.img} />
      <li>
        <strong>Actor Name:</strong> {location.character.portrayed}
      </li>
      <li>
        <strong>Occupation:</strong> {location.character.occupation[0]}
      </li>
      <li>
        <strong>Birthday:</strong> {location.character.birthday}
      </li>
      <li>
        <strong>Status:</strong> {location.character.status}
      </li>
      {location.character.nickname && (
        <li>
          <strong>Nickname:</strong> {location.character.nickname}
        </li>
      )}
      <li>
        <strong>Potrayed:</strong> {location.character.portrayed}
      </li>
      <strong>Quotes</strong>
      {quotes.map((q) => (
        <p style={{ padding: "10px" }}>{q.quote}</p>
      ))}
    </div>
  );
}

export default SingleCharacter;
