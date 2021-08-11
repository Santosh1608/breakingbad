import React from "react";
import { useHistory } from "react-router-dom";
const CharacterItem = ({ item }) => {
  const history = useHistory();
  return (
    <div className="card">
      <div className="card-inner">
        <div
          className="card-front"
          onClick={() =>
            history.push({
              pathname: `${item.name}`,
              character: item,
            })
          }
        >
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation[0]}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
